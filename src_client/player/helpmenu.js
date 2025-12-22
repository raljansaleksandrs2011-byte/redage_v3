let helpMenuState = false;

let isOpenEveryDayAward = false;

global.closeHelpMenu = () => {
    if(helpMenuState) {
        mp.gui.emmit(`window.router.setHud();`);
        helpMenuState = false;
        global.menuClose();
        mp.gui.cursor.visible = false;
    }

    if (isOpenEveryDayAward) {
        isOpenEveryDayAward = false;
        mp.events.call('client.battlepass.open');
        //mp.events.callRemote('server.everydayaward.open', false);
    }
}

global.isNewChar = false;

gm.events.add('client:OnOpenHelpMenu', () => {
    global.isNewChar = true;
});


/*
gm.events.add('client:OnOpenHelpMenu', () => {
    try
    {
        mp.events.call('notify', 3, 9, translateText("Don't forget to visit NPC Vitaly Debich to begin the starting quest line, which will introduce you to our wonderful state!"), 3000);
        if (questNameToPeds [startActorName] && mp.peds.exists (questNameToPeds [startActorName])) {
            global.createCamera ("peds", questNameToPeds [startActorName]);
            global.localplayer.freezePosition(true);

            setTimeout(function() {
                mp.gui.chat.push(translateText("Don't forget to visit NPC Vitaly Debich! to begin the starting quest line that will introduce you to our wonderful state!"));

                global.cameraManager.deleteCamera ('peds', true, 500);
                global.localplayer.freezePosition(false);

                global.binderFunctions.o_help ();
            }, 10000);
        } else
            global.binderFunctions.o_help ();
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/helpmenu", "client:OnOpenHelpMenu", e.toString());
    }
});*/


gm.events.add('client:OnCloseHelpMenu', () => {
    closeHelpMenu();
});

global.binderFunctions.o_help = () => {
	if(global.chatActive) return;
    if(!global.menuCheck() && !helpMenuState)
    {
        global.menuOpen();
        mp.gui.emmit(`window.router.setView("PlayerHelp")`);
        gm.discord(translateText("Explores the help menu"));
        helpMenuState = true;
        mp.gui.cursor.visible = true;
    }
    else closeHelpMenu();
};

global.binderFunctions.c_help = () => {
    closeHelpMenu()
};

gm.events.add('client.help.waypoint', (waypoint) => {
    mp.events.callRemote('server.help.waypoint', waypoint);
});