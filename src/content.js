// All site copy lives here, keyed by language (en / fr / ar).

export const PROFILE = {
  name: "Alaa Eddine Mouate",
  email: "eddine.alaa.mouate@gmail.com",
  phone: "+212 777 127 109",
  phoneHref: "tel:+212777127109",
  github: "https://github.com/MOUATEAlaaeddine",
  linkedin: "https://www.linkedin.com/in/alaa-eddine-mouate-9b4ba9271/",
  cv: "/cv/CV_Alaa_Eddine_Mouate.pdf",
  photo: "/img/alaa.jpg",
};

export const LANGS = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "fr", label: "FR", dir: "ltr" },
  { code: "ar", label: "ع", dir: "rtl" },
];

export const UI = {
  en: {
    nav: { about: "About", work: "Work", journey: "Journey", contact: "Contact" },
    loader: { welcome: "Welcome", loading: "Loading" },
    hero: {
      hello: "Hello! I'm",
      name: ["ALAA EDDINE", "MOUATE"],
      role1: "Software",
      role2: "& AI Engineer",
      status: "Open to a 4–6 month final-year internship (PFE) · Jan 2027",
      cta: "See my work",
      cv: "Download CV",
    },
    about: {
      title: "About me",
      text: "I'm a master's student in Information Systems Engineering at the Faculty of Sciences Semlalia, Cadi Ayyad University, in Marrakech. I design and ship complete applications, from the React interface to the Python or Java backend, and I build AI into them where it actually helps people: LLM assistants, NLP, recommender systems and machine learning models. My networking and systems background means I also care about what happens after the code is written.",
    },
    what: {
      title1: "What",
      title2: "I do",
      items: [
        {
          title: "Software Engineering",
          sub: "Full-stack web apps",
          text: "End-to-end products: modular REST APIs, real-time features with WebSockets, secure auth (OAuth 2.0, JWT, RBAC) and clean, responsive interfaces.",
        },
        {
          title: "AI & Data",
          sub: "Intelligent features",
          text: "LLM-powered assistants over documents, recommender systems, CV analysis with NLP, and classic ML pipelines from preprocessing to evaluation.",
        },
      ],
      skills: "Skillset & tools",
    },
    journey: { title1: "My", title2: "journey" },
    work: {
      title1: "Selected",
      title2: "work",
      code: "Source code",
      gallery: "View screenshots",
      team: "Team",
      close: "Close",
      more: "All repositories on GitHub",
    },
    stack: { title: "Tech stack" },
    certs: { title: "Certifications", langs: "Languages" },
    contact: {
      title1: "Let's",
      title2: "work together",
      text: "I'm looking for a 4–6 month final-year internship starting January 2027 in software engineering, full-stack development or AI. Have a role in mind, or just want to talk? Reach out.",
      email: "Email",
      phone: "Phone",
      social: "Social",
      copy: "Copy",
      copied: "Copied!",
      footer: "Designed & built by",
    },
  },
  fr: {
    nav: { about: "À propos", work: "Projets", journey: "Parcours", contact: "Contact" },
    loader: { welcome: "Bienvenue", loading: "Chargement" },
    hero: {
      hello: "Bonjour ! Je suis",
      name: ["ALAA EDDINE", "MOUATE"],
      role1: "Ingénieur",
      role2: "Logiciel & IA",
      status: "Disponible pour un stage de fin d'études (PFE) de 4 à 6 mois · janv. 2027",
      cta: "Voir mes projets",
      cv: "Télécharger le CV",
    },
    about: {
      title: "À propos",
      text: "Étudiant en Master Ingénierie des Systèmes d'Information à la Faculté des Sciences Semlalia, Université Cadi Ayyad, à Marrakech. Je conçois et développe des applications complètes, de l'interface React au backend Python ou Java, et j'y intègre l'IA là où elle apporte une vraie valeur : assistants LLM, NLP, systèmes de recommandation et modèles de machine learning. Mon parcours en réseaux et systèmes me pousse aussi à penser à ce qui se passe une fois le code écrit.",
    },
    what: {
      title1: "Ce que",
      title2: "je fais",
      items: [
        {
          title: "Génie logiciel",
          sub: "Applications web full stack",
          text: "Des produits de bout en bout : API REST modulaires, temps réel avec WebSockets, authentification sécurisée (OAuth 2.0, JWT, RBAC) et interfaces propres et responsives.",
        },
        {
          title: "IA & Données",
          sub: "Fonctionnalités intelligentes",
          text: "Assistants LLM sur documents, systèmes de recommandation, analyse de CV par NLP, et pipelines de machine learning du prétraitement à l'évaluation.",
        },
      ],
      skills: "Compétences & outils",
    },
    journey: { title1: "Mon", title2: "parcours" },
    work: {
      title1: "Projets",
      title2: "choisis",
      code: "Code source",
      gallery: "Voir les captures",
      team: "Équipe",
      close: "Fermer",
      more: "Tous les dépôts sur GitHub",
    },
    stack: { title: "Stack technique" },
    certs: { title: "Certifications", langs: "Langues" },
    contact: {
      title1: "Travaillons",
      title2: "ensemble",
      text: "Je recherche un stage de fin d'études de 4 à 6 mois à partir de janvier 2027, en génie logiciel, développement full stack ou IA. Une offre en tête, ou simplement envie d'échanger ? Contactez-moi.",
      email: "Email",
      phone: "Téléphone",
      social: "Réseaux",
      copy: "Copier",
      copied: "Copié !",
      footer: "Conçu & développé par",
    },
  },
  ar: {
    nav: { about: "نبذة", work: "المشاريع", journey: "المسار", contact: "تواصل" },
    loader: { welcome: "مرحبا", loading: "جارٍ التحميل" },
    hero: {
      hello: "مرحبا! أنا",
      name: ["علاء الدين", "موات"],
      role1: "مهندس",
      role2: "برمجيات وذكاء اصطناعي",
      status: "متاح لتدريب نهاية الدراسة (PFE) لمدة 4 إلى 6 أشهر · يناير 2027",
      cta: "شاهد أعمالي",
      cv: "تحميل السيرة الذاتية",
    },
    about: {
      title: "نبذة عني",
      text: "طالب ماستر في هندسة نظم المعلومات بكلية العلوم السملالية، جامعة القاضي عياض بمراكش. أصمم وأطور تطبيقات متكاملة، من واجهة React إلى الخادم بلغة Python أو Java، وأدمج فيها الذكاء الاصطناعي حيث يضيف قيمة حقيقية: مساعدات قائمة على النماذج اللغوية الكبيرة، معالجة اللغة الطبيعية، أنظمة التوصية ونماذج التعلم الآلي. خلفيتي في الشبكات والأنظمة تجعلني أهتم أيضا بما يحدث بعد كتابة الكود.",
    },
    what: {
      title1: "ماذا",
      title2: "أفعل",
      items: [
        {
          title: "هندسة البرمجيات",
          sub: "تطبيقات ويب متكاملة",
          text: "منتجات من البداية إلى النهاية: واجهات REST منظمة، ميزات فورية عبر WebSockets، مصادقة آمنة (OAuth 2.0، JWT، RBAC) وواجهات أنيقة ومتجاوبة.",
        },
        {
          title: "الذكاء الاصطناعي والبيانات",
          sub: "ميزات ذكية",
          text: "مساعدات ذكية تعمل على المستندات، أنظمة توصية، تحليل السير الذاتية بمعالجة اللغة الطبيعية، ومسارات تعلم آلي من المعالجة الأولية إلى التقييم.",
        },
      ],
      skills: "المهارات والأدوات",
    },
    journey: { title1: "مساري", title2: "" },
    work: {
      title1: "مشاريع",
      title2: "مختارة",
      code: "الكود المصدري",
      gallery: "عرض الصور",
      team: "فريق",
      close: "إغلاق",
      more: "جميع المستودعات على GitHub",
    },
    stack: { title: "التقنيات" },
    certs: { title: "الشهادات", langs: "اللغات" },
    contact: {
      title1: "لنعمل",
      title2: "معا",
      text: "أبحث عن تدريب نهاية الدراسة لمدة 4 إلى 6 أشهر ابتداء من يناير 2027 في هندسة البرمجيات أو التطوير المتكامل أو الذكاء الاصطناعي. لديك فرصة أو ترغب في الحديث؟ تواصل معي.",
      email: "البريد",
      phone: "الهاتف",
      social: "الشبكات",
      copy: "نسخ",
      copied: "تم النسخ!",
      footer: "تصميم وتطوير",
    },
  },
};

export const JOURNEY = [
  {
    date: "2025 — 2027",
    title: {
      en: "Master's in Information Systems Engineering (ISI)",
      fr: "Master Ingénierie des Systèmes d'Information (ISI)",
      ar: "ماستر هندسة نظم المعلومات (ISI)",
    },
    org: {
      en: "Faculty of Sciences Semlalia · Cadi Ayyad University, Marrakech",
      fr: "Faculté des Sciences Semlalia · Université Cadi Ayyad, Marrakech",
      ar: "كلية العلوم السملالية · جامعة القاضي عياض، مراكش",
    },
  },
  {
    date: { en: "Dec 2025", fr: "Déc. 2025", ar: "دجنبر 2025" },
    award: true,
    title: {
      en: "“Prototype Promoters” prize — SportTech Hackathon",
      fr: "Prix « Prototype Promoters » — SportTech Hackathon",
      ar: "جائزة «Prototype Promoters» — هاكاثون SportTech",
    },
    org: {
      en: "FST Marrakech × Cité de l'Innovation · RehabMate, a rehab app for injured athletes, built in a team of 3 from prototype to pitch",
      fr: "FST Marrakech × Cité de l'Innovation · RehabMate, application de rééducation pour sportifs blessés, en équipe de 3 du prototype au pitch",
      ar: "FST مراكش × مدينة الابتكار · RehabMate، تطبيق لإعادة تأهيل الرياضيين المصابين، ضمن فريق من 3 من النموذج الأولي إلى العرض النهائي",
    },
  },
  {
    date: "2025",
    title: {
      en: "Professional Bachelor's — Systems & Network Engineering (ISIR)",
      fr: "Licence Professionnelle — Ingénierie des Systèmes Informatiques et Réseaux (ISIR)",
      ar: "إجازة مهنية — هندسة الأنظمة المعلوماتية والشبكات (ISIR)",
    },
    org: {
      en: "École Supérieure de Technologie, Safi",
      fr: "École Supérieure de Technologie, Safi",
      ar: "المدرسة العليا للتكنولوجيا، آسفي",
    },
  },
  {
    date: "2022 — 2023",
    title: {
      en: "IT Intern — Administration Department",
      fr: "Stagiaire en informatique — Service Administration",
      ar: "متدرب في المعلوميات — مصلحة الإدارة",
    },
    org: {
      en: "OCP Safi · User support, workstation setup, IT fleet maintenance and first-level network incidents (3 months)",
      fr: "OCP Safi · Assistance technique, configuration des postes, maintenance du parc et incidents réseau de premier niveau (3 mois)",
      ar: "OCP آسفي · الدعم التقني، إعداد الحواسيب، صيانة الأجهزة ومعالجة أعطال الشبكة من المستوى الأول (3 أشهر)",
    },
  },
  {
    date: "2023",
    title: {
      en: "University Diploma of Technology (DUT) — Computer Engineering",
      fr: "Diplôme Universitaire de Technologie (DUT) — Génie Informatique",
      ar: "دبلوم جامعي للتكنولوجيا (DUT) — الهندسة المعلوماتية",
    },
    org: {
      en: "École Supérieure de Technologie, Safi",
      fr: "École Supérieure de Technologie, Safi",
      ar: "المدرسة العليا للتكنولوجيا، آسفي",
    },
  },
];

const ss = (n) => `/img/studysphere/${String(n).padStart(2, "0")}.jpg`;
const sf = (n) => `/img/stagefacile/${String(n).padStart(2, "0")}.jpg`;

export const PROJECTS = [
  {
    id: "studysphere",
    name: "StudySphere",
    year: "2026",
    accent: "#a87cff",
    repo: "https://github.com/MOUATEAlaaeddine/StudySphere",
    team: 3,
    cover: ss(1),
    gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(ss),
    tags: ["React 18", "Vite", "Tailwind", "Flask", "Socket.IO", "MongoDB Atlas", "GPT-4o", "Google OAuth"],
    category: {
      en: "AI-assisted collaborative revision platform",
      fr: "Plateforme collaborative de révision assistée par IA",
      ar: "منصة تعاونية للمراجعة بمساعدة الذكاء الاصطناعي",
    },
    context: {
      en: "Team project · DevOps module, Master ISI",
      fr: "Projet d'équipe · Module DevOps, Master ISI",
      ar: "مشروع جماعي · وحدة DevOps، ماستر ISI",
    },
    points: {
      en: [
        "AI assistant (GPT-4o + pdfplumber) that reads course PDFs to answer questions, write structured summaries and generate study plans",
        "Revision planner that schedules 120-minute sessions backwards from exam dates, with subject-specific tips",
        "Real-time collaboration with Socket.IO: subject rooms, private messages and calendar sharing by 6-character code",
        "Modular REST API (8 Flask blueprints, 13 indexed MongoDB collections), Google OAuth 2.0, HTTP-only sessions, RBAC and an admin analytics dashboard",
      ],
      fr: [
        "Assistant IA (GPT-4o + pdfplumber) qui lit les PDF de cours pour répondre aux questions, produire des résumés structurés et générer des plans d'étude",
        "Planificateur de révisions : sessions de 120 min calculées à rebours depuis les dates d'examen, avec conseils adaptés à la matière",
        "Collaboration temps réel avec Socket.IO : salons par matière, messages privés et partage de calendrier par code à 6 caractères",
        "API REST modulaire (8 blueprints Flask, 13 collections MongoDB indexées), Google OAuth 2.0, sessions HTTP-only, RBAC et tableau de bord admin",
      ],
      ar: [
        "مساعد ذكي (GPT-4o + pdfplumber) يقرأ ملفات PDF الخاصة بالدروس للإجابة عن الأسئلة وإنشاء ملخصات منظمة وخطط مراجعة",
        "مخطط مراجعة يجدول جلسات من 120 دقيقة انطلاقا من تواريخ الامتحانات مع نصائح حسب كل مادة",
        "تعاون فوري عبر Socket.IO: غرف لكل مادة، رسائل خاصة ومشاركة التقويم برمز من 6 أحرف",
        "واجهة REST منظمة (8 وحدات Flask و13 مجموعة MongoDB مفهرسة)، Google OAuth 2.0، جلسات HTTP-only، صلاحيات حسب الأدوار ولوحة تحكم إدارية",
      ],
    },
  },
  {
    id: "stagefacile",
    name: "StageFacile",
    year: "2025",
    accent: "#5b8cff",
    repo: "https://github.com/MOUATEAlaaeddine/PFE_StageFacile",
    team: 2,
    cover: sf(2),
    gallery: Array.from({ length: 14 }, (_, i) => sf(i + 1)),
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "NLP", "Recommender", "JWT"],
    category: {
      en: "Smart internship recruitment & tracking platform",
      fr: "Plateforme intelligente de recrutement et de suivi des stagiaires",
      ar: "منصة ذكية لتوظيف المتدربين وتتبعهم",
    },
    context: {
      en: "Bachelor's final project · built in a pair",
      fr: "PFE de Licence · réalisé en binôme",
      ar: "مشروع نهاية الإجازة · عمل ثنائي",
    },
    points: {
      en: [
        "My AI contribution: a hybrid recommender (content-based + collaborative filtering) with weighted intern–offer scoring",
        "Automatic CV analysis that extracts skills from uploaded résumés with NLP",
        "Multi-role platform for interns, recruiters, HR and admins: offers, applications, missions, evaluations and analytics",
        "QR-code certificates with scan verification, JWT auth, RBAC and GDPR consent management",
      ],
      fr: [
        "Ma contribution IA : système de recommandation hybride (contenu + filtrage collaboratif) avec scoring pondéré stagiaire–offre",
        "Analyse automatique des CV avec extraction des compétences par NLP",
        "Plateforme multi-rôles (stagiaires, recruteurs, RH, admin) : offres, candidatures, missions, évaluations et statistiques",
        "Certificats à QR code avec vérification par scan, authentification JWT, RBAC et gestion des consentements RGPD",
      ],
      ar: [
        "مساهمتي في الذكاء الاصطناعي: نظام توصية هجين (حسب المحتوى + التصفية التعاونية) مع تنقيط موزون بين المتدرب والعرض",
        "تحليل تلقائي للسير الذاتية واستخراج المهارات بمعالجة اللغة الطبيعية",
        "منصة متعددة الأدوار للمتدربين والمشغلين والموارد البشرية والإدارة: عروض، طلبات، مهام، تقييمات وإحصائيات",
        "شهادات برمز QR قابلة للتحقق بالمسح، مصادقة JWT، صلاحيات حسب الأدوار وتدبير موافقات حماية المعطيات (RGPD)",
      ],
    },
  },
  {
    id: "dopamineloop",
    name: "DopamineLoop",
    year: "2026",
    accent: "#2fd4a7",
    repo: "https://github.com/MOUATEAlaaeddine/DopamineLoop",
    glyph: "ML",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTE", "Jupyter"],
    category: {
      en: "Machine learning study of digital behavior",
      fr: "Étude du comportement numérique par machine learning",
      ar: "دراسة السلوك الرقمي بالتعلم الآلي",
    },
    points: {
      en: [
        "End-to-end pipeline across 13 algorithms: 6 unsupervised (K-Means, DBSCAN, PCA, t-SNE…) and 7 supervised",
        "Clusters users into behavioral profiles and predicts productivity drops linked to social media use",
        "Best model, AdaBoost, reaches ~83.5% accuracy with cross-validation, F1 and ROC-AUC comparison",
      ],
      fr: [
        "Pipeline complet sur 13 algorithmes : 6 non supervisés (K-Means, DBSCAN, PCA, t-SNE…) et 7 supervisés",
        "Regroupe les utilisateurs en profils comportementaux et prédit les baisses de productivité liées aux réseaux sociaux",
        "Meilleur modèle : AdaBoost, ~83,5 % d'accuracy, avec validation croisée, F1 et ROC-AUC",
      ],
      ar: [
        "مسار متكامل يضم 13 خوارزمية: 6 غير موجهة (K-Means، DBSCAN، PCA، t-SNE…) و7 موجهة",
        "تصنيف المستخدمين إلى أنماط سلوكية وتوقع تراجع الإنتاجية المرتبط باستعمال الشبكات الاجتماعية",
        "أفضل نموذج AdaBoost بدقة تقارب 83.5% مع التحقق المتقاطع ومقاييس F1 وROC-AUC",
      ],
    },
  },
  {
    id: "movies",
    name: "Movie Reservation System",
    year: "2025",
    accent: "#ff8a5c",
    repo: "https://github.com/MOUATEAlaaeddine/movie-reservation-system",
    glyph: "{ }",
    tags: ["Java 17", "Spring Boot 3", "PostgreSQL", "JWT", "OpenAI API"],
    category: {
      en: "Cinema booking REST API",
      fr: "API REST de réservation de cinéma",
      ar: "واجهة REST لحجز تذاكر السينما",
    },
    points: {
      en: [
        "Seat reservation with concurrency handling and dynamic showtime scheduling",
        "JWT auth with BCrypt and role-based access for admins and users",
        "AI-powered movie recommendations through the OpenAI API",
      ],
      fr: [
        "Réservation de places avec gestion de la concurrence et programmation dynamique des séances",
        "Authentification JWT avec BCrypt et rôles admin / utilisateur",
        "Recommandations de films par IA via l'API OpenAI",
      ],
      ar: [
        "حجز المقاعد مع معالجة الطلبات المتزامنة وجدولة ديناميكية للعروض",
        "مصادقة JWT مع BCrypt وصلاحيات للمسؤولين والمستخدمين",
        "توصيات أفلام ذكية عبر واجهة OpenAI",
      ],
    },
  },
  {
    id: "chatroom",
    name: "CHATROOM",
    year: "2026",
    accent: "#ffc857",
    repo: "https://github.com/MOUATEAlaaeddine/CHATROOM",
    glyph: "#",
    tags: ["Spring Boot", "Spring Security", "STOMP / WebSocket", "MongoDB"],
    category: {
      en: "Secure real-time chat system",
      fr: "Système de chat temps réel sécurisé",
      ar: "نظام دردشة فوري وآمن",
    },
    points: {
      en: [
        "Full-duplex messaging with STOMP over WebSockets and full history in MongoDB",
        "Spring Security filter chain, BCrypt hashing and server-side sessions",
        "Admin / user roles, with admin approval required before posting to a room",
      ],
      fr: [
        "Messagerie full-duplex en STOMP sur WebSockets avec historique complet dans MongoDB",
        "Chaîne de filtres Spring Security, hachage BCrypt et sessions côté serveur",
        "Rôles admin / utilisateur, avec validation de l'admin avant de publier dans un salon",
      ],
      ar: [
        "مراسلة فورية ثنائية الاتجاه عبر STOMP وWebSockets مع حفظ السجل الكامل في MongoDB",
        "سلسلة مرشحات Spring Security، تشفير BCrypt وجلسات من جهة الخادم",
        "أدوار المسؤول والمستخدم مع موافقة المسؤول قبل النشر في أي غرفة",
      ],
    },
  },
  {
    id: "chatapp3",
    name: "Emotion Chat",
    year: "2025",
    accent: "#ff6fb5",
    repo: "https://github.com/MOUATEAlaaeddine/chatApp3",
    glyph: "♥",
    tags: ["Node.js", "Express", "Socket.IO", "RethinkDB", "OpenAI API"],
    category: {
      en: "Real-time chat with AI emotion detection",
      fr: "Chat temps réel avec détection d'émotions par IA",
      ar: "دردشة فورية مع كشف المشاعر بالذكاء الاصطناعي",
    },
    points: {
      en: [
        "Real-time messaging with Express and Socket.IO, backed by RethinkDB change feeds",
        "Detects the emotion behind each message with the OpenAI API",
      ],
      fr: [
        "Messagerie temps réel avec Express et Socket.IO, sur RethinkDB",
        "Détecte l'émotion de chaque message grâce à l'API OpenAI",
      ],
      ar: [
        "مراسلة فورية عبر Express وSocket.IO مع قاعدة بيانات RethinkDB",
        "كشف المشاعر وراء كل رسالة باستخدام واجهة OpenAI",
      ],
    },
  },
  {
    id: "interview",
    name: "AI Interview Coach",
    year: "2025",
    accent: "#4fd1ff",
    repo: "https://github.com/MOUATEAlaaeddine/ai-interview-coach",
    glyph: "AI",
    tags: ["Python", "Streamlit", "OpenAI API"],
    category: {
      en: "AI-powered interview simulator",
      fr: "Simulateur d'entretien propulsé par l'IA",
      ar: "محاكي مقابلات عمل بالذكاء الاصطناعي",
    },
    points: {
      en: ["Simulates job interviews: an LLM asks questions, listens to answers and gives feedback, all in a Streamlit app"],
      fr: ["Simule des entretiens d'embauche : un LLM pose les questions, analyse les réponses et donne un retour, dans une app Streamlit"],
      ar: ["يحاكي مقابلات العمل: نموذج لغوي يطرح الأسئلة ويحلل الأجوبة ويقدم ملاحظات، ضمن تطبيق Streamlit"],
    },
  },
];

const di = (p) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${p}`;

export const STACK = [
  { name: "Java", icon: di("java/java-original.svg") },
  { name: "Spring Boot", icon: di("spring/spring-original.svg") },
  { name: "Python", icon: di("python/python-original.svg") },
  { name: "Flask", icon: di("flask/flask-original.svg") },
  { name: "FastAPI", icon: di("fastapi/fastapi-original.svg") },
  { name: "JavaScript", icon: di("javascript/javascript-original.svg") },
  { name: "TypeScript", icon: di("typescript/typescript-original.svg") },
  { name: "React", icon: di("react/react-original.svg") },
  { name: "Angular", icon: di("angularjs/angularjs-original.svg") },
  { name: "Node.js", icon: di("nodejs/nodejs-original.svg") },
  { name: "Tailwind", icon: di("tailwindcss/tailwindcss-original.svg") },
  { name: "MongoDB", icon: di("mongodb/mongodb-original.svg") },
  { name: "PostgreSQL", icon: di("postgresql/postgresql-original.svg") },
  { name: "MySQL", icon: di("mysql/mysql-original.svg") },
  { name: "Scikit-learn", icon: di("scikitlearn/scikitlearn-original.svg") },
  { name: "Pandas", icon: di("pandas/pandas-original.svg") },
  { name: "R", icon: di("r/r-original.svg") },
  { name: "C++", icon: di("cplusplus/cplusplus-original.svg") },
  { name: "Docker", icon: di("docker/docker-original.svg") },
  { name: "Git", icon: di("git/git-original.svg") },
  { name: "Linux", icon: di("linux/linux-original.svg") },
  { name: "Bash", icon: di("bash/bash-original.svg") },
];

export const SKILL_TAGS = [
  "LLM · GPT-4o", "NLP", "Recommender systems", "Machine Learning", "REST APIs",
  "Microservices", "WebSockets", "OAuth 2.0 · JWT", "Data Warehousing · ETL", "Web security (XSS, SQLi)",
  "Active Directory", "VMware · Hyper-V",
];

export const CERTS = [
  { name: "CCNA", org: "Cisco Networking Academy", year: "2023" },
  { name: "CCNA — Advanced Network Security", org: "Cisco Networking Academy", year: "2025" },
];

export const SPOKEN = {
  en: [["Arabic", "Native"], ["French", "Fluent"], ["English", "Professional"]],
  fr: [["Arabe", "Langue maternelle"], ["Français", "Courant"], ["Anglais", "Professionnel"]],
  ar: [["العربية", "اللغة الأم"], ["الفرنسية", "بطلاقة"], ["الإنجليزية", "مستوى مهني"]],
};
