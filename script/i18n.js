const translations = {
    en: {
        "nav.education": "Education",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.subtitle": "Full-stack developer with 3 years of professional experience building web solutions for product traceability and warehouse logistics based on NFC and RFID.",
        "hero.ctaProjects": "View Projects",
        "hero.ctaContact": "Contact me",
        "contact.title": "Get In Touch",
        "contact.text": "Interested in collaborating, hiring, or discussing a project? Feel free to reach out.",
        "education.title": "Education",
        "edu.msc.title": "M.Sc. in Computer Engineering – Cloud and High Performance Computing",
        "edu.msc.school": "University of Catania",
        "edu.msc.period": "Oct 2026 – Expected Jul 2028",
        "edu.bsc.title": "B.Sc. in Computer Engineering",
        "edu.bsc.school": "University of Catania",
        "edu.bsc.period": "Sept 2020 – Expected Dec 2026",
        "edu.bsc.thesis": "Thesis: locating livestock with a drone and BLE beacons",
        "edu.hs.title": "High School Diploma in Information Technology and Telecommunications",
        "edu.hs.school": "I.T.I. Enrico Fermi, Syracuse",
        "edu.hs.period": "Sept 2014 – Jul 2019",
        "exp.li1": "Refactored AutenticoNFC, the customer-facing platform that clients use to manage their NFC-tagged products, and built a self-service system for updating them, improving scalability and operational UX and reducing customer support requests.",
        "exp.li2": "Designed and developed web solutions for RFID logistics, including an administrative back office and operational web apps for order and warehouse management.",
        "exp.li3": "Built responsive Progressive Web Apps giving instant access to product data through an NFC scan, with no native app to install.",
        "exp.li4": "Managed the company’s Linux infrastructure via Plesk and SSH: deployment, configuration, maintenance and application backups.",
        "experience.title": "Experience",
        "exp.period": "Jul 2023 – Sep 2026",
        "exp.place": "Autentico Srl, Acireale, Italy",
        "projects.title": "Projects",
        "proj.drone.li1": "Developing a Python scanner that runs on a Raspberry Pi mounted on a DJI Matrice 350 RTK drone and detects BLE beacons worn by cattle.",
        "proj.drone.li2": "Each detection is logged with the drone’s GPS position to estimate where each animal is, helping farmers find lost cattle across large pastures.",
        "proj.drone.kind": "Bachelor’s Thesis, in progress",
        "proj.proxyx.li1": "Developed a desktop application for creating and printing high-quality MTG proxy cards.",
        "proj.proxyx.li2": "Integrated the Scryfall REST API (Magic: The Gathering card database) to search and import cards directly from the app, with live preview and PDF export for home printing.",
        "proj.proxyx.kind": "Side Project"
    },
    it: {
        "nav.education": "Formazione",
        "nav.experience": "Esperienza",
        "nav.projects": "Progetti",
        "nav.contact": "Contatti",
        "hero.subtitle": "Sviluppatore full-stack con 3 anni di esperienza professionale nella realizzazione di soluzioni web per la tracciabilità dei prodotti e la logistica di magazzino basate su NFC e RFID.",
        "hero.ctaProjects": "Vedi i progetti",
        "hero.ctaContact": "Contattami",
        "contact.title": "Contattami",
        "contact.text": "Ti interessa collaborare, assumermi o parlare di un progetto? Scrivimi pure.",
        "education.title": "Formazione",
        "edu.msc.title": "Laurea Magistrale in Ingegneria Informatica – Cloud and High Performance Computing",
        "edu.msc.school": "Università degli Studi di Catania",
        "edu.msc.period": "Ott 2026 – Prevista Lug 2028",
        "edu.bsc.title": "Laurea Triennale in Ingegneria Informatica",
        "edu.bsc.school": "Università degli Studi di Catania",
        "edu.bsc.period": "Sett 2020 – Prevista Dic 2026",
        "edu.bsc.thesis": "Tesi: localizzazione del bestiame tramite drone e beacon BLE",
        "edu.hs.title": "Diploma in Informatica e Telecomunicazioni",
        "edu.hs.school": "I.T.I. Enrico Fermi, Siracusa",
        "edu.hs.period": "Sett 2014 – Lug 2019",
        "exp.li1": "Refactoring di AutenticoNFC, la piattaforma con cui i clienti gestiscono i propri prodotti dotati di tag NFC, e sviluppo di un sistema self-service per il loro aggiornamento, migliorando scalabilità e UX operativa e riducendo le richieste di assistenza clienti.",
        "exp.li2": "Progettazione e sviluppo di soluzioni web per logistica RFID, composte da backoffice amministrativo e web app operative per gestione ordini e magazzino.",
        "exp.li3": "Sviluppo di Progressive Web App responsive per accesso immediato ai dati prodotto tramite scansione NFC, senza installazione di app native.",
        "exp.li4": "Gestione infrastruttura Linux aziendale tramite Plesk e SSH: deploy, configurazione, manutenzione e backup applicativi.",
        "experience.title": "Esperienza",
        "exp.period": "Lug 2023 – Set 2026",
        "exp.place": "Autentico Srl, Acireale, Italia",
        "projects.title": "Progetti",
        "proj.drone.li1": "Sviluppo di uno scanner Python in esecuzione su un Raspberry Pi montato su un drone DJI Matrice 350 RTK, che rileva i beacon BLE applicati ai bovini.",
        "proj.drone.li2": "Registrazione di ogni rilevazione insieme alla posizione GPS del drone per stimare la posizione di ciascun animale e aiutare gli allevatori a ritrovare i capi dispersi su grandi pascoli.",
        "proj.drone.kind": "Tesi triennale, in corso",
        "proj.proxyx.li1": "Sviluppo di un’applicazione desktop per la creazione e la stampa di carte proxy TCG ad alta qualità.",
        "proj.proxyx.li2": "Integrazione con le API REST di Scryfall (database di carte Magic) per cercare e importare le carte direttamente dall’applicazione, con anteprima in tempo reale e generazione di PDF per la stampa domestica.",
        "proj.proxyx.kind": "Progetto personale"
    }
};

const LANG_KEY = 'lang';

function getInitialLang(){
    try {
        const saved = localStorage.getItem(LANG_KEY);
        if(saved && translations[saved]) return saved;
    } catch(e) {}
    return (navigator.language || 'en').toLowerCase().startsWith('it') ? 'it' : 'en';
}

function setLang(lang){
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = dict[el.dataset.i18n];
        if(value !== undefined) el.textContent = value;
    });
    document.documentElement.lang = lang;

    const other = lang === 'it' ? 'en' : 'it';
    const btn = document.getElementById('lang-switch');
    btn.textContent = other.toUpperCase();
    btn.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all\'italiano');
    btn.dataset.target = other;

    try { localStorage.setItem(LANG_KEY, lang); } catch(e) {}
}

document.getElementById('lang-switch').addEventListener('click', e => {
    setLang(e.currentTarget.dataset.target);
});

setLang(getInitialLang());
