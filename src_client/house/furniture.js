gm.events.add('startEditing', (model) => {
	try
	{
		global.binderFunctions.GameMenuClose ();
		gm.discord(translateText("Arranges furniture in the house"));
		global.OnObjectEditor (mp.game.joaat (model), null, (pos, rot, _) => {				
			mp.events.callRemote('acceptEdit', pos.x, pos.y, pos.z, rot.x, rot.y, rot.z);
		},
		() => {			
			mp.events.callRemote('cancelEdit');
			global.discordDefault ()
		}, true);
	}
	catch (e) 
	{
		mp.events.callRemote("client_trycatch", "house/furniture", "startEditing", e.toString());
	}
});