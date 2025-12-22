gm.discord = (detailedStatus) => {
    let state = "On Harbo Roleplay";

    if (global.localplayer && typeof global.localplayer.remoteId !== "undefined")
        state = translateText('On Harbo Roleplay under ID {0}', global.localplayer.remoteId);

    mp.discord.update(detailedStatus, state);
}

global.discordDefault = () => {
    gm.discord(translateText('Enjoying life'))
};

discordDefault ();