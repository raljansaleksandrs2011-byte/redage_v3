using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Database;
using LinqToDB;
using NeptuneEvo.Accounts.Registration.Models;
using NeptuneEvo.Handles;
using NeptuneEvo.Players;
using Redage.SDK;

namespace NeptuneEvo.Accounts.Email.Registration
{
    public class Repository
    {
                
        private static readonly nLog Log = new nLog("Accounts.Email.Registration.Repository");

        public static async Task<RegistrationEnum> Verification(ExtPlayer player, string login, string password, string email, string promo)
        {
            try
            {
                var sessionData = player.GetSessionData();
                if (sessionData == null) return RegistrationEnum.LoadingError;
                if (player.IsAccountData()) return RegistrationEnum.LoadingError;
                if (sessionData.RealHWID.Equals("NONE") || sessionData.RealSocialClub.Equals("NONE")) return RegistrationEnum.LoadingError;
                if (login.Length < 1 || password.Length < 1 || email.Length < 1) return RegistrationEnum.DataError;

                login = login.ToLower();
                email = email.ToLower();

                await using var db = new ServerBD("MainDB");//В отдельном потоке

                var account = await db.Accounts
                    .Where(v => v.Login.ToLower() == login || v.Email.ToLower() == email || v.Socialclub == sessionData.SocialClubName || v.Socialclub == sessionData.RealSocialClub)
                    .FirstOrDefaultAsync();

                if (account != null)
                {
                    if (account.Login.ToLower() == login) return RegistrationEnum.UserReg;
                    if (account.Email.ToLower() == email) return RegistrationEnum.EmailReg;
                    if (Main.ServerNumber != 0 && (account.Socialclub == sessionData.SocialClubName || account.Socialclub == sessionData.RealSocialClub)) return RegistrationEnum.SocialReg;
                }
                promo = promo.ToLower();

                if (!string.IsNullOrEmpty(promo))
                {
                    if (!Main.PromoCodes.ContainsKey(promo))
                    {
                        if (int.TryParse(promo, out int refuid)) return RegistrationEnum.PromoError;
                        if (Main.UUIDs.Contains(refuid)) return RegistrationEnum.ReffError;
                        return RegistrationEnum.PromoError;
                    }
                    else
                    {
                        var pcdata = Main.PromoCodes[promo];
                        if (pcdata.RewardLimit != 0 && pcdata.RewardReceived >= pcdata.RewardLimit) return RegistrationEnum.PromoLimitError;
                    }
                }

                var hash = await Email.Repository.Add(player, login, password, email, promo, type: 0);

                Utils.Analytics.HelperThread.AddUrl($"verify?email={email}&name={login}&hash={hash}&sid={Main.ServerNumber}");
                
                Trigger.ClientEvent(player, "client.registration.sendEmail");
                return RegistrationEnum.Registered;
            }
            catch (Exception e)
            {
                Log.Write($"Register Exception: {e.ToString()}");
                return RegistrationEnum.Error;
            }
        }
        
        public static void VerificationConfirm(string hash, string ga)
        {
            var emailVerification = Email.Repository.GetVerification(hash, isRegistered: true);
            
            if (emailVerification != null)
            {
                var player = emailVerification.Player;
                
                var sessionData = player.GetSessionData();
                if (sessionData == null) return;
                
                Trigger.SetTask(async () =>
                {
                    try
                    {
                        var result = await Accounts.Registration.Repository.Register(player, emailVerification.Login, emailVerification.Password, emailVerification.Email, emailVerification.Promo, ga);
                        
                        if (result == RegistrationEnum.Error) Accounts.Registration.Repository.MessageError(player,  "Unexpected error!");
                        else if (result == RegistrationEnum.LoadingError) Accounts.Registration.Repository.MessageError(player,  "Please wait a few seconds and try again...");
                        else if (result == RegistrationEnum.SocialReg) Accounts.Registration.Repository.MessageError(player,  "A account has already been registered for this SocialClub.!");
                        else if (result == RegistrationEnum.UserReg) Accounts.Registration.Repository.MessageError(player,  "This username is already taken!");
                        else if (result == RegistrationEnum.EmailReg) Accounts.Registration.Repository.MessageError(player,  "This email is already taken!");
                        else if (result == RegistrationEnum.DataError) Accounts.Registration.Repository.MessageError(player,  "Error in filling in fields!");
                        else if (result == RegistrationEnum.PromoError) Accounts.Registration.Repository.MessageError(player,  "This promo code does not exist at the moment, please enter a valid one or clear the field.!");
                        else if (result == RegistrationEnum.ReffError) Accounts.Registration.Repository.MessageError(player,  "We see that you entered a friend's referral code instead of a streamer promo code, so we ask that you leave the promo code field blank for now and, after creating your character, find the appropriate menu on your phone.");
                        else if (result == RegistrationEnum.PromoLimitError) Accounts.Registration.Repository.MessageError(player,  "We're sorry, but the promo code has exceeded its activation limit. Please enter another one!");
                        else if (result == RegistrationEnum.ABError) Accounts.Registration.Repository.MessageError(player,  "Registration error, please use your main SocialClub to log in to the game..");
                        Log.Write($"{sessionData.Name} ({sessionData.SocialClubName} | {sessionData.RealSocialClub}) tryed to signup.");

                    }
                    catch (Exception e)
                    {
                        Log.Write($"ClientEvent_signup Exception: {e.ToString()}");
                    }
                });
            }
        }
        
    }
}