using System.Text.RegularExpressions;
using System.Threading.Tasks;
using GTANetworkAPI;
using NeptuneEvo.Accounts.Email.Confirmation.Models;
using NeptuneEvo.Handles;
using Redage.SDK;

namespace NeptuneEvo.Accounts.Email.Confirmation
{
    public class Events : Script
    {

        [Command("emailconfirm")]
        public void emailconfirm(ExtPlayer player, string email)
        {        
            EmailConfirm(player, email);
        }

        [RemoteEvent("server.email.confirm")]
        public void EmailConfirm(ExtPlayer player, string email)
        {                
            var accountData = player.GetAccountData();
            if (accountData == null) 
                return;
            
            var rg = new Regex(@"[0-9]{8,11}[.][0-9]{8,11}", RegexOptions.IgnoreCase);
            
            if (rg.IsMatch(accountData.Ga))
            {
                Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, "You have already confirmed your email.!", 3000);
                return;
            }

            Trigger.SetTask(async () =>
            {
                var result = await Repository.Confirm(player, email);

                if (result == EmailConfirmEnum.Error)
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, "Unexpected error!", 5000);
                else if (result == EmailConfirmEnum.LoadingError)
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter,
                        "Please wait a few seconds and try again...", 5000);
                else if (result == EmailConfirmEnum.EmailReg)
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, "This email is already taken!", 5000);
                else if (result == EmailConfirmEnum.DataError)
                    Notify.Send(player, NotifyType.Error, NotifyPosition.BottomCenter, "Error in filling in fields!",
                        5000);
                else if (result == EmailConfirmEnum.Success)
                    Notify.Send(player, NotifyType.Info, NotifyPosition.BottomCenter,
                        "An email containing a link to confirm your account has been sent to your email address. The link will be valid for 15 minutes.",
                        5000);
            });
        }
    }
}