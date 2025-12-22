// ELEVATOR //
var liftcBack = "";

function openLift(type, cBack) {
    if (global.menuCheck()) return;
    let floors = [
        [translateText("Garage"), translateText("1 floor"), translateText("49 этаж"), translateText("Roof")],
        [translateText("Garage"), translateText("Bunker"), translateText("Roof"), translateText("Warehouse")]
    ];
    mp.gui.emmit(`window.router.setView("PlayerLift", ${JSON.stringify (floors[type])})`);
    global.menuOpen();
    liftcBack = cBack;
}

function closeLift() {
    global.menuClose();
    mp.gui.emmit(`window.router.setHud();`);
    liftcBack = "";
}

gm.events.add('openlift', (type, cBack) => {
    openLift(type, cBack);
});

gm.events.add('lift', (act, data) => {
    switch (act) {
        case "stop":
            closeLift();
            break;
        case "start":
            mp.events.callRemote(liftcBack, data);
            closeLift();
            break;
    }
});