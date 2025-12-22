let stType = 0;

gm.events.add('client.sm.open', async (title, titleIcon, json) => {
    try
    {
        if (global.menuCheck()) return;
        mp.gui.emmit(`window.router.setView("BusinessMenu")`);
        global.menuOpen()
        stType = 0;
        await global.wait(50); 
        mp.gui.emmit(`window.smOpen('${title}', '${titleIcon}', 'blue', '${json}', 1);`);
        gm.discord(translateText("It is being purchased"));
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/simplemenu", "client.sm.open", e.toString());
    }
});

gm.events.add('client.sm.openBlack', async (json) => {
    try
    {
        if (global.menuCheck()) return;
        mp.gui.emmit(`window.router.setView("BusinessMenu")`);
        global.menuOpen()
        stType = 1;
        await global.wait(50); 
        mp.gui.emmit(`window.smOpen('${translateText("Black Market")}', 'sm-icon-logo-gang', 'green', '${json}');`);
        gm.discord('Exploring the black market');
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/simplemenu", "client.sm.openBlack", e.toString());
    }
});

gm.events.add('client.sm.openShop', async (json) => {
    try
    {
        if (global.menuCheck()) return;
        mp.gui.emmit(`window.router.setView("BusinessMenu")`);
        global.menuOpen()
        stType = 2;
        await global.wait(50); 
        mp.gui.emmit(`window.smOpen('${translateText("Store")}', 'sm-icon-logo-shop', 'green', '${json}');`);
        gm.discord('Buying in 24/7');
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/simplemenu", "client.sm.openShop", e.toString());
    }
});

gm.events.add('client.sm.openSaluteShop', async (json) => {
    try
    {
        if (global.menuCheck()) return;
        mp.gui.emmit(`window.router.setView("BusinessMenu")`);
        global.menuOpen()
        stType = 3;
        await global.wait(50); 
        mp.gui.emmit(`window.smOpen('${translateText("Firecracker store")}', 'inv-item-Firework4', 'green', '${json}');`);
        gm.discord('Buying saultes');
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/simplemenu", "client.sm.openSaluteShop", e.toString());
    }
});

gm.events.add('client.sm.openHuntingShop', async (json) => {
    try
    {
        if (global.menuCheck()) return;
        mp.gui.emmit(`window.router.setView("BusinessMenu")`);
        global.menuOpen()
        stType = 4;
        await global.wait(50); 
        mp.gui.emmit(`window.smOpen('${translateText("Huntiny store")}', 'inv-item-pickaxe1', 'green', '${json}');`);
        gm.discord(translateText("Im hunting store"));
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/simplemenu", "client.sm.openHuntingShop", e.toString());
    }
});

gm.events.add('client.sm.click', (id) => {
    try
    {
        switch (stType) {
            case 0: //Фракционный обработчик
                mp.events.callRemote('server.sm.fraction', id);
                break;
            case 1: //Черный рынок
                mp.events.callRemote('server.sm.black', id);
                break;
            case 2: //Магазин
                mp.events.callRemote('server.sm.shop', id);
                break;
            case 3: //Магазин
                mp.events.callRemote('server.sm.saluteShop', id);
                break;
            case 4: //Охотничий магазин
                mp.events.callRemote('server.sm.huntingShop', id);
                break;
        }
    }
    catch (e) 
    {
        mp.events.callRemote("client_trycatch", "player/simplemenu", "client.sm.click", e.toString());
    }
});

gm.events.add('client.sm.exit', () => {
    mp.gui.emmit(`window.router.setHud();`);
    global.menuClose();
})
