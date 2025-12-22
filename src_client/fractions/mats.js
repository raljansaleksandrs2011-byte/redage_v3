// MATS //

gm.events.add('matsOpen', (isArmy, isMed) => {
	try 
	{
		if (global.menuCheck()) return;
		global.menuOpen();
		mp.gui.emmit(
			`window.router.setView("FractionsMats", {isArmy: ${isArmy}, isMed: ${isMed}})`
		);
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/mats", "matsOpen", e.toString());
	}
});

gm.events.add('matsL', (act) => { //load

	try 
	{
		global.menuClose();
		mp.gui.emmit(`window.router.setHud()`);

		switch (act) {
			case 1:
				global.input.set(translateText("Load mats"), translateText("Enter the number of mats"), 4, "loadmats");
				break;
			case 2:
				global.input.set(translateText("Load mats"), translateText("Enter the number of mats"), 4, "loadmats");
				break;
			case 3:
				global.input.set(translateText("Load drugs"), translateText("Enter the amount of drugs"), 4, "loaddrugs");
				break;
			case 4:
				global.input.set(translateText("Load first aid kits"), translateText("Enter the number of first aid kits"), 4, "loadmedkits");
				break;
		}
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/mats", "matsL", e.toString());
	}
});

gm.events.add('matsU', (act) => { //unload

	try 
	{
		global.menuClose();
		mp.gui.emmit(`window.router.setHud()`);

		switch (act) {
			case 1:
				global.input.set(translateText("Upload mats"), translateText("Enter the number of mats"), 4, "unloadmats");
				break;
			case 2:
				global.input.set(translateText("Upload mats"), translateText("Enter the number of mats"), 4, "unloadmats");
				break;
			case 3:
				global.input.set(translateText("Unload drugs"), translateText("Enter the amount of drugs"), 4, "unloaddrugs");
				break;
			case 4:
				global.input.set(translateText("Unload first aid kits"), translateText("Enter the number of first aid kits"), 4, "unloadmedkits");
				break;
		}
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "fractions/mats", "matsU", e.toString());
	}
});