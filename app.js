const directions = ["North", "South", "East", "West"];
const continents = [
  { name: "Africa", lat: 3, lon: 20 },
  { name: "Antarctica", lat: -72, lon: 20 },
  { name: "Asia", lat: 34, lon: 88 },
  { name: "Europe", lat: 51, lon: 16 },
  { name: "North America", lat: 44, lon: -102 },
  { name: "Oceania", lat: -25, lon: 138 },
  { name: "South America", lat: -21, lon: -60 }
];

const directionOffsets = {
  North: { lat: 13, lon: 0 },
  South: { lat: -13, lon: 0 },
  East: { lat: 0, lon: 18 },
  West: { lat: 0, lon: -18 }
};

const languageCopy = {
  en: {
    navGlobe: "Globe",
    navArchive: "Archive",
    navSources: "Sources",
    language: "Language",
    heroKicker: "Rotatable extinction atlas",
    heroTitle: "Choose a part of Earth. Hear what is almost gone.",
    heroBody: "Every continent is split into north, south, east, and west. Select a glowing region to open five threatened animals from that area.",
    searchLabel: "Search 140 animal records",
    searchButton: "Search",
    searchPlaceholder: "Search vaquita, rhino, penguin, forest, bycatch...",
    zonesKicker: "28 living zones",
    zonesTitle: "Continents divided by direction",
    panelTitle: "Endangered animals in this region",
    animalsLoaded: "animals loaded",
    openVideo: "Open video",
    animateImages: "Animate images",
    sourceSuffix: "source",
    population: "Population left",
    where: "Where",
    body: "Body",
    habitat: "Habitat",
    imageTitle: "Species image",
    videoTitle: "Species video",
    sourcesBody: "This globe build uses concise educational summaries with population values shown as estimates when exact counts are uncertain. Image panels load animal photographs from public media sources where available and filter out maps, charts, diagrams, and range graphics."
  },
  es: {
    navGlobe: "Globo",
    navArchive: "Archivo",
    navSources: "Fuentes",
    language: "Idioma",
    heroKicker: "Atlas giratorio de extincion",
    heroTitle: "Elige una parte de la Tierra. Escucha lo que casi desaparece.",
    heroBody: "Cada continente se divide en norte, sur, este y oeste. Selecciona una region brillante para abrir cinco animales amenazados.",
    searchLabel: "Buscar 140 animales",
    searchButton: "Buscar",
    searchPlaceholder: "Busca vaquita, rinoceronte, pinguino, bosque...",
    zonesKicker: "28 zonas vivas",
    zonesTitle: "Continentes divididos por direccion",
    panelTitle: "Animales en peligro en esta region",
    animalsLoaded: "animales cargados",
    openVideo: "Abrir video",
    animateImages: "Animar imagenes",
    sourceSuffix: "fuente",
    population: "Poblacion restante",
    where: "Donde",
    body: "Cuerpo",
    habitat: "Habitat",
    imageTitle: "Imagen de la especie",
    videoTitle: "Video de la especie",
    sourcesBody: "Este globo usa resumenes educativos y estimaciones de poblacion cuando los conteos exactos son inciertos. Las imagenes cargan fotos de animales y filtran mapas, graficas y diagramas."
  },
  fr: {
    navGlobe: "Globe",
    navArchive: "Archive",
    navSources: "Sources",
    language: "Langue",
    heroKicker: "Atlas rotatif d'extinction",
    heroTitle: "Choisis une partie de la Terre. Ecoute ce qui disparait presque.",
    heroBody: "Chaque continent est divise en nord, sud, est et ouest. Choisis une region lumineuse pour ouvrir cinq animaux menaces.",
    searchLabel: "Chercher 140 animaux",
    searchButton: "Chercher",
    searchPlaceholder: "Cherche vaquita, rhinoceros, pingouin, foret...",
    zonesKicker: "28 zones vivantes",
    zonesTitle: "Continents divises par direction",
    panelTitle: "Animaux menaces dans cette region",
    animalsLoaded: "animaux charges",
    openVideo: "Ouvrir video",
    animateImages: "Animer images",
    sourceSuffix: "source",
    population: "Population restante",
    where: "Ou",
    body: "Corps",
    habitat: "Habitat",
    imageTitle: "Image de l'espece",
    videoTitle: "Video de l'espece",
    sourcesBody: "Ce globe utilise des resumes educatifs et des estimations quand les comptes exacts sont incertains. Les images chargent des photos d'animaux et filtrent cartes, graphiques et diagrammes."
  },
  hi: {
    navGlobe: "Globe",
    navArchive: "Archive",
    navSources: "Sources",
    language: "Language",
    heroKicker: "Rotatable extinction atlas",
    heroTitle: "Earth ka area choose karo. Jo almost gone hai uski story dekho.",
    heroBody: "Har continent north, south, east, west me divided hai. Glowing region select karke wahan ke five threatened animals kholo.",
    searchLabel: "140 animal records search karo",
    searchButton: "Search",
    searchPlaceholder: "Vaquita, rhino, penguin, forest search karo...",
    zonesKicker: "28 living zones",
    zonesTitle: "Continents direction ke hisaab se divided",
    panelTitle: "Is region ke endangered animals",
    animalsLoaded: "animals loaded",
    openVideo: "Video kholo",
    animateImages: "Images animate karo",
    sourceSuffix: "source",
    population: "Population left",
    where: "Where",
    body: "Body",
    habitat: "Habitat",
    imageTitle: "Species image",
    videoTitle: "Species video",
    sourcesBody: "Ye globe educational summaries aur population estimates use karta hai. Images animal photos load karti hain aur maps, charts, diagrams filter karti hain."
  }
};

["ar", "zh", "ja", "pt", "sw", "id"].forEach((language) => {
  languageCopy[language] = { ...languageCopy.en };
});

const animalTemplates = {
  mammal: {
    body: "Warm-blooded vertebrate with fur or hair, live birth, and high parental care.",
    habitat: "Uses land, forest, mountain, grassland, wetland, or coastal habitat depending on the species."
  },
  bird: {
    body: "Feathered vertebrate with a lightweight body, beak, wings, and strong seasonal movement in many populations.",
    habitat: "Nests and feeds in forests, wetlands, cliffs, coasts, islands, or open country."
  },
  marine: {
    body: "Ocean-adapted animal shaped for swimming, diving, and sensing movement through water.",
    habitat: "Lives in coastal seas, open ocean, reefs, estuaries, or polar waters."
  },
  reptile: {
    body: "Scaly vertebrate with a body built for heat regulation, stealth, and efficient movement.",
    habitat: "Depends on warm beaches, rivers, wetlands, drylands, or island ecosystems."
  },
  amphibian: {
    body: "Moist-skinned vertebrate with a life cycle tied closely to clean water and stable microclimates.",
    habitat: "Survives in streams, wetlands, cloud forests, ponds, and damp leaf litter."
  },
  fish: {
    body: "Aquatic vertebrate with fins and gills, often sensitive to water temperature, flow, and pollution.",
    habitat: "Lives in rivers, estuaries, reefs, lakes, or deep marine systems."
  },
  insect: {
    body: "Small invertebrate with a segmented body and specialized life cycle linked to host plants or islands.",
    habitat: "Depends on very specific plants, soil, forest patches, or island refuges."
  }
};

const sourceLinks = {
  WWF: "https://www.worldwildlife.org/species",
  IUCN: "https://www.iucnredlist.org/",
  NOAA: "https://www.fisheries.noaa.gov/species-directory/threatened-endangered",
  USFWS: "https://www.fws.gov/program/endangered-species",
  EDGE: "https://www.edgeofexistence.org/",
  "BirdLife": "https://datazone.birdlife.org/",
  "Rhino Foundation": "https://rhinos.org/",
  "Whale & Dolphin Conservation": "https://us.whales.org/"
};

const knownVideoIds = {
  "vaquita-phocoena-sinus": "Y5nyrFvDumE",
  "javan-rhinoceros-rhinoceros-sondaicus": "Y5nyrFvDumE"
};

const fallbackConservationVideoId = "Y5nyrFvDumE";

const earthTextureUrls = {
  map: "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_atmos_2048.jpg",
  specular: "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_specular_2048.jpg",
  clouds: "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_clouds_1024.png"
};

const curatedImages = {
  "vaquita-phocoena-sinus": [
    "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesVaqui.2e16d0ba.fill-375x500.format-webp.webp",
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Vaquita1_Olson_NOAA.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vaquita2_Olson_NOAA.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Vaquita4_Olson_NOAA.jpg/960px-Vaquita4_Olson_NOAA.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/77/Vaquita1_Olson_NOAA.jpg"
  ],
  "javan-rhinoceros-rhinoceros-sondaicus": [
    "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesJavan_nAP0hSU.2e16d0ba.fill-375x500.format-webp.webp",
    "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesJavan_rhino_07151.width-800.format-webp.webp",
    "https://gcp-na-images.contentstack.com/v3/assets/bltea6093859af6183b/blte0908699b89011ed/69893f737cdbac8d49d5e76c/2-javan-rhino_photo-by-robin-moore-global-wildlife-conservation.jpg?branch=production&width=1600&quality=75&auto=webp&crop=3:2",
    "https://upload.wikimedia.org/wikipedia/commons/c/ce/Rhinoceros_sondaicus_in_London_Zoo.jpg",
    "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesJavan_nAP0hSU.2e16d0ba.fill-375x500.format-webp.webp"
  ]
};

const speciesByRegion = {
  "Africa-North": [
    a("Addax", "Addax nasomaculatus", "Critically endangered", "Estimate: fewer than 100 wild individuals", "mammal", "Sahara and Sahel desert fragments", "Overhunting, oil development, drought, and disturbance have left tiny scattered groups.", "IUCN"),
    a("Dama Gazelle", "Nanger dama", "Critically endangered", "Estimate: fewer than 250 mature individuals", "mammal", "Sahelian grasslands and desert edge", "Hunting, livestock pressure, and habitat loss collapsed its former North African range.", "IUCN"),
    a("Egyptian Vulture", "Neophron percnopterus", "Endangered", "Global population declining; exact count varies by region", "bird", "Dry cliffs, open country, and migration corridors", "Poisoning, electrocution, food loss, and unsafe migration routes are major threats.", "BirdLife"),
    a("Barbary Macaque", "Macaca sylvanus", "Endangered", "Estimate: 6,500 to 9,100 mature individuals", "mammal", "Cedar and oak forests of Morocco and Algeria", "Forest loss, illegal trade, and human pressure fragment the last wild groups.", "IUCN"),
    a("Mediterranean Monk Seal", "Monachus monachus", "Endangered", "Estimate: around 700 individuals", "marine", "Sea caves and quiet coasts of the Mediterranean and eastern Atlantic", "Disturbance, entanglement, habitat loss, and low reproductive space threaten recovery.", "IUCN")
  ],
  "Africa-South": [
    a("African Wild Dog", "Lycaon pictus", "Endangered", "Estimate: about 6,600 adults and juveniles", "mammal", "Savanna, woodland, and arid grassland", "Habitat fragmentation, disease, conflict, and road deaths isolate packs.", "WWF"),
    a("Black Rhinoceros", "Diceros bicornis", "Critically endangered", "Estimate: about 6,000 wild individuals", "mammal", "Savanna, shrubland, and desert-edge habitats", "Poaching for horn and slow breeding keep the species at high risk.", "Rhino Foundation"),
    a("Riverine Rabbit", "Bunolagus monticularis", "Critically endangered", "Estimate: fewer than 250 mature individuals", "mammal", "Karoo riverine shrubland in South Africa", "Farming has removed and split most of its narrow riverside habitat.", "IUCN"),
    a("Cape Vulture", "Gyps coprotheres", "Vulnerable", "Estimate: several thousand mature individuals", "bird", "Cliffs, grasslands, and open rangelands", "Poisoning, power-line collisions, and food contamination reduce breeding colonies.", "BirdLife"),
    a("Pickersgill's Reed Frog", "Hyperolius pickersgilli", "Critically endangered", "Exact population unknown; very restricted wetlands", "amphibian", "Coastal wetlands of KwaZulu-Natal", "Wetland drainage, development, invasive plants, and pollution shrink breeding sites.", "IUCN")
  ],
  "Africa-East": [
    a("Grevy's Zebra", "Equus grevyi", "Endangered", "Estimate: about 3,000 wild individuals", "mammal", "Dry grasslands of Kenya and Ethiopia", "Water competition, grazing pressure, disease, and habitat loss limit recovery.", "WWF"),
    a("Ethiopian Wolf", "Canis simensis", "Endangered", "Estimate: fewer than 500 individuals", "mammal", "High Afroalpine grasslands of Ethiopia", "Disease from domestic dogs and shrinking mountain habitat threaten small packs.", "IUCN"),
    a("Hirola", "Beatragus hunteri", "Critically endangered", "Estimate: fewer than 500 individuals", "mammal", "Grasslands on the Kenya-Somalia border", "Habitat change, drought, disease, and predation pressure have left one main wild population.", "IUCN"),
    a("Mountain Bongo", "Tragelaphus eurycerus isaaci", "Critically endangered", "Estimate: fewer than 100 wild individuals", "mammal", "Kenyan mountain forests", "Forest loss, disease, and tiny isolated herds place it close to extinction.", "IUCN"),
    a("Tana River Red Colobus", "Piliocolobus rufomitratus", "Endangered", "Estimate: under 1,500 individuals", "mammal", "River forests along Kenya's Tana River", "Riverine forest clearing and fragmented habitat leave groups isolated.", "IUCN")
  ],
  "Africa-West": [
    a("Cross River Gorilla", "Gorilla gorilla diehli", "Critically endangered", "Estimate: 200 to 300 individuals", "mammal", "Mountain forests on the Nigeria-Cameroon border", "Hunting, forest fragmentation, and small isolated groups threaten survival.", "WWF"),
    a("Niger Delta Red Colobus", "Piliocolobus epieni", "Critically endangered", "Estimate: very small and declining; exact count unknown", "mammal", "Freshwater swamp forests of the Niger Delta", "Oil development, logging, hunting, and habitat loss are severe pressures.", "IUCN"),
    a("Pygmy Hippopotamus", "Choeropsis liberiensis", "Endangered", "Estimate: fewer than 2,500 mature individuals", "mammal", "West African forests and swamps", "Forest loss, hunting, and mining fragment the remaining range.", "IUCN"),
    a("West African Lion", "Panthera leo leo", "Critically endangered", "Estimate: a few hundred in West Africa", "mammal", "Savanna and protected areas in West Africa", "Prey loss, conflict, habitat conversion, and isolation reduce the last prides.", "IUCN"),
    a("Slender-snouted Crocodile", "Mecistops cataphractus", "Critically endangered", "Exact population unknown; sharply reduced", "reptile", "Forest rivers and wetlands of West and Central Africa", "Hunting, bycatch, river disturbance, and forest loss threaten breeding adults.", "IUCN")
  ],
  "Antarctica-North": [
    a("Antarctic Blue Whale", "Balaenoptera musculus intermedia", "Critically endangered", "Estimate: a few thousand; recovering from whaling", "marine", "Southern Ocean feeding grounds", "Historic whaling caused extreme depletion; climate-driven prey change remains a risk.", "NOAA"),
    a("Sei Whale", "Balaenoptera borealis", "Endangered", "Population recovering unevenly; exact Southern Ocean count uncertain", "marine", "Open ocean and subpolar feeding waters", "Whaling history, ship strikes, noise, and prey shifts affect recovery.", "NOAA"),
    a("Southern Rockhopper Penguin", "Eudyptes chrysocome", "Vulnerable", "Millions remain, but colonies have declined steeply", "bird", "Subantarctic islands and rocky coasts", "Warming seas, food shifts, disease, and fisheries pressure reduce colonies.", "BirdLife"),
    a("Amsterdam Albatross", "Diomedea amsterdamensis", "Endangered", "Estimate: around 200 individuals", "bird", "Amsterdam Island and Southern Ocean", "A single breeding island, disease, and fishing bycatch create high extinction risk.", "BirdLife"),
    a("Subantarctic Fur Seal", "Arctocephalus tropicalis", "Least concern but climate-sensitive", "Population recovered; monitored for future risk", "marine", "Subantarctic islands and surrounding seas", "Climate stress, entanglement, and food-web shifts could reverse gains.", "IUCN")
  ],
  "Antarctica-South": [
    a("Emperor Penguin", "Aptenodytes forsteri", "Near threatened", "Estimate: hundreds of thousands, projected to decline", "bird", "Antarctic sea ice and coastal colonies", "Loss of stable sea ice threatens breeding success and chick survival.", "IUCN"),
    a("Macaroni Penguin", "Eudyptes chrysolophus", "Vulnerable", "Millions remain, with major long-term decline", "bird", "Subantarctic islands and ocean feeding zones", "Ocean warming, prey changes, and disturbance pressure colonies.", "BirdLife"),
    a("Antarctic Petrel", "Thalassoica antarctica", "Least concern but ice-dependent", "Population uncertain in remote colonies", "bird", "Antarctic cliffs, ice edge, and krill-rich waters", "Climate shifts can affect sea ice, krill, and breeding conditions.", "BirdLife"),
    a("Grey-headed Albatross", "Thalassarche chrysostoma", "Endangered", "Declining; exact count varies by colony", "bird", "Subantarctic islands and Southern Ocean", "Longline fishing bycatch and slow breeding drive population decline.", "BirdLife"),
    a("Antarctic Krill", "Euphausia superba", "Keystone species under pressure", "Extremely abundant but regionally stressed", "marine", "Cold Southern Ocean waters", "Fishing pressure and warming threaten the food base for whales, seals, and penguins.", "IUCN")
  ],
  "Antarctica-East": [
    a("Fin Whale", "Balaenoptera physalus", "Vulnerable", "Recovering from whaling; exact count varies by ocean basin", "marine", "Open ocean, including Southern Ocean feeding grounds", "Historic whaling, ship strikes, entanglement, and noise slow recovery.", "NOAA"),
    a("Wandering Albatross", "Diomedea exulans", "Vulnerable", "Declining in several colonies", "bird", "Subantarctic islands and vast ocean routes", "Fishing bycatch and plastic ingestion threaten long-lived adults.", "BirdLife"),
    a("Chinstrap Penguin", "Pygoscelis antarcticus", "Least concern but declining in parts", "Millions remain; some colonies falling", "bird", "Antarctic Peninsula and subantarctic islands", "Krill changes and warming seas are affecting colony stability.", "BirdLife"),
    a("Light-mantled Albatross", "Phoebetria palpebrata", "Near threatened", "Population trend declining", "bird", "Subantarctic islands and southern oceans", "Longline bycatch and slow reproduction keep losses serious.", "BirdLife"),
    a("Southern Elephant Seal", "Mirounga leonina", "Least concern but regionally variable", "Large population; some colonies declined", "marine", "Subantarctic breeding beaches and polar feeding waters", "Climate-driven prey changes and human disturbance affect some populations.", "IUCN")
  ],
  "Antarctica-West": [
    a("Humpback Whale", "Megaptera novaeangliae", "Recovered globally, some populations vulnerable", "Most populations increasing; local counts vary", "marine", "Southern Ocean feeding grounds and migration routes", "Entanglement, ship strikes, noise, and prey disruption remain threats.", "NOAA"),
    a("Adelie Penguin", "Pygoscelis adeliae", "Least concern but regionally declining", "Millions remain; trends differ by colony", "bird", "Antarctic coasts and sea ice", "Sea-ice change, prey shifts, and local disturbance affect colonies.", "BirdLife"),
    a("Sooty Albatross", "Phoebetria fusca", "Endangered", "Declining; exact global count uncertain", "bird", "Subantarctic islands and open ocean", "Fishing bycatch and slow breeding cause serious long-term decline.", "BirdLife"),
    a("Antarctic Minke Whale", "Balaenoptera bonaerensis", "Data deficient in some assessments", "Population uncertain", "marine", "Pack ice and Southern Ocean waters", "Climate change, noise, and ecosystem shifts are key concerns.", "IUCN"),
    a("Gentoo Penguin", "Pygoscelis papua", "Least concern but locally sensitive", "Hundreds of thousands; regional changes vary", "bird", "Antarctic Peninsula and subantarctic islands", "Food-web shifts and disturbance can rapidly alter colony success.", "BirdLife")
  ],
  "Asia-North": [
    a("Amur Leopard", "Panthera pardus orientalis", "Critically endangered", "Estimate: over 100 wild individuals", "mammal", "Temperate forests of Russia and northeast China", "Poaching, prey loss, roads, and tiny range keep the cat in danger.", "WWF"),
    a("Amur Tiger", "Panthera tigris altaica", "Endangered", "Estimate: around 500 to 600 wild individuals", "mammal", "Russian Far East and northeast China forests", "Poaching, prey loss, habitat fragmentation, and conflict threaten recovery.", "WWF"),
    a("Snow Leopard", "Panthera uncia", "Vulnerable", "Estimate: 4,000 to 6,500 wild individuals", "mammal", "High mountains of Central and North Asia", "Retaliatory killing, prey decline, and climate change pressure mountain ranges.", "WWF"),
    a("Saiga Antelope", "Saiga tatarica", "Near threatened after major recovery", "Population has rebounded but remains disease-sensitive", "mammal", "Steppe and semi-desert of Eurasia", "Disease outbreaks, poaching, and migration barriers can cause rapid crashes.", "IUCN"),
    a("Siberian Crane", "Leucogeranus leucogeranus", "Critically endangered", "Estimate: fewer than 4,000 individuals", "bird", "Arctic wetlands and Asian migration routes", "Wetland loss and unsafe migration corridors threaten breeding populations.", "BirdLife")
  ],
  "Asia-South": [
    a("Bengal Tiger", "Panthera tigris tigris", "Endangered", "Global tiger estimate: about 5,500 wild individuals across subspecies", "mammal", "Forests, mangroves, and grasslands of South Asia", "Habitat loss, poaching, prey decline, and conflict remain major risks.", "WWF"),
    a("Ganges River Dolphin", "Platanista gangetica", "Endangered", "Estimate: several thousand individuals", "marine", "Ganges-Brahmaputra river systems", "Dams, fishing gear, pollution, and river traffic fragment freshwater habitat.", "WWF"),
    a("Gharial", "Gavialis gangeticus", "Critically endangered", "Estimate: fewer than 1,000 mature individuals", "reptile", "Large rivers of the Indian subcontinent", "Sand mining, fishing nets, dams, and egg loss reduce breeding sites.", "IUCN"),
    a("Asian Elephant", "Elephas maximus", "Endangered", "Estimate: 40,000 to 50,000 wild individuals", "mammal", "Forests and grasslands across South and Southeast Asia", "Habitat fragmentation, conflict, and poaching threaten connected herds.", "WWF"),
    a("Red Panda", "Ailurus fulgens", "Endangered", "Estimate: fewer than 10,000 mature individuals", "mammal", "Himalayan temperate forests with bamboo", "Forest loss, snares, and climate shifts shrink bamboo habitat.", "WWF")
  ],
  "Asia-East": [
    a("Chinese Giant Salamander", "Andrias davidianus", "Critically endangered", "Wild population extremely depleted; exact count unknown", "amphibian", "Cold mountain streams in China", "Harvest, farming escapes, disease, and river degradation threaten wild lineages.", "EDGE"),
    a("Yangtze Finless Porpoise", "Neophocaena asiaeorientalis", "Critically endangered", "Estimate: around 1,000 individuals", "marine", "Yangtze River and connected lakes", "Boat traffic, pollution, dams, and fishing gear make the river unsafe.", "WWF"),
    a("Crested Ibis", "Nipponia nippon", "Endangered", "Recovered from seven known birds to thousands under protection", "bird", "Wetlands, rice fields, and forest edges in East Asia", "Wetland loss, pesticide exposure, and small founder population remain risks.", "BirdLife"),
    a("Red-crowned Crane", "Grus japonensis", "Endangered", "Estimate: about 3,000 individuals", "bird", "Wetlands of northeast Asia and Japan", "Wetland conversion and disturbance threaten breeding and wintering sites.", "BirdLife"),
    a("Chinese Pangolin", "Manis pentadactyla", "Critically endangered", "Exact population unknown; steep decline", "mammal", "Forests and grasslands of East and Southeast Asia", "Illegal wildlife trade and habitat loss have devastated populations.", "IUCN")
  ],
  "Asia-West": [
    a("Arabian Leopard", "Panthera pardus nimr", "Critically endangered", "Estimate: fewer than 200 wild individuals", "mammal", "Mountains of the Arabian Peninsula", "Prey loss, conflict, persecution, and habitat fragmentation threaten tiny groups.", "IUCN"),
    a("Asiatic Cheetah", "Acinonyx jubatus venaticus", "Critically endangered", "Estimate: fewer than 50 individuals", "mammal", "Deserts and semi-deserts of Iran", "Road deaths, prey loss, mining, and tiny population size threaten survival.", "IUCN"),
    a("Persian Fallow Deer", "Dama mesopotamica", "Endangered", "Estimate: several hundred reintroduced and managed individuals", "mammal", "Woodlands and river valleys in the Middle East", "Historical hunting and habitat loss left fragmented managed populations.", "IUCN"),
    a("Sociable Lapwing", "Vanellus gregarius", "Critically endangered", "Estimate: around 11,000 mature individuals, declining", "bird", "Steppe grasslands and migration wetlands", "Agricultural change, hunting, and migration-route threats reduce flocks.", "BirdLife"),
    a("Hawksbill Turtle", "Eretmochelys imbricata", "Critically endangered", "Global nesting females greatly reduced; exact count uncertain", "reptile", "Coral reefs and tropical coasts", "Shell trade, egg harvest, bycatch, and reef loss threaten survival.", "WWF")
  ],
  "Europe-North": [
    a("Saimaa Ringed Seal", "Pusa hispida saimensis", "Endangered", "Estimate: about 400 individuals", "marine", "Lake Saimaa in Finland", "Fishing nets, shoreline disturbance, and weak snow cover reduce pup survival.", "IUCN"),
    a("European Mink", "Mustela lutreola", "Critically endangered", "Exact count unknown; severely fragmented", "mammal", "Wetlands and rivers of Europe", "Habitat loss, invasive American mink, and water pollution caused major decline.", "IUCN"),
    a("Angelshark", "Squatina squatina", "Critically endangered", "Exact population unknown; disappeared from much former range", "fish", "Sandy seabeds of the northeast Atlantic and Mediterranean", "Bottom fishing and bycatch devastated this once widespread shark.", "IUCN"),
    a("Scottish Wildcat", "Felis silvestris", "Critically endangered locally", "Wild pure population functionally near extinction", "mammal", "Highland forests, moorland, and rough grassland", "Hybridization with domestic cats, disease, and persecution threaten genetic survival.", "IUCN"),
    a("Baltic Sturgeon", "Acipenser oxyrinchus", "Critically endangered regionally", "Reintroduction underway; wild breeders very rare", "fish", "Baltic rivers and coastal waters", "Dams, overfishing, and river modification erased historical spawning runs.", "IUCN")
  ],
  "Europe-South": [
    a("Iberian Lynx", "Lynx pardinus", "Vulnerable after recovery", "Estimate: over 2,000 individuals after conservation gains", "mammal", "Mediterranean scrubland of Spain and Portugal", "Rabbit prey decline, roads, disease, and habitat fragmentation remain threats.", "IUCN"),
    a("Loggerhead Sea Turtle", "Caretta caretta", "Vulnerable", "Global population varies by nesting region", "reptile", "Mediterranean beaches and open ocean", "Bycatch, plastic, beach disturbance, and warming nests threaten hatchlings.", "IUCN"),
    a("Balearic Shearwater", "Puffinus mauretanicus", "Critically endangered", "Estimate: a few thousand breeding pairs", "bird", "Balearic nesting caves and Atlantic feeding waters", "Bycatch, invasive predators, and low breeding success drive rapid decline.", "BirdLife"),
    a("Apennine Chamois", "Rupicapra pyrenaica ornata", "Vulnerable", "Estimate: a few thousand individuals", "mammal", "Rocky mountain slopes of central Italy", "Small range, disease, and climate pressure keep the subspecies vulnerable.", "IUCN"),
    a("Mediterranean Monk Seal", "Monachus monachus", "Endangered", "Estimate: around 700 individuals", "marine", "Quiet Mediterranean sea caves and coasts", "Disturbance, entanglement, and limited breeding caves threaten recovery.", "IUCN")
  ],
  "Europe-East": [
    a("European Bison", "Bison bonasus", "Near threatened", "Estimate: over 9,000 after reintroduction", "mammal", "Forests and meadows of eastern Europe", "Low genetic diversity, disease, and fragmented herds require management.", "IUCN"),
    a("Saker Falcon", "Falco cherrug", "Endangered", "Population declining; exact count varies by region", "bird", "Steppe, open country, and cliffs", "Illegal trapping, electrocution, prey decline, and land-use change are major threats.", "BirdLife"),
    a("Russian Desman", "Desmana moschata", "Endangered", "Estimate: several thousand but declining", "mammal", "Slow rivers, oxbow lakes, and wetlands", "Fishing nets, water pollution, drought, and habitat drainage reduce colonies.", "IUCN"),
    a("Beluga Sturgeon", "Huso huso", "Critically endangered", "Wild spawning population severely reduced", "fish", "Black Sea, Caspian Sea, and large rivers", "Overfishing for caviar and dams blocking migration caused major collapse.", "IUCN"),
    a("Great Bustard", "Otis tarda", "Vulnerable", "Global population declining; regional counts vary", "bird", "Open farmland and steppe", "Agricultural intensification, power lines, and disturbance reduce breeding success.", "BirdLife")
  ],
  "Europe-West": [
    a("European Eel", "Anguilla anguilla", "Critically endangered", "Recruitment has fallen dramatically; exact adult count unknown", "fish", "European rivers, coasts, and Sargasso Sea migration route", "Dams, fishing, pollution, parasites, and ocean change disrupt its life cycle.", "IUCN"),
    a("Atlantic Salmon", "Salmo salar", "Near threatened globally, endangered in many rivers", "Counts vary by river; many runs declined", "fish", "Cold rivers and North Atlantic migration routes", "Dams, warming, aquaculture impacts, and overfishing reduce returning adults.", "IUCN"),
    a("Corncrake", "Crex crex", "Least concern globally but threatened in western Europe", "Western populations reduced", "bird", "Hay meadows and wet grasslands", "Early mowing and loss of traditional grasslands destroy nests.", "BirdLife"),
    a("Basking Shark", "Cetorhinus maximus", "Endangered", "Population depleted; exact count unknown", "fish", "Temperate coastal waters and plankton-rich seas", "Historic fishing, ship strikes, entanglement, and slow reproduction limit recovery.", "IUCN"),
    a("Natterjack Toad", "Epidalea calamita", "Threatened in parts of western Europe", "Local populations fragmented", "amphibian", "Coastal dunes, heathlands, and shallow pools", "Loss of temporary ponds and coastal development isolate colonies.", "IUCN")
  ],
  "North America-North": [
    a("Polar Bear", "Ursus maritimus", "Vulnerable", "Estimate: 22,000 to 31,000 individuals", "mammal", "Arctic sea ice, coasts, and tundra", "Sea-ice loss reduces hunting time and cub survival.", "WWF"),
    a("Peary Caribou", "Rangifer tarandus pearyi", "Threatened", "Estimate: about 13,000 individuals", "mammal", "Canadian High Arctic islands", "Weather extremes, ice crusting, and climate change affect food access.", "IUCN"),
    a("Whooping Crane", "Grus americana", "Endangered", "Estimate: fewer than 900 total individuals", "bird", "Wetlands from Canada to the southern United States", "Wetland loss, collisions, storms, and tiny population size threaten recovery.", "USFWS"),
    a("North Atlantic Right Whale", "Eubalaena glacialis", "Critically endangered", "Estimate: fewer than 370 individuals", "marine", "North Atlantic feeding and calving waters", "Entanglement and vessel strikes are the leading human-caused threats.", "NOAA"),
    a("Ivory Gull", "Pagophila eburnea", "Near threatened", "Population declining; exact count uncertain", "bird", "High Arctic sea ice and coastal colonies", "Sea-ice loss, pollution, and changing food webs threaten colonies.", "BirdLife")
  ],
  "North America-South": [
    a("Vaquita", "Phocoena sinus", "Critically endangered", "Estimate: about 10 individuals", "marine", "Northern Gulf of California, Mexico", "Illegal gillnets for totoaba fishing are the main cause of collapse.", "WWF"),
    a("Mexican Wolf", "Canis lupus baileyi", "Endangered", "Estimate: a few hundred in the wild", "mammal", "Southwestern United States and northern Mexico", "Historical persecution, low genetic diversity, and conflict slow recovery.", "USFWS"),
    a("Axolotl", "Ambystoma mexicanum", "Critically endangered", "Wild population extremely small and fragmented", "amphibian", "Canals and wetlands of Xochimilco, Mexico City", "Urban pollution, invasive fish, and habitat loss devastated wild populations.", "EDGE"),
    a("Kemp's Ridley Turtle", "Lepidochelys kempii", "Critically endangered", "Nesting population recovering but still at risk", "reptile", "Gulf of Mexico beaches and coastal waters", "Bycatch, egg harvest history, oil spills, and beach disturbance threaten nesting.", "NOAA"),
    a("Mexican Long-nosed Bat", "Leptonycteris nivalis", "Endangered", "Estimate: fewer than 10,000 mature individuals", "mammal", "Caves and agave landscapes of Mexico and Texas", "Roost disturbance and loss of flowering agave reduce migration food.", "IUCN")
  ],
  "North America-East": [
    a("Red Wolf", "Canis rufus", "Critically endangered", "Estimate: fewer than 25 wild individuals", "mammal", "Coastal North Carolina wetlands and forests", "Hybridization, vehicle strikes, gunshots, and small range threaten recovery.", "USFWS"),
    a("Florida Panther", "Puma concolor coryi", "Endangered", "Estimate: 120 to 230 adults and subadults", "mammal", "South Florida forests, swamps, and ranchlands", "Road mortality, habitat loss, and genetic limits threaten the population.", "USFWS"),
    a("Piping Plover", "Charadrius melodus", "Near threatened; endangered in parts", "Estimate: around 8,000 individuals", "bird", "Atlantic beaches, Great Lakes shores, and prairie wetlands", "Beach development, disturbance, storms, and predators threaten nests.", "USFWS"),
    a("Bog Turtle", "Glyptemys muhlenbergii", "Critically endangered", "Exact count unknown; colonies fragmented", "reptile", "Small spring-fed wetlands in the eastern United States", "Wetland drainage, illegal collection, and invasive plants degrade habitat.", "USFWS"),
    a("Atlantic Sturgeon", "Acipenser oxyrinchus oxyrinchus", "Endangered", "Population depleted; river counts vary", "fish", "Atlantic rivers and coastal waters", "Dams, ship strikes, bycatch, and degraded rivers block recovery.", "NOAA")
  ],
  "North America-West": [
    a("California Condor", "Gymnogyps californianus", "Critically endangered", "Estimate: over 500 total, with wild flocks growing", "bird", "Western cliffs, canyons, and open country", "Lead poisoning, microtrash, and slow breeding still threaten reintroduced birds.", "USFWS"),
    a("Southern Resident Orca", "Orcinus orca", "Endangered", "Estimate: fewer than 80 individuals", "marine", "Pacific Northwest coastal waters", "Chinook salmon decline, vessel noise, and contaminants limit recovery.", "NOAA"),
    a("Sierra Nevada Bighorn Sheep", "Ovis canadensis sierrae", "Endangered", "Estimate: a few hundred individuals", "mammal", "High Sierra Nevada mountain slopes", "Disease, predation, and small isolated herds threaten recovery.", "USFWS"),
    a("Mojave Desert Tortoise", "Gopherus agassizii", "Critically endangered", "Population density declining; exact count uncertain", "reptile", "Mojave Desert scrub and washes", "Habitat loss, vehicles, disease, ravens, and drought pressure adults and young.", "USFWS"),
    a("Salt Marsh Harvest Mouse", "Reithrodontomys raviventris", "Endangered", "Exact count unknown; habitat highly fragmented", "mammal", "San Francisco Bay tidal marshes", "Sea-level rise and marsh development threaten its narrow habitat.", "USFWS")
  ],
  "Oceania-North": [
    a("Goodfellow's Tree Kangaroo", "Dendrolagus goodfellowi", "Endangered", "Declining; exact count unknown", "mammal", "Montane rainforests of New Guinea", "Hunting and forest loss fragment canopy habitat.", "IUCN"),
    a("Matschie's Tree Kangaroo", "Dendrolagus matschiei", "Endangered", "Estimate: fewer than 2,500 mature individuals", "mammal", "Cloud forests of Papua New Guinea", "Hunting, logging, and habitat fragmentation reduce wild groups.", "IUCN"),
    a("Northern River Shark", "Glyphis garricki", "Critically endangered", "Exact count unknown; very rare", "fish", "Muddy rivers and estuaries of northern Australia and New Guinea", "Bycatch, habitat degradation, and small range make it vulnerable.", "IUCN"),
    a("Western Long-beaked Echidna", "Zaglossus bruijnii", "Critically endangered", "Exact count unknown; severely reduced", "mammal", "Montane forests of New Guinea", "Hunting and forest loss threaten this ancient egg-laying mammal.", "EDGE"),
    a("Papuan Eagle", "Harpyopsis novaeguineae", "Vulnerable", "Population declining; exact count unknown", "bird", "Lowland and hill forests of New Guinea", "Forest loss and hunting reduce nesting territories.", "BirdLife")
  ],
  "Oceania-South": [
    a("Kakapo", "Strigops habroptilus", "Critically endangered", "Estimate: a few hundred managed birds", "bird", "Predator-free islands of New Zealand", "Introduced predators and low fertility require intensive conservation management.", "IUCN"),
    a("Tasmanian Devil", "Sarcophilus harrisii", "Endangered", "Population reduced by contagious facial tumor disease", "mammal", "Tasmanian forests, scrub, and farmland edges", "Devil facial tumor disease and roadkill caused severe decline.", "IUCN"),
    a("Orange-bellied Parrot", "Neophema chrysogaster", "Critically endangered", "Estimate: fewer than 100 wild adults in recent years", "bird", "Tasmanian breeding grounds and mainland coastal wetlands", "Tiny population, habitat loss, and migration hazards threaten survival.", "BirdLife"),
    a("Yellow-eyed Penguin", "Megadyptes antipodes", "Endangered", "Estimate: a few thousand individuals", "bird", "New Zealand coastal forests and beaches", "Disease, food shortage, predators, and disturbance reduce breeding success.", "BirdLife"),
    a("Maui Dolphin", "Cephalorhynchus hectori maui", "Critically endangered", "Estimate: about 54 individuals age one or older", "marine", "West coast of New Zealand's North Island", "Fishing nets, disease, and tiny population size threaten extinction.", "Whale & Dolphin Conservation")
  ],
  "Oceania-East": [
    a("Lord Howe Island Stick Insect", "Dryococelus australis", "Critically endangered", "Wild population tiny; captive recovery underway", "insect", "Lord Howe Island group", "Introduced rats erased it from the main island; one tiny refuge remained.", "IUCN"),
    a("Fiji Crested Iguana", "Brachylophus vitiensis", "Critically endangered", "Estimate: several thousand but highly restricted", "reptile", "Dry forests of Fiji islands", "Goats, cats, rats, fire, and forest loss threaten island populations.", "IUCN"),
    a("Polynesian Ground-dove", "Pampusana erythroptera", "Critically endangered", "Estimate: fewer than 200 individuals", "bird", "Remote atolls of French Polynesia", "Invasive rats, cats, habitat loss, and storms threaten tiny island populations.", "BirdLife"),
    a("Tahiti Monarch", "Pomarea nigra", "Critically endangered", "Estimate: fewer than 100 mature individuals", "bird", "Tahiti valleys and forest patches", "Invasive predators and habitat loss leave a very small population.", "BirdLife"),
    a("Leatherback Turtle", "Dermochelys coriacea", "Vulnerable globally; some Pacific populations critically endangered", "Pacific nesting groups severely reduced", "reptile", "Open ocean and tropical nesting beaches", "Bycatch, egg harvest, plastic, and warming beaches threaten nesting success.", "NOAA")
  ],
  "Oceania-West": [
    a("Numbat", "Myrmecobius fasciatus", "Endangered", "Estimate: fewer than 1,000 mature individuals", "mammal", "Eucalypt woodland of Western Australia", "Feral cats, foxes, and habitat loss threaten the remaining wild groups.", "IUCN"),
    a("Western Swamp Tortoise", "Pseudemydura umbrina", "Critically endangered", "Estimate: fewer than 300 wild individuals", "reptile", "Seasonal swamps near Perth", "Wetland loss, drying climate, and tiny range threaten breeding.", "IUCN"),
    a("Gilbert's Potoroo", "Potorous gilbertii", "Critically endangered", "Estimate: fewer than 150 individuals", "mammal", "Dense shrubland in Western Australia", "Wildfire, disease, and tiny range create extreme extinction risk.", "IUCN"),
    a("Woylie", "Bettongia penicillata", "Critically endangered", "Population crashed after earlier recovery", "mammal", "Woodlands and shrublands of southern Australia", "Predation by feral cats and foxes and disease caused steep decline.", "IUCN"),
    a("Carnaby's Black Cockatoo", "Zanda latirostris", "Endangered", "Population declining; exact count uncertain", "bird", "Southwest Australian woodlands and heath", "Loss of nesting hollows and feeding habitat reduces breeding success.", "BirdLife")
  ],
  "South America-North": [
    a("Orinoco Crocodile", "Crocodylus intermedius", "Critically endangered", "Estimate: fewer than 1,500 mature individuals", "reptile", "Orinoco River basin", "Hunting history, egg collection, and river disturbance reduced populations.", "IUCN"),
    a("Cotton-top Tamarin", "Saguinus oedipus", "Critically endangered", "Estimate: around 6,000 individuals", "mammal", "Tropical dry forests of Colombia", "Forest loss and illegal pet trade threaten its tiny range.", "IUCN"),
    a("Harpy Eagle", "Harpia harpyja", "Vulnerable", "Population declining; exact count unknown", "bird", "Large tropical forests", "Deforestation and persecution remove nesting territories.", "BirdLife"),
    a("Giant Otter", "Pteronura brasiliensis", "Endangered", "Estimate: fewer than 5,000 individuals", "mammal", "Amazon and Orinoco rivers, lakes, and wetlands", "River pollution, fishing conflict, mercury, and habitat loss threaten family groups.", "IUCN"),
    a("Antillean Manatee", "Trichechus manatus manatus", "Endangered", "Population fragmented; exact count varies by country", "marine", "Caribbean coasts, rivers, and lagoons", "Boat strikes, hunting history, entanglement, and habitat loss threaten slow breeders.", "IUCN")
  ],
  "South America-South": [
    a("Hooded Grebe", "Podiceps gallardoi", "Critically endangered", "Estimate: fewer than 1,000 individuals", "bird", "Patagonian lakes and winter coasts", "Invasive predators, climate shifts, and wind disturbance threaten breeding lakes.", "BirdLife"),
    a("South Andean Deer", "Hippocamelus bisulcus", "Endangered", "Estimate: fewer than 1,500 individuals", "mammal", "Andean forests and mountain slopes", "Habitat loss, disease from livestock, dogs, and small groups threaten recovery.", "IUCN"),
    a("Magellanic Penguin", "Spheniscus magellanicus", "Least concern but some colonies declining", "Millions remain; regional threats rising", "bird", "Patagonian coasts and South Atlantic waters", "Oil pollution, fisheries, prey shifts, and climate extremes affect colonies.", "BirdLife"),
    a("Southern River Otter", "Lontra provocax", "Endangered", "Exact count unknown; fragmented", "mammal", "Rivers, lakes, and fjords of Chile and Argentina", "Riparian habitat loss, pollution, and hunting history reduced populations.", "IUCN"),
    a("Huemul", "Hippocamelus bisulcus", "Endangered", "Estimate: fewer than 1,500 individuals", "mammal", "Patagonian Andes", "Habitat fragmentation, livestock disease, dogs, and poaching threaten small herds.", "IUCN")
  ],
  "South America-East": [
    a("Golden Lion Tamarin", "Leontopithecus rosalia", "Endangered", "Estimate: around 2,500 wild individuals", "mammal", "Brazilian Atlantic Forest", "Forest fragmentation leaves groups isolated in small reserves.", "IUCN"),
    a("Spix's Macaw", "Cyanopsitta spixii", "Critically endangered", "Wild reintroduction underway after extinction in the wild", "bird", "Caatinga woodland of Brazil", "Trapping and habitat loss erased the original wild population.", "BirdLife"),
    a("Northern Muriqui", "Brachyteles hypoxanthus", "Critically endangered", "Estimate: around 1,000 individuals", "mammal", "Brazilian Atlantic Forest fragments", "Forest loss and hunting left small isolated groups.", "IUCN"),
    a("Maned Three-toed Sloth", "Bradypus torquatus", "Vulnerable", "Population declining; exact count unknown", "mammal", "Atlantic coastal rainforest of Brazil", "Deforestation and fragmented canopy habitat threaten movement and breeding.", "IUCN"),
    a("Brazilian Merganser", "Mergus octosetaceus", "Critically endangered", "Estimate: fewer than 250 mature individuals", "bird", "Clear fast rivers of Brazil and nearby regions", "Dams, pollution, siltation, and disturbance degrade river territories.", "BirdLife")
  ],
  "South America-West": [
    a("Andean Cat", "Leopardus jacobita", "Endangered", "Estimate: fewer than 1,400 mature individuals", "mammal", "High Andes rocky habitats", "Prey decline, mining, hunting, and fragmented mountains threaten the cat.", "IUCN"),
    a("Spectacled Bear", "Tremarctos ornatus", "Vulnerable", "Estimate: fewer than 10,000 mature individuals", "mammal", "Andean cloud forests and paramo", "Forest loss, conflict, and road expansion fragment habitat.", "WWF"),
    a("Galapagos Penguin", "Spheniscus mendiculus", "Endangered", "Estimate: about 1,200 mature individuals", "bird", "Galapagos coastal waters and lava shores", "El Nino events, food shifts, disease, and introduced predators threaten nests.", "BirdLife"),
    a("Marine Iguana", "Amblyrhynchus cristatus", "Vulnerable", "Population fluctuates strongly by island and El Nino events", "reptile", "Galapagos rocky coasts", "Warming events, introduced predators, and pollution affect feeding and nesting.", "IUCN"),
    a("Yellow-tailed Woolly Monkey", "Lagothrix flavicauda", "Critically endangered", "Estimate: fewer than 1,000 mature individuals", "mammal", "Cloud forests of Peru", "Deforestation, hunting, and fragmented canopy corridors threaten groups.", "IUCN")
  ]
};

function a(name, scientific, status, population, type, range, threat, source) {
  const template = animalTemplates[type] || animalTemplates.mammal;
  return {
    id: slug(`${name}-${scientific}`),
    name,
    scientific,
    status,
    population,
    type,
    body: template.body,
    habitat: template.habitat,
    range,
    threat,
    source,
    sourceUrl: sourceLinks[source] || sourceLinks.IUCN,
    videoQuery: `${name} endangered species documentary conservation`,
    videoId: knownVideoIds[slug(`${name}-${scientific}`)] || fallbackConservationVideoId
  };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const regions = continents.flatMap((continent) =>
  directions.map((direction) => {
    const id = `${continent.name}-${direction}`;
    const offset = directionOffsets[direction];
    const antarcticLon = { North: -135, South: -45, East: 45, West: 135 }[direction];
    return {
      id,
      continent: continent.name,
      direction,
      label: `${continent.name} / ${direction}`,
      lat: continent.name === "Antarctica" ? -67 - directions.indexOf(direction) * 4 : continent.lat + offset.lat,
      lon: continent.name === "Antarctica" ? antarcticLon : continent.lon + offset.lon,
      animals: speciesByRegion[id] || []
    };
  })
);

const allAnimals = regions.flatMap((region) =>
  region.animals.map((animal) => ({
    ...animal,
    regionId: region.id,
    regionLabel: region.label,
    continent: region.continent,
    direction: region.direction
  }))
);

const state = {
  activeRegionId: "Africa-North",
  activeAnimalId: speciesByRegion["Africa-North"][0].id,
  imageCache: new Map(),
  videoCache: new Map(),
  language: "en",
  markers: []
};

function t(key) {
  return languageCopy[state.language]?.[key] || languageCopy.en[key] || key;
}

const fallbackSvg = (name) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#62c9d8"/>
          <stop offset="0.58" stop-color="#9fc96f"/>
          <stop offset="1" stop-color="#ffbd68"/>
        </linearGradient>
      </defs>
      <rect width="900" height="620" fill="#071111"/>
      <circle cx="710" cy="130" r="210" fill="url(#g)" opacity="0.34"/>
      <path d="M120 460 C220 300 345 400 420 255 C515 78 670 300 805 150" fill="none" stroke="#f7f1e6" stroke-width="24" opacity="0.28"/>
      <text x="54" y="540" fill="#f7f1e6" font-size="48" font-family="Arial, sans-serif" font-weight="700">${name}</text>
    </svg>
  `)}`;

function createEarthTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  const ocean = ctx.createRadialGradient(1160, 300, 80, 1024, 520, 900);
  ocean.addColorStop(0, "#6ee7f2");
  ocean.addColorStop(0.45, "#13abc8");
  ocean.addColorStop(1, "#015f78");
  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 1;
  drawLand(ctx, -100, 48, 270, 170, -0.12);
  drawLand(ctx, -60, -18, 150, 250, 0.16);
  drawLand(ctx, 20, 4, 190, 260, -0.08);
  drawLand(ctx, 18, 51, 185, 95, 0.05);
  drawLand(ctx, 85, 36, 360, 220, 0.08);
  drawLand(ctx, 138, -25, 190, 130, -0.18);
  drawLand(ctx, 20, -74, 520, 88, 0);
  drawLand(ctx, -42, 72, 120, 72, 0.08);

  const texture = new THREE.CanvasTexture(canvas);
  if ("colorSpace" in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  } else if ("encoding" in texture && THREE.sRGBEncoding) {
    texture.encoding = THREE.sRGBEncoding;
  }
  return texture;
}

function createEarthBumpTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#fff";
  drawLand(ctx, -100, 48, 270, 170, -0.12, true);
  drawLand(ctx, -60, -18, 150, 250, 0.16, true);
  drawLand(ctx, 20, 4, 190, 260, -0.08, true);
  drawLand(ctx, 18, 51, 185, 95, 0.05, true);
  drawLand(ctx, 85, 36, 360, 220, 0.08, true);
  drawLand(ctx, 138, -25, 190, 130, -0.18, true);
  drawLand(ctx, 20, -74, 520, 88, 0, true);
  drawLand(ctx, -42, 72, 120, 72, 0.08, true);
  return new THREE.CanvasTexture(canvas);
}

function drawLand(ctx, lon, lat, width, height, rotation, bumpOnly = false) {
  const x = ((lon + 180) / 360) * 2048;
  const y = ((90 - lat) / 180) * 1024;
  const gradient = ctx.createLinearGradient(x - width, y - height, x + width, y + height);
  gradient.addColorStop(0, "#d7e777");
  gradient.addColorStop(0.42, "#9fca63");
  gradient.addColorStop(1, "#4f8f45");

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.shadowColor = bumpOnly ? "transparent" : "rgba(4, 25, 18, 0.45)";
  ctx.shadowBlur = bumpOnly ? 0 : 16;
  ctx.shadowOffsetX = bumpOnly ? 0 : 10;
  ctx.shadowOffsetY = bumpOnly ? 0 : 14;
  ctx.fillStyle = bumpOnly ? "#fff" : gradient;
  for (let i = 0; i < 5; i += 1) {
    const scale = 1 - i * 0.1;
    ctx.beginPath();
    ctx.ellipse((i - 2) * width * 0.08, Math.sin(i) * height * 0.08, width * scale, height * (0.58 + i * 0.04), 0, 0, Math.PI * 2);
    ctx.fill();
  }
  if (!bumpOnly) {
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = "rgba(244, 255, 202, 0.28)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.ellipse(0, 0, width * 0.92, height * 0.6, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function latLonToVector3(lat, lon, radius = 2.05) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function initGlobe() {
  const container = document.querySelector("#globeCanvas");
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0.45, 6.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin("anonymous");
  const earthMap = loader.load(earthTextureUrls.map);
  const earthSpecular = loader.load(earthTextureUrls.specular);
  const cloudMap = loader.load(earthTextureUrls.clouds);

  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(2, 128, 128),
    new THREE.MeshStandardMaterial({
      map: earthMap,
      roughness: 0.64,
      metalness: 0.02
    })
  );
  globe.rotation.y = -0.62;
  scene.add(globe);

  const oceanSheen = new THREE.Mesh(
    new THREE.SphereGeometry(2.006, 128, 128),
    new THREE.MeshPhongMaterial({
      specularMap: earthSpecular,
      specular: new THREE.Color(0x4fd7e9),
      shininess: 18,
      transparent: true,
      opacity: 0.22
    })
  );
  oceanSheen.rotation.y = globe.rotation.y;
  scene.add(oceanSheen);

  const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(2.035, 128, 128),
    new THREE.MeshLambertMaterial({
      map: cloudMap,
      transparent: true,
      opacity: 0.22,
      depthWrite: false
    })
  );
  clouds.rotation.y = globe.rotation.y;
  scene.add(clouds);

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(2.12, 128, 128),
    new THREE.MeshBasicMaterial({
      color: 0x75d8ea,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    })
  );
  scene.add(atmosphere);

  const markerGroup = new THREE.Group();
  regions.forEach((region) => {
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 20, 20),
      new THREE.MeshBasicMaterial({ color: region.id === state.activeRegionId ? 0xffbd68 : 0xf7f1e6 })
    );
    marker.position.copy(latLonToVector3(region.lat, region.lon));
    marker.userData.regionId = region.id;
    markerGroup.add(marker);
    state.markers.push(marker);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(0.105, 20, 20),
      new THREE.MeshBasicMaterial({
        color: 0x62c9d8,
        transparent: true,
        opacity: 0.18
      })
    );
    halo.position.copy(marker.position);
    halo.userData.regionId = region.id;
    markerGroup.add(halo);
  });
  scene.add(markerGroup);

  scene.add(new THREE.AmbientLight(0xffffff, 0.68));
  const sun = new THREE.DirectionalLight(0xffffff, 1.85);
  sun.position.set(4.5, 4.8, 5);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x62c9d8, 0.72);
  rim.position.set(-4, 1.5, -3);
  scene.add(rim);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.rotateSpeed = 0.65;
  controls.enablePan = false;
  controls.minDistance = 4.2;
  controls.maxDistance = 8.2;

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  renderer.domElement.addEventListener("click", (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(markerGroup.children, false);
    const hit = hits.find((item) => item.object.userData.regionId);
    if (hit) {
      setActiveRegion(hit.object.userData.regionId);
      document.querySelector("#archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener("resize", resize);

  function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.0018;
    oceanSheen.rotation.y = globe.rotation.y;
    clouds.rotation.y += 0.0024;
    atmosphere.rotation.y += 0.0018;
    markerGroup.rotation.y = globe.rotation.y;
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

function renderRegionGrid() {
  const grid = document.querySelector("#regionGrid");
  if (!grid) return;

  grid.innerHTML = regions
    .map(
      (region) => `
        <button class="region-button ${region.id === state.activeRegionId ? "is-active" : ""}" type="button" data-region-id="${region.id}">
          <span>${region.direction}</span>
          <strong>${region.continent}</strong>
        </button>
      `
    )
    .join("");

  grid.querySelectorAll("[data-region-id]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveRegion(button.dataset.regionId);
      document.querySelector("#archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setActiveRegion(regionId) {
  const region = regions.find((item) => item.id === regionId) || regions[0];
  state.activeRegionId = region.id;
  state.activeAnimalId = region.animals[0]?.id || state.activeAnimalId;

  document.querySelector("#activeRegionLabel").textContent = region.label;
  document.querySelector("#activeRegionCount").textContent = `${region.animals.length} ${t("animalsLoaded")}`;
  document.querySelector("#panelKicker").textContent = region.label;
  document.querySelector("#panelTitle").textContent = t("panelTitle");

  state.markers.forEach((marker) => {
    marker.material.color.set(marker.userData.regionId === region.id ? 0xffbd68 : 0xf7f1e6);
  });

  renderRegionGrid();
  renderAnimalCards(region.animals.map((animal) => ({ ...animal, regionLabel: region.label, regionId: region.id })));
}

function renderAnimalCards(records) {
  const grid = document.querySelector("#animalGrid");
  if (!grid) return;

  if (!records.length) {
    grid.innerHTML = '<div class="empty-state">No matching animal records found.</div>';
    return;
  }

  grid.innerHTML = records
    .map(
      (animal) => `
        <article class="animal-card ${animal.id === state.activeAnimalId ? "is-active" : ""}" tabindex="0" data-animal-id="${animal.id}">
          <div class="animal-image">
            <img src="${fallbackSvg(animal.name)}" alt="${animal.name}" data-image-for="${animal.id}">
          </div>
          <div class="animal-card-body">
            <span class="status">${animal.status}</span>
            <h3>${animal.name}</h3>
            <p>${animal.population}</p>
          </div>
        </article>
      `
    )
    .join("");

  grid.querySelectorAll("[data-animal-id]").forEach((card) => {
    const open = () => {
      const animal = findAnimal(card.dataset.animalId);
      if (!animal) return;
      state.activeAnimalId = animal.id;
      card.classList.add("is-moving");
      setTimeout(() => card.classList.remove("is-moving"), 1800);
      renderDetail(animal);
      renderActiveCard();
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  records.forEach((animal) => {
    loadAnimalImages(animal).then((images) => {
      const image = document.querySelector(`[data-image-for="${animal.id}"]`);
      if (image && images[0]) image.src = images[0];
    });
  });

  renderDetail(findAnimal(state.activeAnimalId) || records[0]);
}

function renderActiveCard() {
  document.querySelectorAll(".animal-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.animalId === state.activeAnimalId);
  });
}

function findAnimal(id) {
  return allAnimals.find((animal) => animal.id === id) || regions.flatMap((region) => region.animals).find((animal) => animal.id === id);
}

async function renderDetail(animal) {
  const panel = document.querySelector("#animalDetail");
  if (!panel || !animal) return;

  const images = await loadAnimalImages(animal);
  const hero = images[0] || fallbackSvg(animal.name);
  panel.innerHTML = `
    <div class="detail-hero">
      <img src="${hero}" alt="${animal.name}">
    </div>
    <div class="detail-copy">
      <p class="kicker">${animal.scientific}</p>
      <h2>${animal.name}</h2>
      <p>${animal.threat}</p>
      <div class="detail-facts">
        <div class="fact"><span>${t("population")}</span><strong>${animal.population}</strong></div>
        <div class="fact"><span>${t("where")}</span><strong>${animal.range}</strong></div>
        <div class="fact"><span>${t("body")}</span><strong>${animal.body}</strong></div>
        <div class="fact"><span>${t("habitat")}</span><strong>${animal.habitat}</strong></div>
      </div>
      <div class="detail-actions">
        <button type="button" data-open-video="${animal.id}">${t("openVideo")}</button>
        <button type="button" data-animate-images>${t("animateImages")}</button>
        <a class="source-links-inline" href="${animal.sourceUrl}" target="_blank" rel="noreferrer">${animal.source} ${t("sourceSuffix")}</a>
      </div>
      <div class="detail-gallery" aria-label="Five image panel">
        ${[0, 1, 2, 3, 4]
          .map(
            (index) => `
              <button type="button" aria-label="Open ${animal.name} image ${index + 1}" data-large-image="${images[index] || fallbackSvg(animal.name)}">
                <img src="${images[index] || fallbackSvg(animal.name)}" alt="${animal.name} image ${index + 1}">
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  panel.querySelector("[data-open-video]")?.addEventListener("click", () => openVideo(animal));
  panel.querySelector("[data-animate-images]")?.addEventListener("click", () => animateGallery(panel));
  panel.querySelectorAll(".detail-gallery button").forEach((button) => {
    button.addEventListener("click", () => {
      openImage(button.dataset.largeImage, `${animal.name} image`);
    });
  });
}

function animateGallery(panel) {
  panel.querySelectorAll(".detail-gallery button").forEach((button) => {
    button.classList.add("is-moving");
    setTimeout(() => button.classList.remove("is-moving"), 2200);
  });
}

async function loadAnimalImages(animal) {
  if (state.imageCache.has(animal.id)) return state.imageCache.get(animal.id);

  if (curatedImages[animal.id]) {
    state.imageCache.set(animal.id, curatedImages[animal.id]);
    return curatedImages[animal.id];
  }

  const queries = [animal.scientific, animal.name, `${animal.name} wildlife`];
  const images = [];

  for (const query of queries) {
    if (images.length >= 5) break;
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=30&prop=imageinfo&iiprop=url|mime&iiurlwidth=1100&format=json&origin=*`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const pages = Object.values(data.query?.pages || {});
      pages
        .filter((page) => isAnimalPhotoPage(page, animal))
        .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
        .filter(Boolean)
        .forEach((imageUrl) => {
          if (images.length < 5 && !images.includes(imageUrl) && isAnimalPhotoUrl(imageUrl)) {
            images.push(imageUrl);
          }
        });
    } catch {
      break;
    }
  }

  const foundPhotos = [...images];
  while (images.length < 5) {
    images.push(foundPhotos.length ? foundPhotos[images.length % foundPhotos.length] : fallbackSvg(animal.name));
  }

  state.imageCache.set(animal.id, images);
  return images;
}

function isAnimalPhotoPage(page, animal) {
  const title = `${page.title || ""} ${page.imageinfo?.[0]?.url || ""}`.toLowerCase();
  const mime = page.imageinfo?.[0]?.mime || "";
  return mime.startsWith("image/") && hasAnimalNameMatch(title, animal) && isAnimalPhotoUrl(title);
}

function hasAnimalNameMatch(value, animal) {
  const text = String(value).toLowerCase();
  const nameTokens = [
    ...animal.name.toLowerCase().split(/\s+/),
    ...animal.scientific.toLowerCase().split(/\s+/)
  ].filter((token) => token.length > 3);
  return nameTokens.some((token) => text.includes(token));
}

function isAnimalPhotoUrl(value) {
  const text = decodeURIComponent(String(value)).toLowerCase();
  const blocked = [
    "map",
    "range",
    "distribution",
    "locator",
    "satellite",
    "landsat",
    "airmountains",
    "aerial",
    "diagram",
    "chart",
    "graph",
    "plate",
    "book",
    "animal_kingdom",
    "size",
    "silhouette",
    "skull",
    "skeleton",
    "museum",
    "specimen",
    "statue",
    "ship",
    "boat",
    "warnow",
    "illustration",
    "drawing",
    "painting",
    "stamp",
    "coin",
    "logo",
    "icon",
    ".svg"
  ];
  return !blocked.some((word) => text.includes(word));
}

async function loadAnimalVideo(animal) {
  if (state.videoCache.has(animal.id)) return state.videoCache.get(animal.id);

  const fallback = { type: "motion" };
  state.videoCache.set(animal.id, fallback);
  return fallback;
}

async function openVideo(animal) {
  const modal = document.querySelector("#videoModal");
  const title = document.querySelector("#videoTitle");
  const wrap = document.querySelector("#videoFrameWrap");
  if (!modal || !title || !wrap) return;

  title.textContent = `${animal.name} ${t("videoTitle")}`;
  wrap.innerHTML = '<div class="empty-state">Loading video...</div>';
  modal.hidden = false;

  const video = await loadAnimalVideo(animal);
  if (video.type === "file") {
    wrap.innerHTML = `<video controls autoplay playsinline src="${video.url}"></video>`;
  } else {
    const images = await loadAnimalImages(animal);
    wrap.innerHTML = `
      <div class="motion-video" aria-label="${animal.name} moving image preview">
        ${images
          .map((image, index) => `<img src="${image}" alt="${animal.name} motion frame ${index + 1}" style="--frame-index:${index}">`)
          .join("")}
        <div class="motion-caption">
          <span>${animal.name}</span>
          <strong>${animal.threat}</strong>
        </div>
      </div>
    `;
  }
}

function closeVideo() {
  const modal = document.querySelector("#videoModal");
  const wrap = document.querySelector("#videoFrameWrap");
  if (!modal || !wrap) return;
  wrap.innerHTML = "";
  modal.hidden = true;
}

function openImage(src, titleText) {
  const modal = document.querySelector("#imageModal");
  const title = document.querySelector("#imageTitle");
  const image = document.querySelector("#largeImage");
  if (!modal || !title || !image || !src) return;

  title.textContent = titleText || t("imageTitle");
  image.src = src;
  image.alt = titleText || t("imageTitle");
  modal.hidden = false;
}

function closeImage() {
  const modal = document.querySelector("#imageModal");
  const image = document.querySelector("#largeImage");
  if (!modal || !image) return;
  image.src = "";
  modal.hidden = true;
}

function setupModal() {
  document.querySelector("#closeVideo")?.addEventListener("click", closeVideo);
  document.querySelector("#closeImage")?.addEventListener("click", closeImage);
  document.querySelector("#videoModal")?.addEventListener("click", (event) => {
    if (event.target.id === "videoModal") closeVideo();
  });
  document.querySelector("#imageModal")?.addEventListener("click", (event) => {
    if (event.target.id === "imageModal") closeImage();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVideo();
      closeImage();
    }
  });
}

function setupSearch() {
  const form = document.querySelector(".search-panel");
  const input = document.querySelector("#speciesSearch");
  if (!form || !input) return;

  const run = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      setActiveRegion(state.activeRegionId);
      return;
    }

    const results = allAnimals.filter((animal) =>
      [
        animal.name,
        animal.scientific,
        animal.status,
        animal.population,
        animal.type,
        animal.body,
        animal.habitat,
        animal.range,
        animal.threat,
        animal.regionLabel,
        animal.continent,
        animal.direction
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );

    document.querySelector("#panelKicker").textContent = t("searchButton");
    document.querySelector("#panelTitle").textContent = results.length === 1 ? "1 animal found" : `${results.length} animals found`;
    if (results[0]) state.activeAnimalId = results[0].id;
    renderAnimalCards(results);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    run();
    document.querySelector("#archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  input.addEventListener("input", run);
}

function setupLanguagePreference() {
  const select = document.querySelector("#languagePreference");
  const input = document.querySelector("#speciesSearch");
  if (!select || !input) return;

  const saved = localStorage.getItem("echoes-language") || "en";
  select.value = languageCopy[saved] ? saved : "en";
  state.language = select.value;
  applyLanguage();
  document.documentElement.lang = select.value;
  document.documentElement.dir = select.value === "ar" ? "rtl" : "ltr";

  select.addEventListener("change", () => {
    const language = languageCopy[select.value] ? select.value : "en";
    localStorage.setItem("echoes-language", language);
    state.language = language;
    applyLanguage();
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  });
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  const input = document.querySelector("#speciesSearch");
  if (input) input.placeholder = t("searchPlaceholder");

  const activeRegion = regions.find((region) => region.id === state.activeRegionId);
  if (activeRegion) {
    document.querySelector("#activeRegionCount").textContent = `${activeRegion.animals.length} ${t("animalsLoaded")}`;
    document.querySelector("#panelTitle").textContent = t("panelTitle");
  }

  const activeAnimal = findAnimal(state.activeAnimalId);
  if (activeAnimal) renderDetail(activeAnimal);
}

function setupLogoFallback() {
  const logo = document.querySelector(".brand-mark img");
  if (!logo) return;
  logo.addEventListener("error", () => {
    logo.removeAttribute("src");
    logo.style.display = "none";
  });
}

renderRegionGrid();
setActiveRegion(state.activeRegionId);
setupSearch();
setupModal();
setupLanguagePreference();
setupLogoFallback();
initGlobe();
