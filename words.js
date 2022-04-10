const words_easy = [
	"ÅDRA",
	"AKTA",
	"ÄKTA",
	"ALLT",
	"AMEN",
	"ÄMNE",
	"ANDE",
	"ÅNGA",
	"ANKA",
	"ANS",
	"ASKA",
	"ÅSKA",
	"ÅSNA",
	"ATOM",
	"ÄVEN",
	"BÄCK",
	"BÅDA",
	"BÅGE",
	"BAKA",
	"BÄNK",
	"BÄRA",
	"BARN",
	"BERG",
	"BETE",
	"BETT",
	"BIFF",
	"BLEK",
	"BLEV",
	"BLOD",
	"BLÖT",
	"BLYG",
	"BOCK",
	"BOLL",
	"BOMB",
	"BORD",
	"BORG",
	"BORR",
	"BORT",
	"BOTA",
	"BRED",
	"BREV",
	"BRÖD",
	"BROR",
	"BRUS",
	"BULA",
	"BURK",
	"BUSA",
	"BUSS",
	"BYRÅ",
	"BYTA",
	"BYTE",
	"BYXA",
	"COOL",
	"DÄCK",
	"DAGG",
	"DAMM",
	"DARR",
	"DIKE",
	"DIKT",
	"DILL",
	"DISK",
	"DJUP",
	"DJUR",
	"DOFT",
	"DOLK",
	"DOPP",
	"DÖRR",
	"DOSA",
	"DRAG",
	"DRÖM",
	"DUNK",
	"DUNS",
	"DUVA",
	"DYGN",
	"DYKA",
	"DYNA",
	"EGEN",
	"ELAK",
	"ELDA",
	"ELEV",
	"ELVA",
	"EVIG",
	"FACK",
	"FALK",
	"FÄLT",
	"FAMN",
	"FÅÖDA",
	"FARA",
	"FÄRD",
	"FÄRG",
	"FÄRS",
	"FART",
	"FAST",
	"FENA",
	"FEST",
	"FICK",
	"FIKA",
	"FILM",
	"FILT",
	"FIOL",
	"FISA",
	"FLAK",
	"FLER",
	"FLIK",
	"FLIS",
	"FLOD",
	"FLYG",
	"FÖDD",
	"FÖRE",
	"FORM",
	"FOTO",
	"FRAM",
	"FRÅN",
	"FRED",
	"FRIA",
	"FRYS",
	"FUKT",
	"FUSK",
	"FYND",
	"GADD",
	"GAPA",
	"GÅRD",
	"GARN",
	"GÄSP",
	"GÅTA",
	"GÅVA",
	"GENI",
	"GIFT",
	"GIPS",
	"GLAD",
	"GLAS",
	"GLID",
	"GLÖD",
	"GOLF",
	"GOLV",
	"GÖRA",
	"GOTT",
	"GRAD",
	"GRAM",
	"GRÄS",
	"GRÅT",
	"GREJ",
	"GRIS",
	"GROP",
	"GRÖT",
	"GRUS",
	"GRYN",
	"GULD",
	"GUPP",
	"HÄCK",
	"HAGE",
	"HAKE",
	"HALL",
	"HÅLL",
	"HALM",
	"HALS",
	"HALV",
	"HAMN",
	"HAND",
	"HARE",
	"HELG",
	"HINK",
	"HÖJA",
	"HÖNA",
	"HOPP",
	"HORN",
	"HÖRN",
	"HÖST",
	"HYSS",
	"HYTT",
	"IDAG",
	"IDOL",
	"IGÅR",
	"IHOP",
	"ILLA",
	"IMMA",
	"INTE",
	"JACK",
	"JAGA",
	"JAKT",
	"JOBB",
	"JORD",
	"KALV",
	"KÄND",
	"KÄNN",
	"KANT",
	"KAPA",
	"KÅSA",
	"KATT",
	"KILO",
	"KINA",
	"KIND",
	"KIWI",
	"KLAR",
	"KLIA",
	"KLOK",
	"KLOR",
	"KLÖS",
	"KNAN",
	"KNIV",
	"KNUT",
	"KÖRA",
	"KORK",
	"KORP",
	"KORS",
	"KORV",
	"KRAM",
	"KULA",
	"KYSS",
	"LACK",
	"LADA",
	"LÅDA",
	"LAMM",
	"LAND",
	"LÄPP",
	"LARM",
	"LAST",
	"LÄTT",
	"LÄXA",
	"LEGO",
	"LERA",
	"LINS",
	"LJUD",
	"LJUS",
	"LOCK",
	"LÖGN",
	"LÖPA",
	"LOPP",
	"LOTT",
	"LUFT",
	"LUGG",
	"LUGN",
	"LUKT",
	"LYSA",
	"MAGE",
	"MAGI",
	"MÅLA",
	"MÅNE",
	"MASK",
	"MÄTT",
	"METE",
	"MINT",
	"MJÖL",
	"MJUK",
	"MOLN",
	"MOSA",
	"MÖTA",
	"MUGG",
	"MYGG",
	"MYNT",
	"NÄBB",
	"NAMN",
	"NAPP",
	"NATT",
	"NÄVE",
	"NIVÅ",
	"NÖJD",
	"NÖJE",
	"NYSA",
	"ODLA",
	"OFTA",
	"ÖGLA",
	"ÖGON",
	"OLJA",
	"OTUR",
	"ÖVER",
	"PALL",
	"PALM",
	"PÄLS",
	"PANT",
	"PARA",
	"PÄRM",
	"PÅSE",
	"PÅSK",
	"PEKA",
	"PERU",
	"PIGG",
	"PIRR",
	"PJÄS",
	"PLÅT",
	"PLOG",
	"PORT",
	"PRAT",
	"PUCK",
	"PUMP",
	"RÄDD",
	"RAND",
	"RAPA",
	"RASA",
	"RAST",
	"RATT",
	"RÄTT",
	"REGN",
	"RING",
	"RISK",
	"RIVA",
	"ROLL",
	"ROPA",
	"RÖRA",
	"RUND",
	"RUTA",
	"RYMD",
	"SÄCK",
	"SAFT",
	"SAGA",
	"SÅGA",
	"SÅLD",
	"SALT",
	"SÅNG",
	"SÄNG",
	"SANN",
	"SÄTE",
	"SIDA",
	"SILL",
	"SITT",
	"SJUK",
	"SKÅP",
	"SKED",
	"SKOG",
	"SKOJ",
	"SKÖN",
	"SKUR",
	"SLÄP",
	"SMAK",
	"SMAL",
	"SMÖR",
	"SNÅL",
	"SNOK",
	"SÖKA",
	"SÖLA",
	"SÖMN",
	"SORK",
	"STAD",
	"STAV",
	"STEK",
	"STEN",
	"STÖD",
	"STOL",
	"SVAG",
	"SVAL",
	"SVAN",
	"SVÅR",
	"SYLT",
	"TACK",
	"TALL",
	"TÄLT",
	"TAND",
	"TÄND",
	"TÅNG",
	"TÄNK",
	"TANT",
	"TARM",
	"TASS",
	"TEJP",
	"TEST",
	"TJEJ",
	"TJUR",
	"TOFS",
	"TOMT",
	"TORG",
	"TORR",
	"TRÄD",
	"TRÖG",
	"TUFF",
	"TUGG",
	"TUNG",
	"TUNN",
	"TVÅL",
	"TYST",
	"UBÅT",
	"UNGE",
	"UPPE",
	"UTAN",
	"UTOM",
	"VÅGA",
	"VÄGG",
	"VAGN",
	"VAKT",
	"VALP",
	"VARA",
	"VARG",
	"VARM",
	"VART",
	"VÄXA",
	"VÄXT",
	"VIKA",
	"VIKT",
	"VILA",
	"VILD",
	"VIND",
	"VINK",
	"VIPS",
	"VRAK",
	"VRÅL"
]

const words_all = [
	"ATEN",
	"BALI",
	"FIJI",
	"GUDI",
	"IRAK",
	"IRAN",
	"JAVA",
	"KINA",
	"KUBA",
	"LAOS",
	"LUND",
	"MALI",
	"NIUE",
	"OMAN",
	"PERU",
	"RHEN",
	"SÄPO",
	"TOGO",
	"UMEÅ",
	"VASA",
	"VEDA",
	"WIEN",
	"ABBÉ",
	"ABER",
	"ACNE",
	"ADEL",
	"ADJÖ",
	"ADLA",
	"AGAT",
	"AGIO",
	"AGNA",
	"AIDS",
	"AINO",
	"AINU",
	"AISS",
	"AKNE",
	"AKTA",
	"AKUT",
	"ALBA",
	"ALFA",
	"ALKA",
	"ALLA",
	"ALLE",
	"ALLS",
	"ALLT",
	"ALLÉ",
	"ALME",
	"ALOE",
	"ALUN",
	"AMBO",
	"AMEN",
	"AMID",
	"AMIN",
	"AMKO",
	"AMMA",
	"AMOK",
	"ANAL",
	"ANDA",
	"ANDE",
	"ANGE",
	"ANGÅ",
	"ANIS",
	"ANKA",
	"ANNO",
	"ANOD",
	"ANOR",
	"ANSA",
	"ANSE",
	"ANTA",
	"ANTE",
	"ANUS",
	"APEL",
	"APNÉ",
	"APPA",
	"ARAB",
	"AREA",
	"ARIA",
	"ARID",
	"ARLA",
	"ARMÉ",
	"AROM",
	"ARRA",
	"ARTA",
	"ARUN",
	"ARVE",
	"ASCH",
	"ASKA",
	"ASKE",
	"ASPE",
	"ASYL",
	"ATOM",
	"AULA",
	"AURA",
	"AVEC",
	"AVEL",
	"AVGE",
	"AVGÅ",
	"AVIG",
	"AVIS",
	"AVLA",
	"AVOG",
	"AVSE",
	"AVTA",
	"AXEL",
	"AXLA",
	"AXON",
	"AZER",
	"AZUR",
	"BABE",
	"BABY",
	"BACK",
	"BADA",
	"BADD",
	"BAGG",
	"BAJA",
	"BAJS",
	"BAKA",
	"BAKI",
	"BALA",
	"BALE",
	"BALK",
	"BALL",
	"BALT",
	"BANA",
	"BAND",
	"BANE",
	"BANG",
	"BANK",
	"BANN",
	"BARA",
	"BARD",
	"BARK",
	"BARM",
	"BARN",
	"BARR",
	"BASA",
	"BASK",
	"BAST",
	"BAUD",
	"BAXA",
	"BEAT",
	"BEBO",
	"BEBÉ",
	"BECK",
	"BEGE",
	"BEGÅ",
	"BEHÅ",
	"BELE",
	"BENA",
	"BERG",
	"BERO",
	"BESE",
	"BESK",
	"BEST",
	"BESÅ",
	"BETA",
	"BETE",
	"BETS",
	"BETT",
	"BIAS",
	"BIDA",
	"BIDÉ",
	"BIER",
	"BIFF",
	"BIKT",
	"BILA",
	"BILD",
	"BILL",
	"BIND",
	"BIRA",
	"BISP",
	"BITA",
	"BITÅ",
	"BJÖD",
	"BLAD",
	"BLAJ",
	"BLAR",
	"BLEK",
	"BLEV",
	"BLID",
	"BLIG",
	"BLOD",
	"BLOM",
	"BLOT",
	"BLUS",
	"BLYA",
	"BLYG",
	"BLÄS",
	"BLÅA",
	"BLÅS",
	"BLÖT",
	"BOBB",
	"BOCK",
	"BOER",
	"BOJA",
	"BOKA",
	"BOKE",
	"BOLA",
	"BOLL",
	"BOMB",
	"BONA",
	"BONG",
	"BOOM",
	"BORD",
	"BORG",
	"BORR",
	"BORT",
	"BOSS",
	"BOTA",
	"BOXA",
	"BRAJ",
	"BRAK",
	"BRAT",
	"BRED",
	"BREV",
	"BRIE",
	"BRIO",
	"BRIS",
	"BROA",
	"BROK",
	"BROM",
	"BROR",
	"BRUD",
	"BRUK",
	"BRUM",
	"BRUN",
	"BRUS",
	"BRYN",
	"BRÄK",
	"BRÄM",
	"BRÅD",
	"BRÅK",
	"BRÅS",
	"BRÖA",
	"BRÖD",
	"BRÖL",
	"BRÖT",
	"BUDA",
	"BUDO",
	"BUFF",
	"BUGA",
	"BUGG",
	"BUKT",
	"BULA",
	"BULB",
	"BULK",
	"BULT",
	"BUMS",
	"BUNT",
	"BURA",
	"BURK",
	"BURR",
	"BUSA",
	"BUSE",
	"BUSH",
	"BUSK",
	"BUSS",
	"BYBO",
	"BYGD",
	"BYIG",
	"BYKA",
	"BYKE",
	"BYRÅ",
	"BYST",
	"BYTA",
	"BYTE",
	"BYXA",
	"BÄCK",
	"BÄDD",
	"BÄLG",
	"BÄND",
	"BÄNK",
	"BÄRA",
	"BÄRM",
	"BÄRS",
	"BÄST",
	"BÄVA",
	"BÅDA",
	"BÅDE",
	"BÅGA",
	"BÅGE",
	"BÅLD",
	"BÅNG",
	"BÅRD",
	"BÅTA",
	"BÖJA",
	"BÖJD",
	"BÖKA",
	"BÖLA",
	"BÖLD",
	"BÖNA",
	"BÖRA",
	"BÖRD",
	"BÖRS",
	"BÖTA",
	"CABB",
	"CAFÉ",
	"CAMP",
	"CAPE",
	"CASH",
	"CAVA",
	"CELL",
	"CENT",
	"CERT",
	"CESS",
	"CHAR",
	"CHEF",
	"CHIC",
	"CHIP",
	"CIGG",
	"CISS",
	"CITY",
	"CLOU",
	"CODA",
	"COOL",
	"CORD",
	"COUR",
	"CRED",
	"CYAN",
	"DAGA",
	"DAGG",
	"DAGS",
	"DALA",
	"DALJ",
	"DALT",
	"DAMM",
	"DAMP",
	"DANA",
	"DANK",
	"DANN",
	"DANS",
	"DARI",
	"DARR",
	"DART",
	"DASK",
	"DASS",
	"DATA",
	"DATO",
	"DATT",
	"DEAL",
	"DEGA",
	"DEJA",
	"DEJT",
	"DEKA",
	"DELA",
	"DELO",
	"DELS",
	"DEMO",
	"DEPÅ",
	"DESK",
	"DESS",
	"DIET",
	"DIFF",
	"DIKA",
	"DIKE",
	"DIKO",
	"DIKT",
	"DILL",
	"DING",
	"DINÉ",
	"DIOD",
	"DIPP",
	"DIRK",
	"DISK",
	"DISS",
	"DITO",
	"DITT",
	"DIVA",
	"DJUP",
	"DJUR",
	"DOBB",
	"DOCK",
	"DOER",
	"DOFT",
	"DOGE",
	"DOGG",
	"DOGM",
	"DOJA",
	"DOJO",
	"DOLD",
	"DOLK",
	"DOLT",
	"DONA",
	"DOPA",
	"DOPP",
	"DORN",
	"DOSA",
	"DOWN",
	"DRAG",
	"DRAM",
	"DRAS",
	"DRAV",
	"DREV",
	"DRIV",
	"DROG",
	"DRUL",
	"DRUS",
	"DRYG",
	"DRÅP",
	"DRÖG",
	"DRÖM",
	"DRÖN",
	"DRÖP",
	"DRÖS",
	"DUAL",
	"DUBB",
	"DUGA",
	"DUGG",
	"DUKA",
	"DUKT",
	"DUMA",
	"DUNA",
	"DUNK",
	"DUNS",
	"DURK",
	"DUSK",
	"DUST",
	"DUVA",
	"DYFT",
	"DYGD",
	"DYGN",
	"DYIG",
	"DYKA",
	"DYNA",
	"DYNT",
	"DYRK",
	"DYSA",
	"DÄCK",
	"DÄKA",
	"DÄLD",
	"DÄNG",
	"DÄRI",
	"DÄRÅ",
	"DÄST",
	"DÅNA",
	"DÅRA",
	"DÅRE",
	"DÅSA",
	"DÖDA",
	"DÖMA",
	"DÖNA",
	"DÖPA",
	"DÖRJ",
	"DÖRR",
	"DÖVA",
	"EARL",
	"EBBA",
	"EDDA",
	"EDER",
	"EDIL",
	"EFOR",
	"EGAL",
	"EGEN",
	"EGGA",
	"EGID",
	"EHEC",
	"EISS",
	"EKER",
	"EKIG",
	"ELAK",
	"ELDA",
	"ELEV",
	"ELIT",
	"ELVA",
	"EMIR",
	"EMMA",
	"EMOT",
	"ENAS",
	"ENBO",
	"ENDA",
	"ENDE",
	"ENIG",
	"ENSA",
	"ENSE",
	"ENÄR",
	"EPIK",
	"EPOK",
	"EPOS",
	"ERAN",
	"ERGO",
	"ERNÅ",
	"EROS",
	"ESSE",
	"ESSÄ",
	"ETAN",
	"ETEN",
	"ETER",
	"ETIK",
	"ETNO",
	"ETOS",
	"ETSA",
	"ETTA",
	"ETUI",
	"ETYD",
	"ETYL",
	"EURO",
	"EVAD",
	"EVIG",
	"EVOE",
	"EXIL",
	"EXPO",
	"FACK",
	"FADD",
	"FADO",
	"FAGA",
	"FAJT",
	"FALK",
	"FALL",
	"FALS",
	"FAMN",
	"FANA",
	"FANN",
	"FANT",
	"FARA",
	"FARM",
	"FARS",
	"FART",
	"FASA",
	"FAST",
	"FATT",
	"FAUN",
	"FAXA",
	"FEGA",
	"FEJA",
	"FEJD",
	"FEJK",
	"FEJS",
	"FELA",
	"FENA",
	"FERM",
	"FESS",
	"FEST",
	"FETA",
	"FETT",
	"FIAL",
	"FICK",
	"FIKA",
	"FILA",
	"FILM",
	"FILT",
	"FILÉ",
	"FIMP",
	"FINK",
	"FINT",
	"FIOL",
	"FIRA",
	"FIRN",
	"FISA",
	"FISK",
	"FISS",
	"FIXA",
	"FJOL",
	"FJOR",
	"FJUN",
	"FJÄR",
	"FJÄS",
	"FJÄT",
	"FJÖL",
	"FJÖS",
	"FLAD",
	"FLAK",
	"FLAT",
	"FLAU",
	"FLAX",
	"FLEN",
	"FLER",
	"FLIK",
	"FLIN",
	"FLIS",
	"FLIT",
	"FLOD",
	"FLOR",
	"FLOW",
	"FLOX",
	"FLUM",
	"FLUX",
	"FLYG",
	"FLYT",
	"FLÅS",
	"FLÖG",
	"FLÖT",
	"FNAS",
	"FNYK",
	"FNÖS",
	"FOBI",
	"FOCK",
	"FOGA",
	"FOLK",
	"FOND",
	"FONT",
	"FORA",
	"FORM",
	"FORN",
	"FORS",
	"FORT",
	"FOTA",
	"FOTO",
	"FOUL",
	"FRAM",
	"FRAS",
	"FRED",
	"FRIA",
	"FRID",
	"FRIS",
	"FROM",
	"FRUA",
	"FRYS",
	"FRÄN",
	"FRÄS",
	"FRÅN",
	"FRÖA",
	"FRÖS",
	"FUBB",
	"FUGA",
	"FUKT",
	"FULL",
	"FUNK",
	"FUNT",
	"FURA",
	"FURU",
	"FUSK",
	"FUTT",
	"FYKA",
	"FYND",
	"FYRA",
	"FYRK",
	"FÄLB",
	"FÄLG",
	"FÄLL",
	"FÄLT",
	"FÄRD",
	"FÄRG",
	"FÄRM",
	"FÄRS",
	"FÄST",
	"FÅLE",
	"FÅLL",
	"FÅNA",
	"FÅNE",
	"FÅNG",
	"FÅRA",
	"FÖDA",
	"FÖDD",
	"FÖGA",
	"FÖLA",
	"FÖLL",
	"FÖNA",
	"FÖRA",
	"FÖRE",
	"FÖRR",
	"FÖSA",
	"GADD",
	"GAGE",
	"GAGG",
	"GAGN",
	"GALA",
	"GALL",
	"GALT",
	"GAMA",
	"GAME",
	"GANA",
	"GANS",
	"GAPA",
	"GARA",
	"GARD",
	"GARN",
	"GARV",
	"GASA",
	"GASK",
	"GASS",
	"GAST",
	"GATA",
	"GATE",
	"GATT",
	"GAVS",
	"GEJD",
	"GELÉ",
	"GEMS",
	"GENA",
	"GENI",
	"GERA",
	"GERS",
	"GESS",
	"GEST",
	"GICK",
	"GIFT",
	"GIGA",
	"GIGG",
	"GIKT",
	"GILL",
	"GINA",
	"GIPA",
	"GIPP",
	"GIPS",
	"GIRA",
	"GIRO",
	"GISS",
	"GIST",
	"GIVA",
	"GJUT",
	"GLAD",
	"GLAM",
	"GLAN",
	"GLAS",
	"GLAV",
	"GLED",
	"GLES",
	"GLIA",
	"GLID",
	"GLIM",
	"GLIS",
	"GLOB",
	"GLOP",
	"GLÖD",
	"GNAG",
	"GNAT",
	"GNED",
	"GNEK",
	"GNET",
	"GNOL",
	"GNOM",
	"GNÖL",
	"GODE",
	"GODO",
	"GODS",
	"GOJA",
	"GOLA",
	"GOLF",
	"GOLV",
	"GONA",
	"GORM",
	"GORR",
	"GOSA",
	"GOTT",
	"GRAD",
	"GRAF",
	"GRAL",
	"GRAM",
	"GRAN",
	"GRAV",
	"GRAY",
	"GREJ",
	"GREK",
	"GREN",
	"GREP",
	"GRIN",
	"GRIP",
	"GRIS",
	"GROP",
	"GROT",
	"GROV",
	"GRUS",
	"GRYM",
	"GRYN",
	"GRYT",
	"GRÄL",
	"GRÄS",
	"GRÄT",
	"GRÄV",
	"GRÅT",
	"GRÖE",
	"GRÖN",
	"GRÖT",
	"GULA",
	"GULD",
	"GULL",
	"GULT",
	"GUMP",
	"GUNG",
	"GUPP",
	"GURA",
	"GURU",
	"GUSS",
	"GUTE",
	"GYLF",
	"GYRO",
	"GÄCK",
	"GÄLA",
	"GÄLD",
	"GÄLL",
	"GÄNG",
	"GÄRD",
	"GÄRS",
	"GÄSP",
	"GÄSS",
	"GÄST",
	"GÅNG",
	"GÅRD",
	"GÅSE",
	"GÅTA",
	"GÅVA",
	"GÖDA",
	"GÖKA",
	"GÖPA",
	"GÖRA",
	"GÖRE",
	"GÖTE",
	"HACK",
	"HADE",
	"HAFS",
	"HAFT",
	"HAGE",
	"HAHA",
	"HAJA",
	"HAJK",
	"HAJP",
	"HAKA",
	"HAKE",
	"HALA",
	"HALL",
	"HALM",
	"HALO",
	"HALS",
	"HALT",
	"HALV",
	"HAMN",
	"HAND",
	"HANE",
	"HANG",
	"HANK",
	"HANN",
	"HANS",
	"HAPP",
	"HARE",
	"HARG",
	"HARM",
	"HARR",
	"HART",
	"HARV",
	"HASA",
	"HASP",
	"HAST",
	"HATA",
	"HATT",
	"HAVA",
	"HBTQ",
	"HEAT",
	"HEJA",
	"HEJD",
	"HELA",
	"HELG",
	"HELL",
	"HENA",
	"HERM",
	"HERR",
	"HESS",
	"HETA",
	"HETS",
	"HIFI",
	"HIHI",
	"HIND",
	"HINK",
	"HINT",
	"HIPP",
	"HIRD",
	"HIRS",
	"HISS",
	"HIVA",
	"HJON",
	"HJUL",
	"HOJA",
	"HOJT",
	"HOLK",
	"HOLT",
	"HOMO",
	"HONA",
	"HOOK",
	"HOPA",
	"HOPP",
	"HORA",
	"HORD",
	"HORN",
	"HOSA",
	"HOTA",
	"HUDA",
	"HUGA",
	"HUGG",
	"HUKA",
	"HULD",
	"HULL",
	"HULT",
	"HUND",
	"HUNK",
	"HURI",
	"HURR",
	"HURU",
	"HUSA",
	"HUSE",
	"HUTA",
	"HUTT",
	"HUTU",
	"HUVA",
	"HUVE",
	"HYFS",
	"HYLA",
	"HYMN",
	"HYPA",
	"HYPE",
	"HYRA",
	"HYSA",
	"HYSS",
	"HYTT",
	"HYVA",
	"HÄCK",
	"HÄDA",
	"HÄDD",
	"HÄGG",
	"HÄGN",
	"HÄLL",
	"HÄNG",
	"HÄRD",
	"HÄRI",
	"HÄRK",
	"HÄRS",
	"HÄRV",
	"HÄST",
	"HÄVA",
	"HÄVD",
	"HÄXA",
	"HÅHÅ",
	"HÅLA",
	"HÅLE",
	"HÅLL",
	"HÅNA",
	"HÅRA",
	"HÅRD",
	"HÅVA",
	"HÖFT",
	"HÖGG",
	"HÖJA",
	"HÖJD",
	"HÖLL",
	"HÖNA",
	"HÖNS",
	"HÖRA",
	"HÖRN",
	"HÖST",
	"HÖTA",
	"IBER",
	"IBIS",
	"ICKE",
	"IDAG",
	"IDAS",
	"IDEL",
	"IDKA",
	"IDOG",
	"IDOL",
	"IGEL",
	"IGEN",
	"IGLO",
	"IGÅR",
	"IHOP",
	"IHÅG",
	"IKLÄ",
	"IKON",
	"ILEX",
	"ILLA",
	"ILSK",
	"IMAM",
	"IMMA",
	"IMPA",
	"INFO",
	"INGE",
	"INGÅ",
	"INKA",
	"INNE",
	"INOM",
	"INPÅ",
	"INRE",
	"INSE",
	"INSÅ",
	"INTA",
	"INTE",
	"INÅT",
	"IRER",
	"IRIS",
	"IRRA",
	"ISAS",
	"ISCH",
	"ISIG",
	"ISOP",
	"ISTE",
	"ISÄR",
	"IVER",
	"IVRA",
	"IVÄG",
	"JABB",
	"JACK",
	"JADE",
	"JADÅ",
	"JAGA",
	"JAHA",
	"JAJA",
	"JAKA",
	"JAKT",
	"JALU",
	"JAMA",
	"JAMB",
	"JAMS",
	"JAPP",
	"JARL",
	"JASÅ",
	"JAVA",
	"JAZZ",
	"JEEP",
	"JEHU",
	"JIGG",
	"JIVE",
	"JOBB",
	"JODÅ",
	"JOHO",
	"JOJK",
	"JOJO",
	"JOKK",
	"JOLM",
	"JOLT",
	"JORD",
	"JOTA",
	"JOUR",
	"JOXA",
	"JUDE",
	"JUDO",
	"JUFT",
	"JULA",
	"JULI",
	"JUNI",
	"JURA",
	"JURT",
	"JURY",
	"JUST",
	"JUTE",
	"JÄKT",
	"JÄMN",
	"JÄMS",
	"JÄMT",
	"JÄRN",
	"JÄRV",
	"JÄSA",
	"JÄST",
	"JÄVA",
	"JÅKK",
	"JÅNS",
	"JÖNS",
	"KADI",
	"KAFÉ",
	"KAJA",
	"KAKA",
	"KAKI",
	"KALI",
	"KALK",
	"KALL",
	"KALV",
	"KAMP",
	"KAMS",
	"KAMÉ",
	"KANA",
	"KANT",
	"KAOS",
	"KAPA",
	"KAPP",
	"KARA",
	"KARG",
	"KARL",
	"KARM",
	"KARP",
	"KART",
	"KASA",
	"KASE",
	"KASK",
	"KASS",
	"KAST",
	"KATT",
	"KAUS",
	"KAVA",
	"KAXA",
	"KAXE",
	"KEFF",
	"KELA",
	"KELP",
	"KELT",
	"KEMA",
	"KEMI",
	"KEPA",
	"KEPS",
	"KERS",
	"KESA",
	"KESO",
	"KHAN",
	"KHAT",
	"KICK",
	"KIKA",
	"KILA",
	"KILO",
	"KILT",
	"KINA",
	"KIND",
	"KINK",
	"KIPA",
	"KISA",
	"KISS",
	"KITT",
	"KIVA",
	"KIVI",
	"KIWI",
	"KIXA",
	"KJOL",
	"KLAK",
	"KLAM",
	"KLAN",
	"KLAR",
	"KLAV",
	"KLEN",
	"KLET",
	"KLEV",
	"KLIA",
	"KLIV",
	"KLOK",
	"KLON",
	"KLOR",
	"KLOT",
	"KLOV",
	"KLUT",
	"KLYS",
	"KLÄM",
	"KLÖS",
	"KLÖV",
	"KNAK",
	"KNAL",
	"KNAP",
	"KNAS",
	"KNEG",
	"KNEP",
	"KNIA",
	"KNIP",
	"KNIV",
	"KNIX",
	"KNOG",
	"KNOP",
	"KNOT",
	"KNUT",
	"KNYT",
	"KNÄA",
	"KNÅP",
	"KNÖL",
	"KNÖS",
	"KNÖT",
	"KOCK",
	"KODA",
	"KOFF",
	"KOGG",
	"KOJA",
	"KOKA",
	"KOKS",
	"KOKT",
	"KOLA",
	"KOLL",
	"KOLM",
	"KOLT",
	"KOLV",
	"KOMA",
	"KOMP",
	"KONA",
	"KONT",
	"KOPP",
	"KOPT",
	"KORA",
	"KORD",
	"KORG",
	"KORK",
	"KORN",
	"KORP",
	"KORR",
	"KORS",
	"KORT",
	"KORV",
	"KOSA",
	"KOST",
	"KOTA",
	"KOTT",
	"KOVA",
	"KOXA",
	"KRAL",
	"KRAM",
	"KRAN",
	"KRAS",
	"KRAV",
	"KRAX",
	"KRIA",
	"KRIG",
	"KRIS",
	"KROG",
	"KROK",
	"KROM",
	"KRUM",
	"KRUS",
	"KRUT",
	"KRUX",
	"KRYA",
	"KRYP",
	"KRÄK",
	"KRÄM",
	"KRÅS",
	"KRÖK",
	"KRÖN",
	"KRÖP",
	"KRÖS",
	"KUBB",
	"KUGG",
	"KULA",
	"KULI",
	"KULL",
	"KULM",
	"KULT",
	"KUND",
	"KUNG",
	"KUPA",
	"KUPP",
	"KUPÉ",
	"KURA",
	"KURD",
	"KURR",
	"KURS",
	"KUSE",
	"KUSK",
	"KUST",
	"KUTA",
	"KUTS",
	"KUVA",
	"KVAD",
	"KVAL",
	"KVAR",
	"KVAV",
	"KVED",
	"KVOT",
	"KVÄN",
	"KYLA",
	"KYSK",
	"KYSS",
	"KYTT",
	"KÄCK",
	"KÄFT",
	"KÄKA",
	"KÄKE",
	"KÄLA",
	"KÄLT",
	"KÄND",
	"KÄNN",
	"KÄPP",
	"KÄRA",
	"KÄRL",
	"KÄRR",
	"KÄRV",
	"KÄXA",
	"KÅDA",
	"KÅPA",
	"KÅRA",
	"KÅRE",
	"KÅSA",
	"KÅTA",
	"KÖLD",
	"KÖPA",
	"KÖRA",
	"KÖRD",
	"KÖTT",
	"LABB",
	"LACK",
	"LADA",
	"LADE",
	"LADY",
	"LAFS",
	"LAGA",
	"LAGD",
	"LAGG",
	"LAGT",
	"LAJV",
	"LAKA",
	"LAKE",
	"LALA",
	"LAMA",
	"LAMM",
	"LAMÉ",
	"LANA",
	"LAND",
	"LANG",
	"LANK",
	"LANS",
	"LAPA",
	"LAPP",
	"LARM",
	"LARV",
	"LASA",
	"LASK",
	"LASS",
	"LAST",
	"LATA",
	"LAVA",
	"LAVE",
	"LAXA",
	"LEDA",
	"LEDD",
	"LEGA",
	"LEGG",
	"LEGO",
	"LEJA",
	"LEJD",
	"LEKA",
	"LEKT",
	"LENA",
	"LERA",
	"LESS",
	"LETA",
	"LETT",
	"LEVA",
	"LEVE",
	"LIAN",
	"LIAS",
	"LIDA",
	"LIFT",
	"LIGA",
	"LIGG",
	"LIKA",
	"LIKE",
	"LILA",
	"LIME",
	"LIMO",
	"LINA",
	"LIND",
	"LINS",
	"LIPA",
	"LIRA",
	"LIRE",
	"LISA",
	"LIST",
	"LITA",
	"LITE",
	"LIVA",
	"LIVE",
	"LIVS",
	"LJUD",
	"LJUG",
	"LJUM",
	"LJUS",
	"LJUV",
	"LJÖD",
	"LJÖG",
	"LJÖT",
	"LOBB",
	"LOCK",
	"LOCO",
	"LODA",
	"LOFT",
	"LOGE",
	"LOGG",
	"LOGI",
	"LOGO",
	"LOKA",
	"LOKO",
	"LOMA",
	"LOOK",
	"LOOP",
	"LOPP",
	"LORD",
	"LORT",
	"LOSS",
	"LOTS",
	"LOTT",
	"LOVA",
	"LUAD",
	"LUBB",
	"LUDD",
	"LUES",
	"LUFS",
	"LUFT",
	"LUGG",
	"LUGN",
	"LUKA",
	"LUKT",
	"LULL",
	"LUMP",
	"LUND",
	"LUNK",
	"LUNS",
	"LUPP",
	"LURA",
	"LURK",
	"LURT",
	"LUSA",
	"LUST",
	"LUTA",
	"LUVA",
	"LYDA",
	"LYFT",
	"LYRA",
	"LYSA",
	"LYSE",
	"LYSS",
	"LYTE",
	"LYTT",
	"LYXA",
	"LÄCK",
	"LÄGE",
	"LÄGG",
	"LÄKA",
	"LÄKT",
	"LÄND",
	"LÄNK",
	"LÄNS",
	"LÄPP",
	"LÄRA",
	"LÄRD",
	"LÄRK",
	"LÄSA",
	"LÄSK",
	"LÄSS",
	"LÄST",
	"LÄTE",
	"LÄTT",
	"LÄXA",
	"LÅDA",
	"LÅGA",
	"LÅNA",
	"LÅNG",
	"LÅSA",
	"LÅST",
	"LÅTA",
	"LÖDA",
	"LÖGA",
	"LÖGN",
	"LÖJA",
	"LÖJE",
	"LÖKA",
	"LÖNA",
	"LÖNN",
	"LÖNT",
	"LÖPA",
	"LÖPE",
	"LÖSA",
	"LÖSS",
	"LÖVA",
	"MACH",
	"MACK",
	"MAGE",
	"MAGI",
	"MAJA",
	"MAJS",
	"MAKA",
	"MAKE",
	"MAKO",
	"MAKT",
	"MALA",
	"MALL",
	"MALM",
	"MALT",
	"MANA",
	"MANI",
	"MANX",
	"MAPP",
	"MARA",
	"MARG",
	"MARK",
	"MARS",
	"MASA",
	"MASK",
	"MAST",
	"MATA",
	"MATE",
	"MATS",
	"MATT",
	"MAXA",
	"MAXI",
	"MEDE",
	"MEJA",
	"MEJL",
	"MEKA",
	"MEMO",
	"MENA",
	"MENS",
	"MENY",
	"MERA",
	"MESS",
	"MEST",
	"META",
	"METE",
	"MEZE",
	"MIAU",
	"MICK",
	"MILA",
	"MILD",
	"MILE",
	"MILO",
	"MIMA",
	"MINA",
	"MINI",
	"MINK",
	"MINT",
	"MISS",
	"MIST",
	"MITT",
	"MIXA",
	"MJAU",
	"MJUK",
	"MJÄK",
	"MJÖD",
	"MJÖL",
	"MOBB",
	"MODD",
	"MODE",
	"MODS",
	"MOIG",
	"MOJA",
	"MOLA",
	"MOLL",
	"MOLN",
	"MOLO",
	"MOMS",
	"MONO",
	"MOPP",
	"MOPS",
	"MORA",
	"MORD",
	"MORF",
	"MORR",
	"MORS",
	"MOSA",
	"MOTA",
	"MOTT",
	"MUCK",
	"MUDD",
	"MUFF",
	"MUGG",
	"MULA",
	"MULE",
	"MULL",
	"MUMS",
	"MUND",
	"MUNK",
	"MUPP",
	"MURA",
	"MURR",
	"MUSA",
	"MUST",
	"MUTA",
	"MYGG",
	"MYNT",
	"MYOM",
	"MYON",
	"MYRA",
	"MYSA",
	"MYSK",
	"MÄHÄ",
	"MÄLA",
	"MÄLD",
	"MÄRG",
	"MÄRL",
	"MÄRR",
	"MÄRS",
	"MÄSK",
	"MÄSS",
	"MÄTA",
	"MÄTT",
	"MÅFÅ",
	"MÅLA",
	"MÅNA",
	"MÅNE",
	"MÅRA",
	"MÅRD",
	"MÅST",
	"MÅTT",
	"MÖDA",
	"MÖJA",
	"MÖRA",
	"MÖRK",
	"MÖRT",
	"MÖSS",
	"MÖTA",
	"MÖTE",
	"NABB",
	"NABO",
	"NADA",
	"NAFS",
	"NAGG",
	"NAIV",
	"NAJA",
	"NAMN",
	"NAPP",
	"NARA",
	"NARE",
	"NARR",
	"NARV",
	"NASA",
	"NATE",
	"NATT",
	"NEDI",
	"NEJD",
	"NEKA",
	"NEON",
	"NERE",
	"NERI",
	"NERV",
	"NESA",
	"NEVÖ",
	"NICK",
	"NIGA",
	"NIKT",
	"NIOB",
	"NIPA",
	"NITA",
	"NIVÅ",
	"NIXA",
	"NJÖT",
	"NOCK",
	"NOGA",
	"NOJA",
	"NOJS",
	"NOLL",
	"NONA",
	"NOPP",
	"NORD",
	"NORM",
	"NORR",
	"NORS",
	"NOSA",
	"NOTA",
	"NOVA",
	"NUBB",
	"NUNA",
	"NYCK",
	"NYIS",
	"NYMF",
	"NYPA",
	"NYSA",
	"NYSS",
	"NYÅR",
	"NÄBB",
	"NÄCK",
	"NÄHÄ",
	"NÄNÄ",
	"NÄRA",
	"NÄSA",
	"NÄST",
	"NÄTA",
	"NÄTT",
	"NÄVA",
	"NÄVE",
	"NÅDA",
	"NÅDE",
	"NÅJA",
	"NÅJD",
	"NÅLA",
	"NÅNÅ",
	"NÅRA",
	"NÅTA",
	"NÖDD",
	"NÖFF",
	"NÖJA",
	"NÖJD",
	"NÖJE",
	"NÖPS",
	"NÖRD",
	"NÖTA",
	"OART",
	"OBOE",
	"OBOL",
	"ODAL",
	"ODDS",
	"ODLA",
	"ODON",
	"ODÅD",
	"ODÖR",
	"OFAS",
	"OFIN",
	"OFOG",
	"OFRI",
	"OFTA",
	"OFÖR",
	"OGEN",
	"OGIN",
	"OHOJ",
	"OHÅG",
	"OJOJ",
	"OKEJ",
	"OKÄR",
	"OLAG",
	"OLAT",
	"OLIK",
	"OLIV",
	"OLJA",
	"OLLA",
	"OLLE",
	"OLÅT",
	"OMAK",
	"OMBE",
	"OMEN",
	"OMGE",
	"OMSE",
	"ONDO",
	"ONUS",
	"ONYX",
	"ONÅD",
	"OPAK",
	"OPAL",
	"OPAR",
	"OPPE",
	"OPUS",
	"ORAL",
	"ORDA",
	"OREN",
	"ORIG",
	"ORKA",
	"ORMA",
	"ORNE",
	"OROA",
	"ORRE",
	"ORÅD",
	"OSED",
	"OSIG",
	"OSIS",
	"OSTA",
	"OTAL",
	"OTID",
	"OTIT",
	"OTRO",
	"OTTA",
	"OTUR",
	"OTYG",
	"OTÄT",
	"OUTA",
	"OUZO",
	"OVAL",
	"OVAN",
	"OVIG",
	"OVIS",
	"OVÄN",
	"OXEL",
	"OXER",
	"OXID",
	"OZON",
	"PACK",
	"PAFF",
	"PAGE",
	"PAJA",
	"PAKT",
	"PALL",
	"PALM",
	"PALP",
	"PALS",
	"PALT",
	"PALÄ",
	"PAMP",
	"PANG",
	"PANK",
	"PANT",
	"PAPP",
	"PARA",
	"PARI",
	"PARK",
	"PARM",
	"PART",
	"PASS",
	"PATA",
	"PATT",
	"PATÉ",
	"PAUS",
	"PAVA",
	"PAXA",
	"PEAK",
	"PEJL",
	"PEKA",
	"PEKE",
	"PENG",
	"PEON",
	"PERL",
	"PERM",
	"PERS",
	"PESO",
	"PEST",
	"PETA",
	"PICK",
	"PIFF",
	"PIGA",
	"PIGG",
	"PIKA",
	"PIKÉ",
	"PILA",
	"PILE",
	"PILK",
	"PILL",
	"PILT",
	"PINA",
	"PINN",
	"PINS",
	"PINT",
	"PION",
	"PIPA",
	"PIRK",
	"PIRR",
	"PISK",
	"PISP",
	"PISS",
	"PIST",
	"PITT",
	"PIVÅ",
	"PJÄS",
	"PJÅK",
	"PLAN",
	"PLIT",
	"PLOG",
	"PLOJ",
	"PLUS",
	"PLYM",
	"PLÄD",
	"PLÅN",
	"PLÅT",
	"PLÖS",
	"POCK",
	"PODD",
	"POEM",
	"POET",
	"POJK",
	"POLA",
	"POLO",
	"POMP",
	"POND",
	"POOL",
	"PORL",
	"PORR",
	"PORS",
	"PORT",
	"POSE",
	"POST",
	"POTT",
	"PRAO",
	"PRAT",
	"PRIM",
	"PRIO",
	"PRIS",
	"PROV",
	"PRUT",
	"PRYA",
	"PRYD",
	"PRYL",
	"PRYO",
	"PRÅL",
	"PRÅM",
	"PTRO",
	"PUCK",
	"PUFF",
	"PUKA",
	"PUKE",
	"PULA",
	"PULL",
	"PULS",
	"PULT",
	"PUMA",
	"PUMP",
	"PUND",
	"PUNG",
	"PUNK",
	"PUNS",
	"PURÉ",
	"PUSS",
	"PUST",
	"PUTA",
	"PUTS",
	"PUTT",
	"PYNT",
	"PYRA",
	"PYRE",
	"PYRT",
	"PYSA",
	"PYTS",
	"PYTT",
	"PÄLA",
	"PÄLL",
	"PÄLS",
	"PÄRK",
	"PÄRM",
	"PÄRS",
	"PÄRT",
	"PÄSK",
	"PÅGÅ",
	"PÅLA",
	"PÅLE",
	"PÅSA",
	"PÅSE",
	"PÅSK",
	"PÅTA",
	"PÅVE",
	"PÖSA",
	"QUIZ",
	"RACE",
	"RACK",
	"RADA",
	"RAFS",
	"RAFT",
	"RAGA",
	"RAGG",
	"RAGU",
	"RAID",
	"RAJA",
	"RAJD",
	"RAKA",
	"RAKI",
	"RALL",
	"RAMA",
	"RAMI",
	"RAMM",
	"RAMP",
	"RAMS",
	"RANA",
	"RAND",
	"RANG",
	"RANK",
	"RANN",
	"RAPA",
	"RAPP",
	"RAPS",
	"RASA",
	"RASK",
	"RASP",
	"RAST",
	"RATA",
	"RATE",
	"RATT",
	"RAUK",
	"RAVE",
	"REAL",
	"REDA",
	"REDD",
	"REDE",
	"REDO",
	"REDS",
	"REGI",
	"REGN",
	"REJV",
	"REKA",
	"REKO",
	"RELÄ",
	"REMA",
	"REMI",
	"RENA",
	"RENS",
	"REOL",
	"REPA",
	"REPE",
	"RESA",
	"RESE",
	"REST",
	"RETA",
	"REVA",
	"REVS",
	"REVY",
	"RIBB",
	"RIDA",
	"RIDÅ",
	"RIFF",
	"RIGG",
	"RIKE",
	"RIKS",
	"RING",
	"RINK",
	"RIPA",
	"RIPS",
	"RISA",
	"RISK",
	"RISP",
	"RIST",
	"RITA",
	"RITS",
	"RITT",
	"RIVA",
	"ROAD",
	"ROBE",
	"ROCK",
	"RODD",
	"ROLL",
	"ROMB",
	"ROND",
	"ROPA",
	"ROSA",
	"ROSK",
	"ROST",
	"ROSÉ",
	"ROTA",
	"ROTE",
	"ROTS",
	"ROUÉ",
	"ROVA",
	"RUBB",
	"RUDA",
	"RUFF",
	"RUFS",
	"RUGG",
	"RUIN",
	"RUNA",
	"RUND",
	"RUNT",
	"RUSA",
	"RUSH",
	"RUSK",
	"RUSS",
	"RUTA",
	"RUTT",
	"RUVA",
	"RYBS",
	"RYCK",
	"RYGG",
	"RYKA",
	"RYKT",
	"RYMD",
	"RYNK",
	"RYPS",
	"RYSA",
	"RYSK",
	"RYSS",
	"RYTA",
	"RYTM",
	"RÄCK",
	"RÄDD",
	"RÄKA",
	"RÄLS",
	"RÄNN",
	"RÄTA",
	"RÄTT",
	"RÅDA",
	"RÅDD",
	"RÅGA",
	"RÅGE",
	"RÅKA",
	"RÅMA",
	"RÅNA",
	"RÖJA",
	"RÖKA",
	"RÖKT",
	"RÖNA",
	"RÖNN",
	"RÖRA",
	"RÖRD",
	"RÖSA",
	"RÖSE",
	"RÖST",
	"RÖTA",
	"RÖTT",
	"RÖVA",
	"SABB",
	"SADE",
	"SAFT",
	"SAGA",
	"SAGG",
	"SAGO",
	"SAGT",
	"SAJT",
	"SAKA",
	"SAKÉ",
	"SALA",
	"SALT",
	"SALU",
	"SAME",
	"SAMS",
	"SAMT",
	"SAND",
	"SANG",
	"SANK",
	"SANN",
	"SANS",
	"SARD",
	"SARG",
	"SARI",
	"SARS",
	"SARV",
	"SATE",
	"SATS",
	"SATT",
	"SAVA",
	"SAXA",
	"SCEN",
	"SEBU",
	"SEGA",
	"SEJD",
	"SEJM",
	"SEKT",
	"SELA",
	"SELE",
	"SEMI",
	"SENA",
	"SERB",
	"SESÅ",
	"SEXA",
	"SEXT",
	"SFÄR",
	"SHAH",
	"SHIA",
	"SHIT",
	"SHOP",
	"SHOT",
	"SHOW",
	"SICK",
	"SIDA",
	"SIKH",
	"SIKT",
	"SILA",
	"SILL",
	"SILO",
	"SILT",
	"SIMS",
	"SINA",
	"SINK",
	"SINN",
	"SINT",
	"SIPP",
	"SIRA",
	"SIRP",
	"SISA",
	"SIST",
	"SISU",
	"SITA",
	"SITS",
	"SITT",
	"SIVA",
	"SJAL",
	"SJAS",
	"SJOK",
	"SJUA",
	"SJUD",
	"SJUK",
	"SJÄL",
	"SJÅA",
	"SJÅP",
	"SJÖD",
	"SKAK",
	"SKAL",
	"SKAM",
	"SKAP",
	"SKAR",
	"SKAT",
	"SKAV",
	"SKED",
	"SKEN",
	"SKET",
	"SKEV",
	"SKIR",
	"SKIT",
	"SKOG",
	"SKOJ",
	"SKOL",
	"SKOT",
	"SKOV",
	"SKRI",
	"SKRÅ",
	"SKUM",
	"SKUR",
	"SKUT",
	"SKYA",
	"SKYL",
	"SKYT",
	"SKÄL",
	"SKÄR",
	"SKÅL",
	"SKÅP",
	"SKÅR",
	"SKÖL",
	"SKÖN",
	"SKÖR",
	"SKÖT",
	"SLAF",
	"SLAG",
	"SLAK",
	"SLAM",
	"SLAS",
	"SLAV",
	"SLEM",
	"SLET",
	"SLEV",
	"SLID",
	"SLIG",
	"SLIK",
	"SLIP",
	"SLIT",
	"SLOG",
	"SLOK",
	"SLOM",
	"SLUG",
	"SLUM",
	"SLUP",
	"SLUT",
	"SLYA",
	"SLÄP",
	"SLÄT",
	"SLÅN",
	"SLÖA",
	"SLÖK",
	"SLÖR",
	"SLÖT",
	"SMAK",
	"SMAL",
	"SMED",
	"SMEK",
	"SMET",
	"SMIL",
	"SMOG",
	"SMUL",
	"SMYG",
	"SMÅÖ",
	"SMÖG",
	"SMÖR",
	"SNAR",
	"SNED",
	"SNEK",
	"SNES",
	"SNIP",
	"SNOA",
	"SNOK",
	"SNOR",
	"SNUS",
	"SNUT",
	"SNÄV",
	"SNÅL",
	"SNÅR",
	"SNÅS",
	"SNÖA",
	"SNÖD",
	"SNÖT",
	"SOCK",
	"SODA",
	"SOFT",
	"SOJA",
	"SOLA",
	"SOLD",
	"SOLK",
	"SOLO",
	"SOLV",
	"SOMT",
	"SONA",
	"SOND",
	"SOPA",
	"SOPP",
	"SORB",
	"SORG",
	"SORK",
	"SORL",
	"SORT",
	"SOTA",
	"SOUL",
	"SOVA",
	"SPAD",
	"SPAK",
	"SPAM",
	"SPAN",
	"SPAR",
	"SPAT",
	"SPEL",
	"SPEX",
	"SPIK",
	"SPIS",
	"SPOR",
	"SPOV",
	"SPRI",
	"SPYA",
	"SPÄD",
	"SPÅN",
	"SPÅR",
	"SPÖA",
	"STAB",
	"STAD",
	"STAG",
	"STAL",
	"STAM",
	"STAN",
	"STAS",
	"STAT",
	"STAV",
	"STEG",
	"STEK",
	"STEL",
	"STEN",
	"STEP",
	"STIA",
	"STIG",
	"STIL",
	"STIM",
	"STOA",
	"STOD",
	"STOJ",
	"STOL",
	"STOP",
	"STOR",
	"STOS",
	"STRÅ",
	"STRÖ",
	"STUK",
	"STUM",
	"STUP",
	"STUT",
	"STUV",
	"STYR",
	"STYV",
	"STÄA",
	"STÄD",
	"STÄM",
	"STÄV",
	"STÅL",
	"STÅT",
	"STÖD",
	"STÖK",
	"STÖN",
	"STÖP",
	"STÖR",
	"STÖT",
	"STÖV",
	"SUCK",
	"SUDD",
	"SUGA",
	"SULA",
	"SUMO",
	"SUMP",
	"SUND",
	"SUPA",
	"SUPÉ",
	"SURA",
	"SURF",
	"SURR",
	"SUSA",
	"SVAG",
	"SVAJ",
	"SVAL",
	"SVAN",
	"SVAR",
	"SVED",
	"SVEK",
	"SVEN",
	"SVEP",
	"SVID",
	"SVIN",
	"SVIR",
	"SVIT",
	"SVOR",
	"SVÅL",
	"SVÅR",
	"SWAP",
	"SYDA",
	"SYLF",
	"SYLL",
	"SYLT",
	"SYNA",
	"SYND",
	"SYNE",
	"SYNK",
	"SYNT",
	"SYRA",
	"SYRE",
	"SÄCK",
	"SÄDE",
	"SÄGA",
	"SÄJA",
	"SÄLG",
	"SÄLL",
	"SÄNG",
	"SÄPO",
	"SÄRA",
	"SÄRK",
	"SÄTE",
	"SÄTT",
	"SÅDD",
	"SÅGA",
	"SÅGS",
	"SÅJA",
	"SÅLD",
	"SÅLL",
	"SÅLT",
	"SÅNG",
	"SÅPA",
	"SÅRA",
	"SÅSA",
	"SÅTA",
	"SÅTE",
	"SÖKA",
	"SÖKT",
	"SÖLA",
	"SÖMN",
	"SÖRP",
	"SÖTA",
	"SÖVA",
	"TABB",
	"TABU",
	"TACK",
	"TAFS",
	"TAFT",
	"TAGA",
	"TAGG",
	"TAJT",
	"TAKA",
	"TAKT",
	"TALA",
	"TALG",
	"TALK",
	"TALL",
	"TALT",
	"TAMP",
	"TANA",
	"TAND",
	"TANK",
	"TANT",
	"TAPP",
	"TARA",
	"TARM",
	"TARS",
	"TARV",
	"TASK",
	"TASS",
	"TAXA",
	"TAXI",
	"TEAK",
	"TEAM",
	"TEIN",
	"TEJP",
	"TEKA",
	"TELN",
	"TEMA",
	"TEMP",
	"TENN",
	"TENT",
	"TERM",
	"TERS",
	"TEST",
	"TEVE",
	"TEXT",
	"THAI",
	"TICK",
	"TICS",
	"TIDA",
	"TIFO",
	"TIGA",
	"TILL",
	"TILT",
	"TIMA",
	"TINA",
	"TING",
	"TIOL",
	"TIPI",
	"TIPP",
	"TIPS",
	"TIRA",
	"TITA",
	"TITT",
	"TJAT",
	"TJEJ",
	"TJIM",
	"TJOA",
	"TJOG",
	"TJUR",
	"TJUT",
	"TJUV",
	"TJYV",
	"TJÖT",
	"TOFS",
	"TOFT",
	"TOFU",
	"TOGA",
	"TOGS",
	"TOKA",
	"TOLK",
	"TOLV",
	"TOMT",
	"TONA",
	"TOPP",
	"TOPS",
	"TORA",
	"TORG",
	"TORK",
	"TORN",
	"TORP",
	"TORR",
	"TORV",
	"TORY",
	"TOSA",
	"TOTA",
	"TOTO",
	"TOTT",
	"TOUR",
	"TOVA",
	"TRAD",
	"TRAJ",
	"TRAN",
	"TRAP",
	"TRAV",
	"TREA",
	"TRIM",
	"TRIO",
	"TRIX",
	"TRON",
	"TROP",
	"TRUG",
	"TRUT",
	"TRÄA",
	"TRÄD",
	"TRÄL",
	"TRÅD",
	"TRÅG",
	"TRÅK",
	"TRÅL",
	"TRÖG",
	"TRÖT",
	"TSAR",
	"TUBA",
	"TUFF",
	"TUGG",
	"TUJA",
	"TUKT",
	"TULL",
	"TUNG",
	"TUNN",
	"TUPP",
	"TUPÉ",
	"TURA",
	"TURE",
	"TURF",
	"TURK",
	"TURS",
	"TUSS",
	"TUTA",
	"TUTT",
	"TUTU",
	"TUVA",
	"TVÄR",
	"TVÅA",
	"TVÅL",
	"TWAR",
	"TYDA",
	"TYGA",
	"TYLL",
	"TYNA",
	"TYPA",
	"TYSK",
	"TYST",
	"TÄCK",
	"TÄKT",
	"TÄLT",
	"TÄND",
	"TÄNK",
	"TÄRA",
	"TÄRD",
	"TÄTA",
	"TÄTE",
	"TÅGA",
	"TÅLA",
	"TÅLS",
	"TÅNG",
	"TÅRA",
	"TÖFF",
	"TÖIG",
	"TÖJA",
	"TÖLP",
	"TÖLT",
	"TÖNT",
	"TÖRE",
	"TÖRN",
	"TÖRS",
	"TÖVA",
	"UBÅT",
	"UDDA",
	"UDDE",
	"UKAS",
	"ULAN",
	"ULKA",
	"ULMA",
	"UNGE",
	"UNIK",
	"UNNA",
	"UPPE",
	"UPPÅ",
	"URAN",
	"URDU",
	"UREA",
	"URIN",
	"URNA",
	"USCH",
	"USEL",
	"USKA",
	"UTAN",
	"UTAV",
	"UTBE",
	"UTBO",
	"UTFÅ",
	"UTGE",
	"UTGÅ",
	"UTOM",
	"UTSE",
	"UTSÅ",
	"UTTA",
	"UTUR",
	"UTÅT",
	"UVBO",
	"VABB",
	"VADA",
	"VADD",
	"VADÅ",
	"VAGN",
	"VAJA",
	"VAKA",
	"VAKT",
	"VALA",
	"VALE",
	"VALK",
	"VALL",
	"VALP",
	"VALS",
	"VALT",
	"VALV",
	"VAMP",
	"VANA",
	"VAND",
	"VANG",
	"VANK",
	"VANN",
	"VANT",
	"VARA",
	"VARE",
	"VARG",
	"VARI",
	"VARM",
	"VARP",
	"VARS",
	"VART",
	"VARV",
	"VARÅ",
	"VASE",
	"VASK",
	"VASS",
	"VAXA",
	"VECK",
	"VEKA",
	"VEKE",
	"VELA",
	"VELE",
	"VEPA",
	"VERB",
	"VERK",
	"VERS",
	"VERV",
	"VETA",
	"VETE",
	"VETO",
	"VETT",
	"VEUM",
	"VEVA",
	"VIAL",
	"VIBB",
	"VICE",
	"VICK",
	"VIDA",
	"VIDD",
	"VIDE",
	"VIDI",
	"VIFT",
	"VIGA",
	"VIGG",
	"VIKA",
	"VIKT",
	"VILA",
	"VILD",
	"VILL",
	"VILT",
	"VINA",
	"VIND",
	"VING",
	"VINK",
	"VINN",
	"VIOL",
	"VIPA",
	"VIPP",
	"VIPS",
	"VIRA",
	"VISA",
	"VISE",
	"VISP",
	"VISS",
	"VITA",
	"VITE",
	"VITS",
	"VITT",
	"VIVA",
	"VOFF",
	"VOJA",
	"VOJT",
	"VOLM",
	"VOLT",
	"VORE",
	"VRAK",
	"VRED",
	"VRET",
	"VRIL",
	"VRÅK",
	"VRÅL",
	"VULA",
	"VURM",
	"VYSS",
	"VÄCK",
	"VÄDD",
	"VÄFT",
	"VÄGA",
	"VÄGG",
	"VÄJA",
	"VÄKT",
	"VÄLD",
	"VÄLL",
	"VÄLT",
	"VÄRD",
	"VÄRK",
	"VÄRN",
	"VÄRT",
	"VÄRV",
	"VÄSA",
	"VÄST",
	"VÄTA",
	"VÄTE",
	"VÄVA",
	"VÄXA",
	"VÄXT",
	"VÅDA",
	"VÅGA",
	"VÅLA",
	"VÅLD",
	"VÅLE",
	"VÅLM",
	"VÅNG",
	"VÅRA",
	"VÅRD",
	"VÖRT",
	"WATT",
	"WEBB",
	"WIKI",
	"WIRE",
	"WOKA",
	"WRAP",
	"YARD",
	"YAWL",
	"YLLE",
	"YMPA",
	"YNKA",
	"YOGA",
	"YOGI",
	"YPPA",
	"YRKA",
	"YRKE",
	"YSTA",
	"YSTE",
	"YVAS",
	"YVIG",
	"YXNE",
	"ZEBU",
	"ZEST",
	"ZINK",
	"ZOOM",
	"ZULU",
	"ÅMÅL",
	"ÄDEL",
	"ÄGNA",
	"ÄKTA",
	"ÄLGA",
	"ÄLTA",
	"ÄLVA",
	"ÄMNA",
	"ÄMNE",
	"ÄNDA",
	"ÄNDE",
	"ÄNDÅ",
	"ÄNGD",
	"ÄNGE",
	"ÄNKA",
	"ÄNNE",
	"ÄNNU",
	"ÄRAD",
	"ÄRGA",
	"ÄRIL",
	"ÄRJA",
	"ÄRLA",
	"ÄRNA",
	"ÄRRA",
	"ÄRTA",
	"ÄRVA",
	"ÄSCH",
	"ÄSKA",
	"ÄVEN",
	"ÄVJA",
	"ÅDAL",
	"ÅDER",
	"ÅDRA",
	"ÅHEJ",
	"ÅHOJ",
	"ÅKER",
	"ÅLLA",
	"ÅMIG",
	"ÅNEJ",
	"ÅNGA",
	"ÅNYO",
	"ÅPEN",
	"ÅRTA",
	"ÅSKA",
	"ÅSNA",
	"ÅSYN",
	"ÅTAL",
	"ÅTEL",
	"ÅTER",
	"ÅTGÅ",
	"ÅTRA",
	"ÅTRÅ",
	"ÅTTA",
	"ÅTTI",
	"ÉLAN",
	"ÖDEM",
	"ÖDLA",
	"ÖGLA",
	"ÖGNA",
	"ÖGON",
	"ÖKEN",
	"ÖMKA",
	"ÖMMA",
	"ÖMSA",
	"ÖMSE",
	"ÖRLA",
	"ÖRON",
	"ÖSIG",
	"ÖVER",
	"ÖVRE"
]
