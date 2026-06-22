const backgrounds = [
  "https://i.pinimg.com/originals/4c/14/31/4c14316aed37ba7e2db05f9e08ae6044.jpg",
  "https://i.pinimg.com/originals/66/91/01/6691013c189b4513472a76d777c1c478.jpg",
  "https://i.pinimg.com/originals/4b/95/37/4b95379b8c9729090692fc0120409c6b.jpg",
  "https://i.pinimg.com/originals/d9/fe/94/d9fe94b7b8fe9e049aea30ed0eee6949.jpg",
  "https://i.pinimg.com/originals/fd/55/5e/fd555eeb95104e10a87a49a8b381e0a3.png"
];

const translations = {
  en: {
    "language.label": "Language",
    "nav.home": "Home",
    "nav.archive": "Archive",
    "nav.why": "Why it matters",
    "hero.eyebrow": "Living memory capsule",
    "hero.title": "The sea is almost silent.",
    "hero.text": "A focused archive for the vaquita, the rare porpoise surviving only in Mexico's northern Gulf of California.",
    "hero.primary": "Enter the archive",
    "hero.secondary": "See the collapse",
    "status.label": "Current signal",
    "status.count": "About 10 remain",
    "status.note": "Critically endangered marine mammal",
    "archive.eyebrow": "Endangered species",
    "archive.title": "Vaquita memory record",
    "species.title": "The rarest marine mammal on Earth",
    "species.body": "The vaquita was first identified in 1958. In a little more than half a century, it has been pushed to the edge of extinction by accidental capture in fishing nets.",
    "facts.status.label": "Status",
    "facts.status.value": "Critically endangered",
    "facts.population.label": "Population",
    "facts.population.value": "About 10 individuals",
    "facts.habitat.label": "Habitat",
    "facts.habitat.value": "Northern Gulf of California",
    "facts.size.label": "Size",
    "facts.size.value": "Up to 5 feet, 120 pounds",
    "threat.eyebrow": "Reason for extinction risk",
    "threat.title": "The danger is not hunting. It is entanglement.",
    "threat.body": "Vaquitas drown after becoming trapped in gillnets set for other marine animals, especially totoaba. Illegal totoaba fishing grew because of demand for swim bladders, and that trade now drives the vaquita's collapse.",
    "timeline.eyebrow": "Extinction pressure",
    "timeline.title": "How a species becomes a whisper",
    "timeline.item1": "The vaquita is formally discovered by science.",
    "timeline.item2": "Gillnet entanglement pushes the species down to dangerously low levels.",
    "timeline.item3": "WWF calls for strong enforcement of a gillnet ban across the full vaquita range.",
    "timeline.item4": "Only around 10 are estimated to remain, so every surviving animal matters.",
    "why.eyebrow": "Why this archive exists",
    "why.title": "Extinction should not happen quietly.",
    "why.body": "This first version focuses on one animal so the story feels human-sized. Later, the same structure can hold other endangered species, extinct species, lost festivals, vanishing traditions, and the reasons they disappeared.",
    "why.source": "Source: World Wildlife Fund vaquita profile"
  },
  es: {
    "language.label": "Idioma",
    "nav.home": "Inicio",
    "nav.archive": "Archivo",
    "nav.why": "Por que importa",
    "hero.eyebrow": "Capsula de memoria viva",
    "hero.title": "El mar esta casi en silencio.",
    "hero.text": "Un archivo enfocado en la vaquita, la rara marsopa que solo sobrevive en el norte del Golfo de California, Mexico.",
    "hero.primary": "Entrar al archivo",
    "hero.secondary": "Ver el colapso",
    "status.label": "Senal actual",
    "status.count": "Quedan unas 10",
    "status.note": "Mamifero marino en peligro critico",
    "archive.eyebrow": "Especie en peligro",
    "archive.title": "Registro de memoria de la vaquita",
    "species.title": "El mamifero marino mas raro de la Tierra",
    "species.body": "La vaquita fue identificada por primera vez en 1958. En poco mas de medio siglo, la captura accidental en redes de pesca la empujo al borde de la extincion.",
    "facts.status.label": "Estado",
    "facts.status.value": "En peligro critico",
    "facts.population.label": "Poblacion",
    "facts.population.value": "Unos 10 individuos",
    "facts.habitat.label": "Habitat",
    "facts.habitat.value": "Norte del Golfo de California",
    "facts.size.label": "Tamano",
    "facts.size.value": "Hasta 5 pies y 120 libras",
    "threat.eyebrow": "Razon del riesgo",
    "threat.title": "El peligro no es la caza. Es el enredo.",
    "threat.body": "Las vaquitas se ahogan al quedar atrapadas en redes de enmalle usadas para otros animales marinos, especialmente totoaba. La pesca ilegal de totoaba crecio por la demanda de buches natatorios, y ese comercio impulsa el colapso de la vaquita.",
    "timeline.eyebrow": "Presion de extincion",
    "timeline.title": "Como una especie se vuelve un susurro",
    "timeline.item1": "La ciencia descubre formalmente la vaquita.",
    "timeline.item2": "El enredo en redes reduce la especie a niveles peligrosamente bajos.",
    "timeline.item3": "WWF pide aplicar con fuerza la prohibicion de redes de enmalle en todo su habitat.",
    "timeline.item4": "Se estima que quedan alrededor de 10, por eso cada animal vivo importa.",
    "why.eyebrow": "Por que existe este archivo",
    "why.title": "La extincion no deberia pasar en silencio.",
    "why.body": "Esta primera version se centra en un animal para que la historia se sienta cercana. Mas adelante, la misma estructura puede guardar otras especies en peligro, especies extintas, festivales perdidos, tradiciones que desaparecen y las razones de su perdida.",
    "why.source": "Fuente: perfil de la vaquita de World Wildlife Fund"
  },
  fr: {
    "language.label": "Langue",
    "nav.home": "Accueil",
    "nav.archive": "Archive",
    "nav.why": "Pourquoi",
    "hero.eyebrow": "Capsule de memoire vivante",
    "hero.title": "La mer est presque silencieuse.",
    "hero.text": "Une archive consacree au vaquita, le rare marsouin qui ne survit que dans le nord du golfe de Californie, au Mexique.",
    "hero.primary": "Entrer dans l'archive",
    "hero.secondary": "Voir l'effondrement",
    "status.label": "Signal actuel",
    "status.count": "Environ 10 restent",
    "status.note": "Mammifere marin en danger critique",
    "archive.eyebrow": "Espece menacee",
    "archive.title": "Memoire du vaquita",
    "species.title": "Le mammifere marin le plus rare sur Terre",
    "species.body": "Le vaquita a ete identifie en 1958. En un peu plus d'un demi-siecle, les captures accidentelles dans les filets de peche l'ont pousse au bord de l'extinction.",
    "facts.status.label": "Statut",
    "facts.status.value": "En danger critique",
    "facts.population.label": "Population",
    "facts.population.value": "Environ 10 individus",
    "facts.habitat.label": "Habitat",
    "facts.habitat.value": "Nord du golfe de Californie",
    "facts.size.label": "Taille",
    "facts.size.value": "Jusqu'a 5 pieds, 120 livres",
    "threat.eyebrow": "Raison du risque",
    "threat.title": "Le danger n'est pas la chasse. C'est l'enchevetrement.",
    "threat.body": "Les vaquitas se noient lorsqu'ils sont pieges dans des filets maillants poses pour d'autres animaux marins, surtout le totoaba. La peche illegale du totoaba a augmente a cause de la demande pour sa vessie natatoire, et ce commerce accelere l'effondrement du vaquita.",
    "timeline.eyebrow": "Pression d'extinction",
    "timeline.title": "Comment une espece devient un murmure",
    "timeline.item1": "Le vaquita est officiellement decouvert par la science.",
    "timeline.item2": "Les filets maillants font chuter l'espece a des niveaux dangereux.",
    "timeline.item3": "WWF demande une forte application de l'interdiction des filets maillants dans toute son aire.",
    "timeline.item4": "On estime qu'il en reste environ 10, donc chaque animal compte.",
    "why.eyebrow": "Pourquoi cette archive existe",
    "why.title": "L'extinction ne devrait pas arriver en silence.",
    "why.body": "Cette premiere version se concentre sur un animal pour rendre l'histoire concrete. Plus tard, la meme structure pourra accueillir d'autres especes menacees, des especes eteintes, des festivals perdus, des traditions qui disparaissent et les raisons de leur disparition.",
    "why.source": "Source : profil du vaquita par World Wildlife Fund"
  },
  hi: {
    "language.label": "भाषा",
    "nav.home": "होम",
    "nav.archive": "संग्रह",
    "nav.why": "क्यों जरूरी",
    "hero.eyebrow": "जीवित स्मृति कैप्सूल",
    "hero.title": "समुद्र लगभग चुप है।",
    "hero.text": "वैक्विटा के लिए एक केंद्रित संग्रह, जो मेक्सिको के उत्तरी गल्फ ऑफ कैलिफोर्निया में बची हुई दुर्लभ पोर्पॉइज है।",
    "hero.primary": "संग्रह खोलें",
    "hero.secondary": "गिरावट देखें",
    "status.label": "वर्तमान संकेत",
    "status.count": "लगभग 10 बचे हैं",
    "status.note": "अत्यंत संकटग्रस्त समुद्री स्तनपायी",
    "archive.eyebrow": "संकटग्रस्त प्रजाति",
    "archive.title": "वैक्विटा स्मृति रिकॉर्ड",
    "species.title": "धरती का सबसे दुर्लभ समुद्री स्तनपायी",
    "species.body": "वैक्विटा की पहचान पहली बार 1958 में हुई। आधी सदी से थोड़े अधिक समय में, मछली पकड़ने के जालों में गलती से फंसने के कारण यह विलुप्ति के कगार पर पहुंच गई।",
    "facts.status.label": "स्थिति",
    "facts.status.value": "अत्यंत संकटग्रस्त",
    "facts.population.label": "संख्या",
    "facts.population.value": "लगभग 10",
    "facts.habitat.label": "आवास",
    "facts.habitat.value": "उत्तरी गल्फ ऑफ कैलिफोर्निया",
    "facts.size.label": "आकार",
    "facts.size.value": "5 फीट और 120 पाउंड तक",
    "threat.eyebrow": "विलुप्ति जोखिम का कारण",
    "threat.title": "खतरा शिकार नहीं है। खतरा जाल में फंसना है।",
    "threat.body": "वैक्विटा गिलनेट में फंसकर डूब जाती हैं, जो खासकर टोटोआबा जैसी दूसरी समुद्री प्रजातियों के लिए लगाए जाते हैं। टोटोआबा के स्विम ब्लैडर की मांग ने अवैध मछली पकड़ने को बढ़ाया, और यही व्यापार वैक्विटा की गिरावट को तेज कर रहा है।",
    "timeline.eyebrow": "विलुप्ति दबाव",
    "timeline.title": "कैसे एक प्रजाति फुसफुसाहट बन जाती है",
    "timeline.item1": "विज्ञान वैक्विटा को औपचारिक रूप से पहचानता है।",
    "timeline.item2": "गिलनेट में फंसने से संख्या खतरनाक स्तर तक गिरती है।",
    "timeline.item3": "WWF पूरे आवास में गिलनेट प्रतिबंध को सख्ती से लागू करने की मांग करता है।",
    "timeline.item4": "लगभग 10 बचे होने का अनुमान है, इसलिए हर जीवित वैक्विटा महत्वपूर्ण है।",
    "why.eyebrow": "यह संग्रह क्यों है",
    "why.title": "विलुप्ति चुपचाप नहीं होनी चाहिए।",
    "why.body": "पहला संस्करण एक जानवर पर केंद्रित है ताकि कहानी करीब महसूस हो। बाद में यही संरचना अन्य संकटग्रस्त प्रजातियों, विलुप्त प्रजातियों, खोए हुए त्योहारों, मिटती परंपराओं और उनके गायब होने के कारणों को संभाल सकती है।",
    "why.source": "स्रोत: World Wildlife Fund वैक्विटा प्रोफाइल"
  },
  ar: {
    "language.label": "اللغة",
    "nav.home": "الرئيسية",
    "nav.archive": "الأرشيف",
    "nav.why": "الأهمية",
    "hero.eyebrow": "كبسولة ذاكرة حية",
    "hero.title": "البحر يكاد يصمت.",
    "hero.text": "أرشيف مركز عن الفاكيتا، خنزير البحر النادر الذي يعيش فقط في شمال خليج كاليفورنيا في المكسيك.",
    "hero.primary": "ادخل الأرشيف",
    "hero.secondary": "شاهد الانهيار",
    "status.label": "الإشارة الحالية",
    "status.count": "بقي حوالي 10",
    "status.note": "ثديي بحري مهدد بشدة",
    "archive.eyebrow": "نوع مهدد",
    "archive.title": "سجل ذاكرة الفاكيتا",
    "species.title": "أندر ثديي بحري على الأرض",
    "species.body": "تم التعرف على الفاكيتا لأول مرة عام 1958. خلال أكثر قليلا من نصف قرن، دفعتها المصائد العرضية في شباك الصيد إلى حافة الانقراض.",
    "facts.status.label": "الحالة",
    "facts.status.value": "مهدد بخطر حرج",
    "facts.population.label": "العدد",
    "facts.population.value": "حوالي 10 أفراد",
    "facts.habitat.label": "الموطن",
    "facts.habitat.value": "شمال خليج كاليفورنيا",
    "facts.size.label": "الحجم",
    "facts.size.value": "حتى 5 أقدام و120 رطلا",
    "threat.eyebrow": "سبب خطر الانقراض",
    "threat.title": "الخطر ليس الصيد المباشر. الخطر هو التشابك.",
    "threat.body": "تغرق الفاكيتا عندما تعلق في الشباك الخيشومية الموضوعة لكائنات بحرية أخرى، خصوصا التوتوابا. ازداد الصيد غير القانوني للتوتوابا بسبب الطلب على مثانتها العائمة، وهذا الاتجار يقود انهيار الفاكيتا.",
    "timeline.eyebrow": "ضغط الانقراض",
    "timeline.title": "كيف يتحول نوع إلى همسة",
    "timeline.item1": "تم اكتشاف الفاكيتا علميا بشكل رسمي.",
    "timeline.item2": "التشابك في الشباك يدفع النوع إلى مستويات خطيرة.",
    "timeline.item3": "يدعو WWF إلى تطبيق قوي لحظر الشباك في كامل نطاق الفاكيتا.",
    "timeline.item4": "يقدر أن حوالي 10 فقط بقوا، لذلك كل حيوان حي مهم.",
    "why.eyebrow": "لماذا يوجد هذا الأرشيف",
    "why.title": "لا يجب أن يحدث الانقراض بصمت.",
    "why.body": "يركز الإصدار الأول على حيوان واحد حتى تبدو القصة قريبة. لاحقا يمكن للبنية نفسها أن تحفظ أنواعا مهددة أخرى، وأنواعا منقرضة، ومهرجانات مفقودة، وتقاليد تختفي، وأسباب اختفائها.",
    "why.source": "المصدر: ملف الفاكيتا من World Wildlife Fund"
  },
  zh: {
    "language.label": "语言",
    "nav.home": "首页",
    "nav.archive": "档案",
    "nav.why": "意义",
    "hero.eyebrow": "活的记忆胶囊",
    "hero.title": "海几乎沉默了。",
    "hero.text": "一个专注于小头鼠海豚的档案。它只生活在墨西哥加利福尼亚湾北部。",
    "hero.primary": "进入档案",
    "hero.secondary": "查看衰退",
    "status.label": "当前信号",
    "status.count": "约剩10只",
    "status.note": "极危海洋哺乳动物",
    "archive.eyebrow": "濒危物种",
    "archive.title": "小头鼠海豚记忆记录",
    "species.title": "地球上最稀有的海洋哺乳动物",
    "species.body": "小头鼠海豚在1958年首次被科学确认。半个多世纪后，它因误入渔网而被推到灭绝边缘。",
    "facts.status.label": "状态",
    "facts.status.value": "极危",
    "facts.population.label": "数量",
    "facts.population.value": "约10只",
    "facts.habitat.label": "栖息地",
    "facts.habitat.value": "加利福尼亚湾北部",
    "facts.size.label": "体型",
    "facts.size.value": "最长约5英尺，重约120磅",
    "threat.eyebrow": "灭绝风险原因",
    "threat.title": "危险不是捕猎，而是缠网。",
    "threat.body": "小头鼠海豚会被捕捉其他海洋动物的刺网缠住并溺死，尤其是与非法捕捞石首鱼有关。对鱼鳔的需求推动了非法贸易，也推动了小头鼠海豚的崩塌。",
    "timeline.eyebrow": "灭绝压力",
    "timeline.title": "一个物种如何变成低语",
    "timeline.item1": "小头鼠海豚被科学正式发现。",
    "timeline.item2": "刺网缠绕使数量降到危险水平。",
    "timeline.item3": "WWF呼吁在整个栖息范围内严格执行刺网禁令。",
    "timeline.item4": "估计只剩约10只，所以每一只幸存个体都重要。",
    "why.eyebrow": "这个档案为何存在",
    "why.title": "灭绝不该悄悄发生。",
    "why.body": "第一版只聚焦一种动物，让故事更具体。以后，同一结构可以保存其他濒危物种、已灭绝物种、消失的节日、正在消失的传统，以及它们消失的原因。",
    "why.source": "来源：World Wildlife Fund 小头鼠海豚资料"
  },
  ja: {
    "language.label": "言語",
    "nav.home": "ホーム",
    "nav.archive": "アーカイブ",
    "nav.why": "大切な理由",
    "hero.eyebrow": "生きた記憶カプセル",
    "hero.title": "海はほとんど沈黙している。",
    "hero.text": "メキシコのカリフォルニア湾北部だけに残る希少なネズミイルカ、バキータのための集中的な記録です。",
    "hero.primary": "アーカイブへ",
    "hero.secondary": "減少を見る",
    "status.label": "現在の信号",
    "status.count": "残り約10頭",
    "status.note": "深刻な絶滅危機にある海洋哺乳類",
    "archive.eyebrow": "絶滅危惧種",
    "archive.title": "バキータ記憶記録",
    "species.title": "地球で最も希少な海洋哺乳類",
    "species.body": "バキータは1958年に初めて確認されました。半世紀少しで、漁網への混獲によって絶滅の瀬戸際まで追い込まれました。",
    "facts.status.label": "状況",
    "facts.status.value": "深刻な絶滅危機",
    "facts.population.label": "個体数",
    "facts.population.value": "約10頭",
    "facts.habitat.label": "生息地",
    "facts.habitat.value": "カリフォルニア湾北部",
    "facts.size.label": "大きさ",
    "facts.size.value": "最大5フィート、120ポンド",
    "threat.eyebrow": "絶滅リスクの理由",
    "threat.title": "危険は狩猟ではなく、網に絡まることです。",
    "threat.body": "バキータは、特にトトアバなど他の海洋生物を狙った刺し網に絡まり溺れてしまいます。トトアバの浮き袋への需要が違法漁業を増やし、バキータの減少を加速させています。",
    "timeline.eyebrow": "絶滅への圧力",
    "timeline.title": "種がささやきになるまで",
    "timeline.item1": "バキータが科学的に正式確認されます。",
    "timeline.item2": "刺し網への絡まりで個体数が危険な水準まで低下します。",
    "timeline.item3": "WWFは全生息域で刺し網禁止を厳しく実施するよう求めます。",
    "timeline.item4": "残りは約10頭と推定され、すべての個体が重要です。",
    "why.eyebrow": "この記録がある理由",
    "why.title": "絶滅は静かに起きてはいけない。",
    "why.body": "最初の版では一つの動物に集中し、物語を身近に感じられるようにします。将来は同じ構造で、他の絶滅危惧種、絶滅種、失われた祭り、消えゆく伝統、その理由を保存できます。",
    "why.source": "出典: World Wildlife Fund バキータ資料"
  }
};

function pickFreshBackground() {
  const previous = Number.parseInt(localStorage.getItem("echoes-background-index") || "-1", 10);
  const choices = backgrounds
    .map((url, index) => ({ url, index }))
    .filter((item) => item.index !== previous);
  const next = choices[Math.floor(Math.random() * choices.length)] || { url: backgrounds[0], index: 0 };

  localStorage.setItem("echoes-background-index", String(next.index));
  document.documentElement.style.setProperty("--home-bg", `url("${next.url}")`);
}

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";
  const copy = translations[selected];

  document.documentElement.lang = selected;
  document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = copy[key] || translations.en[key] || element.textContent;
  });

  localStorage.setItem("echoes-language", selected);
}

function setupLanguagePreference() {
  const select = document.querySelector("#languagePreference");
  if (!select) return;

  const saved = localStorage.getItem("echoes-language") || "en";
  select.value = translations[saved] ? saved : "en";
  applyLanguage(select.value);

  select.addEventListener("change", () => applyLanguage(select.value));
}

function protectBrokenImages() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesVaqui.2e16d0ba.fill-375x500.format-webp.webp";
      image.alt = "Vaquita image from World Wildlife Fund";
    });
  });
}

pickFreshBackground();
setupLanguagePreference();
protectBrokenImages();
