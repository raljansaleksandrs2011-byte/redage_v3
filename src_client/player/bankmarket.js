gm.events.add('mavrshop', (json) => {
	let data = JSON.parse(json);
    global.openSM(2, JSON.stringify(data));
});

gm.events.add('gangmis', () => {
    let data = [
        translateText(""Vehicle Theft"),
translateText("Vehicle Transportation"),
    ];
    global.openSM(8, JSON.stringify(data));
});

gm.events.add('mafiamis', () => {
    let data = [
        translateText("Transportation of weapons"),
        translateText("Transporting money"),
        translateText("Transportation of corpses"),
    ];
    global.openSM(9, JSON.stringify(data));
});

gm.events.add('bikermis', () => {
    let data = [
        translateText("Transportation of weapons"),
        translateText("Transporting money"),
        translateText("Transportation of corpses"),
    ];
    global.openSM(10, JSON.stringify(data));
});

gm.events.add('shop', (json) => {
    let data = JSON.parse(json);
    global.openSM(1, JSON.stringify(data));
})
