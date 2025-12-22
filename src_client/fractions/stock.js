// STOCK //!
gm.events.add('openStock', (data) => {
	try 
	{
		if (global.menuCheck()) return;
		mp.gui.emmit(`window.router.setView("FractionsStock", '${data}');`);
		gm.discord(translateText("At the fractional warehouse"));
		global.menuOpen();
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/stock", "openStock", e.toString());
	}
});

gm.events.add('closeStock', () => {
	try 
	{
		global.menuClose();
		mp.gui.emmit(`window.router.setHud()`);
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/stock", "closeStock", e.toString());
	}
});

gm.events.add('stockTake', (index) => {
	try 
	{
		global.menuClose();
		mp.gui.emmit(`window.router.setHud()`);

		switch (index) {
			case 0: //cash
				mp.events.callRemote('setStock', "money");
				global.input.set(translateText("Взять деньги"), translateText("Enter the amount of money"), 10, "take_stock");
				break;
			case 1: //healkit
				mp.events.callRemote('setStock', "medkits");
				global.input.set(translateText("Take the first aid kits"), translateText("Enter the number of first aid kits"), 10, "take_stock");
				break;
			case 2: //weed
				mp.events.callRemote('setStock', "drugs");
				global.input.set(translateText("Take drugs"), translateText("Enter the amount of drugs"), 10, "take_stock");
				break;
			case 3: //mats
				mp.events.callRemote('setStock', "mats");
				global.input.set(translateText("Take mats"), translateText("Enter the number of mats"), 10, "take_stock");
				break;
			case 4: //weapons stock
				mp.events.callRemote('openWeaponStock');
				break;
		}
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/stock", "stockTake", e.toString());
	}
});

gm.events.add('stockPut', (index) => {
	try 
	{
		global.menuClose();
		mp.gui.emmit(`window.router.setHud()`);

		switch (index) {
			case 3: //mats
				mp.events.callRemote('setStock', "mats");
				global.input.set(translateText("Put mats"), translateText("Enter the number of mats"), 10, "put_stock");
				break;
			case 0: //cash
				mp.events.callRemote('setStock', "money");
				global.input.set(translateText("Deposit money"), translateText("Enter the amount of money"), 10, "put_stock");
				break;
			case 1: //healkit
				mp.events.callRemote('setStock', "medkits");
				global.input.set(translateText("Place first aid kits"), translateText("Enter the number of first aid kits"), 10, "put_stock");
				break;
			case 2: //weed
				mp.events.callRemote('setStock', "drugs");
				global.input.set(translateText("Put drugs"), translateText("Enter the amount of drugs"), 10, "put_stock");
				break;
			case 4: //weapons stock
				mp.events.callRemote('openWeaponStock');
				break;
		}
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/stock", "stockPut", e.toString());
	}
});

gm.events.add('stockExit', () => {
	try 
	{
		global.menuClose();
		mp.gui.emmit(`window.router.setHud()`);
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/stock", "stockExit", e.toString());
	}
});