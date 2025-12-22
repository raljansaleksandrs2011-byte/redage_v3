export default [
    {
        "cmd":"/report",
        "descr":"Report about something.",
        "category":"General"
    },  
    {
        "cmd":"/password",
        "descr":"Change password.",
        "category":"General"
    },
    {
        "cmd":"/myguest",
        "descr":"Enter a private home without opening the doors.",
        "category":"General"
    },
    {
        "cmd":"/buybiz",
        "descr":"Buy buisness.",
        "category":"General"
    },
    {
        "cmd":"/sellbiz [id] [цена]",
        "descr":"Sell buisness to player.",
        "category":"General"
    },
    {
        "cmd":"/time",
        "descr":" Find out the sentence/pretrial detention facility.",
        "category":"General"
    },
    {
        "cmd":"/dice [id] [amount]",
        "descr":"Suggest a game of dice.",
        "category":"General"
    },
    {
        "cmd":"/findtrailer",
        "descr":" Mark a trailer (For truck driver work).",
        "category":"General"
    },
    {
        "cmd":"/q",
        "descr":" Quick disconnect from the server.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'G'",
        "descr":" Interaction menu",
        "category":"General"
    },
    {
        "cmd":"Pressing 'N'",
        "descr":" Microphone.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'I'",
        "descr":"Opens the character's inventory and statistics.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'M'",
        "descr":"Phone.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'L'",
        "descr":"Open / Close car.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'B'",
        "descr":"Start/Stop the car.",
        "category":"General"
    },
    {
        "cmd":"Pressing  'U'",
        "descr":" List of animations.",
        "category":"General"
    },
    {
        "cmd":"Pressing '5'",
        "descr":"Show/Hide player IDs.",
        "category":"General"
    },
    {
        "cmd":"Pressing '6'",
        "descr":"Auto cruise control.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'F10'",
        "descr":"Help.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'F9'",
        "descr":"Donate-Menu.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'F5'",
        "descr":"On/Off interface.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'F1'",
        "descr":"Open the Rage menu.",
        "category":"General"
    },
    {
        "cmd":"Pressing 'T'",
        "descr":"Open chat.",
        "category":"Chat"
    },
    {
        "cmd":"/b",
        "descr":"OOC CHAT.",
        "category":"Chat"
    },
    {
        "cmd":"/me",
        "descr":"First-person action role-playing.",
        "category":"Chat"
    },
    {
        "cmd":"/do",
        "descr":"3rd person play.",
        "category":"Chat"
    },
    {
        "cmd":"/try",
        "descr":"Playing out an action with a random outcome.",
        "category":"Chat"
    },
    {
        "cmd":"/todo",
        "descr":"Role-playing words + actions.",
        "category":"Chat"
    },
    {
        "cmd":"/s",
        "descr":"Scream.",
        "category":"Chat"
    },
    {
        "cmd":"/f",
        "descr":"Faction chat.",
        "category":"Chat"
    },
    {
        "cmd":"/dep",
        "descr":"Department chat. (General chat of all government factions).",
        "category":"Chat"
    },
    {
        "cmd":"/gov",
        "descr":"State Wave",
        "category":"Chat"
    },
    {
        "cmd":"/m",
        "descr":"Megafon.",
        "category":["Chat", "LSPD", "FIB", "Army"]
    },
    {
        "cmd":"/call",
        "descr":"SMS.",
        "category":"Chat"
    },
    {
        "cmd":"/fontsize",
        "descr":"Change the chat font size (From 10 to 20, Standart: 16).",
        "category":"Chat"
    },
    {
        "cmd":"/pagesize",
        "descr":" Change the number of chat lines (From 5 to 20, Standart 10).",
        "category":"Chat"
    },
    {
        "cmd":"/timestamp",
        "descr":"Display time in chat.",
        "category":"Chat"
    },
    {
        "cmd":"/chatalpha",
        "descr":"Toggle chat fuzzing.",
        "category":"Chat"
    },
    {
        "cmd":"/buyfuel [кол-во]",
        "descr":"Buy fuel at a gas station.",
        "category":"Auto mechanic"
    },
    {
        "cmd":"/sellfuel [id] [pcs] [price per liter]",
        "descr":"Sell ​​fuel to a player.",
        "category":"Auto mechanic"
    },
    {
        "cmd":"/ma",
        "descr":"Accept a call from a car mechanic.",
        "category":"Auto mechanic"
    },
    {
        "cmd":"/repair [id] [price]",
        "descr":"Repair the transport.",
        "category":"Auto mechanic"
    },
    {
        "cmd":"/ta [id]",
        "descr":"Accept the challenge.",
        "category":"Taxi"
    },
    {
        "cmd":"/tprice [id] [price]",
        "descr":"Offer payment.",
        "category":"Taxi"
    },
    {
        "cmd":"/orders",
        "descr":"List of orders.",
        "category":"Truck driver"
    },
    {
        "cmd":"/t",
        "descr":"Truckers' radio.",
        "category":"Truck driver"
    },
    {
        "cmd":"/su [Passport number] [Number of stars] [Reason]",
        "descr":"Issue a wanted notice to a player.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/arrest [id]",
        "descr":"Arrest the player. (Place in custody)",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/rfp [id]",
        "descr":"Release a player from the bullpen.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/pd [id]",
        "descr":"Accept the call.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/givegunlic [id] [Цена]",
        "descr":"Issue a gun license.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/takegunlic [id] ",
        "descr":"Revoke the gun license.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/pull [id]",
        "descr":"Pull the player out of the car.",
        "category":["LSPD", "FIB", "Mafia", "Army", "Government"]
    },
    {
        "cmd":"/incar [id]",
        "descr":"Put the player in the car.",
        "category":["LSPD", "FIB", "Mafia", "Army", "Government"]
    },
    {
        "cmd":"/warg",
        "descr":"Enable emergency mode.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/openstock /closestock ",
        "descr":"Open/Close warehouse. ",
        "category":["LSPD", "FIB", "EMS", "Army", "Goverment", "Gangs", "Mafia"]
    },
    {
        "cmd":"Pressing 'X'",
        "descr":"Put on handcuffs",
        "category":["LSPD", "FIB", "Army", "Goverment"]
    },
    {
        "cmd":"Pressing 'Z'",
        "descr":"Lead the player.",
        "category":["LSPD", "FIB", "Army", "Goverment"]
    },
    {
        "cmd":"Pressing 'U'",
        "descr":"[in a working car] Opening the on-board computer.",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"Pressing 'G'",
        "descr":"Interact with the player. (Search, check documents, etc.)",
        "category":["LSPD", "FIB"]
    },
    {
        "cmd":"/heal [id] [price]",
        "descr":"Offer to pay for treatment.",
        "category":["EMS"]
    },
    {
        "cmd":"/ems [id]",
        "descr":"Accept the call.",
        "category":["EMS"]
    },
    {
        "cmd":"/givemedlic [id]",
        "descr":"Issue a medical card.",
        "category":["EMS"]
    },
    {
        "cmd":"/givepmlic [id] [price]",
        "descr":"Sell ​​a paramedic license.",
        "category":["EMS"]
    },
    {
        "cmd":"Pressing 'F7'",
        "descr":"Open ad editing",
        "category":"LSNEWS"
    },
    {
        "cmd":"/capture",
        "descr":"Start capturing territory.",
        "category":"Gangs"
    },
    {
        "cmd":"Pressing 'G'",
        "descr":"Interact with the player. (Rob, put on zip ties/bag)",
        "category":["Mafia", "Gangs"]
    },
    {
        "cmd":"/bizwar",
        "descr":"Start taking over a business.",
        "category":"Mafia"
    },
    {
        "cmd":"/takebiz",
        "descr":"Take control of the business.",
        "category":"Mafia"
    },
    {
        "cmd":"/respawn",
        "descr":"Respawn of all faction vehicles",
        "category":"Leadership"
    },
    {
        "cmd":"/setrank [id] [rank]",
        "descr":"Change a player's rank",
        "category":"Leadership"
    },
    {
        "cmd":"/invite [ID]",
        "descr":"Accept a player into a faction",
        "category":"Leadership"
    },
    {
        "cmd":"/uninvite [ID]",
        "descr":"Dismiss a player from a faction",
        "category":"Leadership"
    }
]