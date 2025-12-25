import { writable } from 'svelte/store';
import {executeClientToGroup} from "api/rage";

export const isMapLoad = writable(false);

export const isSim = writable(false);

export const selectedImage = writable(false);
export const selectedImageFunc = writable(false);
export const radioState = writable(false);
export const radioStation = writable(0);


let pageArray = [];

export const currentPage = writable("mainmenu");

currentPage.subscribe(page => {
    if (page === "mainmenu") {
        pageArray = [];
        executeClientToGroup ("finger", 1)
    } else if (page !== "callView") {
        pageArray.push(page)
        executeClientToGroup ("finger", 5)
    }
});


export const pageBack = () => {

    let page = "mainmenu";
    const lastIndex = pageArray.length - 1;

    if (typeof pageArray [lastIndex] === "string") {
        page = pageArray [lastIndex];
        pageArray.splice(lastIndex, 1);
    }

    if (page !== "call")
        selectNumber.set(null);

    currentPage.set (page);
}


export const selectNumber = writable(null);




export const currentWeather = writable("thunder");


export const categoriesList = writable([
    {
        name: "Government structures",
        icon: "gos",
        content: [
            "City Hall",
            "LSPD",
            "EMS",
            "FIB",
            "NEWS",
            "Control Center",
            "SHERIFF 1",
            "SHERIFF 2",
        ]
    },
    {
        name: "Gangs",
        icon: "weapons",
        content: [
            "Marabunta Grande",
            "Vagos",
            "Ballas",
            "The Families",
            "Bloods Street",
        ]
    },
    {
        name: "Mafia",
        icon: "mafia",
        content: [
            "La Cosa Nostra",
            "Russian Mafia",
            "Yakuza",
            "Armanian Mafia",
        ]
    },
    {
        name: "Jobs",
        icon: "licenses",
        content: [
            "Eectrostation",
            "Postam",
            "Taxipark",
            "Bus park",
            "Lawn mower parking",
            "Truckers' parking lot",
            "Cash collection station",
            "Auto mechanics' parking lot",
        ]
    },
    {
        name: "Part-time job",
        icon: "jobs",
        content: [
            "Civil Mine 1",
            "Civil Mine 2",
            "Civil Mine 3",
            "Civil Mine 4",
            "Goverment Mine",
            "Lumberjack 1",
            "Lumberjack 2",
            "Lumberjack 3",
            "Lumberjack 4",
            "Lumberjack 5",
        ]
    },
    {
        name: "Closest places",
        icon: "recent",
        content: [

            "Nearest motorcycle rental",
            "The nearest bike rental",
            "Nearest boat rental",
           /* "Ближайшая аренда самолета",
            "Ближайшая аренда вертолета",*/
        ]
    },
    {
        name: "Others",
        icon: "clubs",
        content: [
            "Autoschool",
            "Casino",
            "Family",
            "Arena",
            "Amphitheater",
            "Humane Labs",
            "Lighthouse",
            "Hunting store",
            "Main Market",
            "Black Market",
            "Church",
            "Pet seller",
            "Court",
        ]
    }
])