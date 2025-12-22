gm.events.add('policeg', () => {
    let data = [
        translateText("Baton"),
        translateText("Pistol"),
        "SMG",
        translateText("Shotgun"),
        "Tazer",
        translateText("Buletproof vedt"),
        translateText("Aidkit"),
        translateText("Pistol calibr x12"),
        translateText("Little calibr x30"),
        translateText("Fraction x6"),
        translateText("Hand over the bulletproof vest")
    ];
    global.openSM(4, JSON.stringify(data));
});

gm.events.add('fbiguns', () => {
    let data = [
        "Tazer",
        translateText("Pistol"),
        translateText("POS"),
        translateText("Carbine"),
        translateText("Sniper rifle"),
        translateText("Buletproof vest"),
        translateText("Aidkit"),
        translateText("Pistol calibr x12"),
        translateText("Little calibr x30"),
        translateText("Auto calibr x30"),
        translateText("Sniper riflr x5"),
        "Badge",
        translateText("Hand over the bulletproof vest")
    ];
    global.openSM(3, JSON.stringify(data));
});

gm.events.add('govguns', () => {
    let data = [
        "Tazer",
        translateText("Pistol"),
        "Advanced Rifle",
        "Gusenberg Sweeper",
        translateText("Buletproof vest"),
        translateText("Aidkit"),
        translateText("Pistol caliber x12"),
        translateText("Little caliber x30"),
        translateText("Auto caliber x30"),
        translateText("Hand over the bulletproof vest")
    ];
    global.openSM(6, JSON.stringify(data));
});

gm.events.add('armyguns', () => {
    let data = [
        translateText("Pistol"),
        translateText("Carbine"),
		translateText("Combat machine gun"),
        translateText("Buletproof vest"),
        translateText("Aidkit"),
        translateText("Pistol caliber x12"),
        translateText("Auto caliber x30"),
		translateText("Little caliber x100"),
        translateText("Hand over the bulletproof vest")
    ];
    global.openSM(7, JSON.stringify(data));
});