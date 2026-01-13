//----------Animation fleurs----------
// https://www.youtube.com/watch?v=hOhWCoz8wqY
const imgs = document.querySelectorAll('.intro img');
const tl = gsap.timeline();

tl.to(imgs, {scale: 1, duration: 0.8, stagger:0.14, ease: "back.out(1.7)"});

//----------Burger menu----------
// https://www.youtube.com/watch?v=MQWkahv_yxg&t=2122s
const toggleMenu = document.getElementById("toggle-menu")
const cancel = document.getElementById("cancel")
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll("nav ul li a")

function toggleNav() {
    nav.classList.toggle('active');
}

toggleMenu.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    cancel.classList.toggle('active')
})

cancel.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    cancel.classList.toggle('active')
})


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
})


//----------Navbar scroll hidden----------
// https://www.youtube.com/watch?v=0YE79RyNYJ4 et IA

//La position de départ
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.innerWidth <= 900) {
        nav.style.translate = ""; 
        return;
    }

    if (nav.classList.contains('active')) {
        return;
    }

    //Position actuelle
    const currentScrollY = window.scrollY;

    //On scrolle en bas
    if (currentScrollY > lastScrollY) {
        //Je cache la nav
        nav.style.translate = `0 -${nav.offsetHeight}px`; 
    } else {
        //Si je remonte en haut, on ramène à l'état initial
        nav.style.translate = "0 0";
    }

    //Je mets à jour la dernière position
    lastScrollY = currentScrollY;
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 900) {
        nav.style.translate = "0 0";
    }
});

const translations = {
    fr: {
        "nav-home": "ACCUEIL",
        "nav-projects": "PROJETS",
        "nav-about": "À PROPOS",
        "nav-contact": "CONTACT",
        
        "title-projects": "MES PROJETS",
        "filter-all": "Tout",
        "filter-dev": "Développement Web",
        "filter-av": "Audiovisuel",
        "filter-graph": "Graphisme",
        "seeAll": "Voir tous mes projets",
        "seeLess": "Voir moins",
        
        "about-title": "À PROPOS",
        "about-desc": "Moi, c’est Hayrunnisa, étudiante en BUT Métiers du Multimédia et de l’Internet. J’aime créer du contenu pour m’exprimer, que ce soit à travers la vidéo, la photographie ou les arts visuels. En parallèle, j’apprends le développement web pour mêler créativité et technique dans mes projets. Je suis actuellement à la recherche d’un stage de 4 mois à partir d’avril 2026, en audiovisuel ou community management.",
        "btn-cv": "CV",
        "skills-title": "Mes compétences",
        "opquast": "Je suis formée aux règles Opquast, qui regroupent les bonnes pratiques de la qualité web, et je passerai ma certification en avril 2026. Ainsi, je monte en compétences en accessibilité, en performance, mais aussi en ergonomie. En 2026, les sites web doivent pouvoir être utilisés par tous, et je m’engage activement dans cette démarche.",
        
        "testimonials-title": "DE LEURS MOTS",
        "testi-1": "Ayant collaboré avec Hayrunnisa sur de nombreux projets tout au long de la formation MMI, j'ai pu constater son efficacité et sa fiabilité exemplaire. Elle possède une grande capacité d'adaptation ainsi qu'un leadership naturel qui lui permet de motiver et d'encourager son équipe en toutes circonstances ! Hayrunnisa est quelqu’un de très confiante et sait mener ses objectifs à bien. Travailler à ses côtés est très agréable !",
        "testi-1-function": "Étudiante en MMI 2",
        "testi-2": "Hayrunnisa était une stagiaire très réactive, pleine d’idées et surtout force de proposition. Elle s’est montrée très impliquée, curieuse et enthousiaste tout au long de son stage.",
        "testi-2-function": "Tuteur de stage",
        "testi-3": "Hayrunnisa ACAR a réalisé sur notre demande pour notre Association Réussir Aujourd'hui des courtes vidéos au cours de nos universités d'été. Il s'agissait d'interviewer des étudiants participants mais aussi des professeurs et des bénévoles de l'association. Nous avons été très contents de son travail à la fois autonome, professionnel et lui avons demandé d'intervenir de nouveau pour nos Rencontres, évènement biannuel qui réunit plus de 200 personnes. Les vidéos réalisées sont utilisées pour notre communication sous forme de newsletter et sur notre site public.",
        "testi-3-function": "Vice-Présidente de Réussir Aujourd'hui",
        "contact-title": "CONTACT",
        "contact-mail": "Mail",
        "contact-follow": "Suivez-moi",

        "date": "Date",
        "desc": "Description",
        "ctx": "Contexte",
        "skills": "Compétences",
        "link": "Voir le projet",
    },
    en: {
        "nav-home": "HOME",
        "nav-projects": "PROJECTS",
        "nav-about": "ABOUT ME",
        "nav-contact": "CONTACT",

        "title-projects": "MY PROJECTS",
        "filter-all": "All",
        "filter-dev": "Web Development",
        "filter-av": "Audiovisual",
        "filter-graph": "Graphic Design",
        "seeAll": "See all projects",
        "seeLess": "Show less",

        "about-title": "ABOUT ME",
        "about-desc": "Hi, I’m Hayrunnisa, a student in Multimedia and Internet Professions. I enjoy creating content to express myself, especially through video, photography, and visual arts. At the same time, I’m learning web development to mix creativity and technical skills in my projects. I am currently looking for a 4-month internship starting in April 2026, in audiovisual or community management.",
        "btn-cv": "Resume",
        "skills-title": "My Skills",
        "opquast": "I am trained in Opquast rules, which are good practices for web quality, and I will take my certification in April 2026. I am improving my skills in accessibility, performance, and usability. In 2026, websites should be usable by everyone, and I am working toward this goal.",

        "testimonials-title": "TESTIMONIALS",
        "testi-1": "Having collaborated with Hayrunnisa on numerous projects throughout the MMI training programme, I have witnessed her exemplary efficiency and reliability. She is highly adaptable and possesses natural leadership skills that enable her to motivate and encourage her team in all circumstances. Hayrunnisa is a very confident person who knows how to achieve her goals. Working alongside her is a real pleasure. ",
        "testi-1-function": "MMI 2 student",
        "testi-2": "Hayrunnisa was a very responsive intern with many ideas. She often made suggestions and proposed solutions. She was involved in her work, curious, and enthusiastic throughout her internship.",
        "testi-2-function": "Internship tutor",
        "testi-3": "Hayrunnisa ACAR produced short videos for our association, Réussir Aujourd'hui, during our summer universities. These videos involved interviews with participating students, as well as professors and volunteers from the association. We were very pleased with her work, which was both independent and professional, and asked her to participate again for our Rencontres, a biannual event that brings together more than 200 people. The videos are used for our communications, including our newsletter and on our public website.",
        "testi-3-function": "Vice-President of Réussir Aujourd'hui",
        "contact-title": "CONTACT",
        "contact-mail": "Email",
        "contact-follow": "Follow me",

        "date": "Date",
        "desc": "Description",
        "ctx": "Context",
        "skills": "Skills",
        "link": "View Project",
    }
};

//----------Les variables pour cibler un élément html----------
const conteneur = document.querySelector('.projects-container');
const btnSeeAll = document.getElementById('quantity-projects');
const divFilter = document.getElementById('filters');
const filterBtns = document.querySelectorAll('.filter-btn');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-btn');


//Je stocke les données du JSON
let myProjects = [];

//Par défaut site en français
let currentLang = 'fr';

//Je ne montre pas tout
let showAll = false;

//Je montre tous mes projets
let currentCategory = 'all';


//----------Traduction du texte statique----------
function updateStaticContent(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
            element.textContent = translations[lang][key];
    });
}


//----------Je récupère les données du json----------
fetch('data.json')
    .then(reponse => reponse.json())
    .then(data => {
        myProjects = data;

        //Par défaut en français
        displayProjects('fr');
    })


//----------Filtre----------
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        //Je recupère la catégorie du projet grâce au data-attribute
        currentCategory = btn.dataset.categorie;

        //Je change le bouton actif
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        //J'affiche les nouveaux projets
        displayProjects(currentLang);
    });
});


//----------Bouton voir tous les projets----------
if (btnSeeAll) {
    btnSeeAll.addEventListener('click', () => {
        //J'inverse l'état du bouton au clic
        showAll = !showAll;
        
        if (showAll) {
            //Si on ouvre, on affiche le filtre
            divFilter.classList.remove('hidden');

            //Par défaut, j'affiche tout
            currentCategory = 'all';
            document.querySelector('.filter-btn.active').classList.remove('active');
            document.querySelector('[data-categorie="all"]').classList.add('active');
        } else {
            //Si on ferme, on cache les filtres
            divFilter.classList.add('hidden');
            
            // On remonte dans la section "Mes projets"
            document.getElementById('project-title').scrollIntoView({ behavior: 'smooth' });
        }

        displayProjects(currentLang); 
    });
}


//----------Je ferme la popup----------
//Avec la croix
closeBtn.addEventListener('click', () => popupContainer.classList.add('hidden'));

//En cliquant à l'extérieur du popup
popupContainer.addEventListener('click', (e) => {
    if(e.target === popupContainer) popupContainer.classList.add('hidden');
});


//----------J'affiche les cards----------
function displayProjects(language) {
    //L'IA m'a aidé pour changer la balise lang en focntion de la langue selectionné
    currentLang = language;
    document.documentElement.lang = language;

    //Je récupère les éléments traduis
    const elements = translations[language];

    //Traduction du bouton
    if(showAll){
        btnSeeAll.textContent = elements.seeLess;
    }else{
        btnSeeAll.textContent = elements.seeAll;
    }

    //Je vide pour le filtre
    conteneur.innerHTML = "";

    //Fonction pour gérer le nombre de projets à afficher
    let projectsToDisplay = [];

    //Je filtre en focntion de la catégorie
    if (currentCategory === 'all') {
        projectsToDisplay = myProjects;
    } else {
        projectsToDisplay = myProjects.filter(p => p.category === currentCategory);
    }
    
    //J'affiche seulement mes 3 derniers projets
    if(!showAll){
        projectsToDisplay = projectsToDisplay.slice(0, 3);
    }

    projectsToDisplay.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-category', project.category);

        //J'ouvre la popup au moment du clic sur une card
        card.addEventListener('click', () => openPopup(project));

        //AFfichage d'une card
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title[language]}" class="img-card">
            <h3>${project.title[language]}</h3>`;

        conteneur.appendChild(card);
    });
}


//----------Affichage popup----------
function openPopup(project) {
    const elements = translations[currentLang];
    
    //Je complète ma popup
    document.getElementById('popup-title').textContent = project.title[currentLang];
    document.getElementById('popup-date').innerHTML = `${project.date[currentLang]}`;
    document.getElementById('popup-ctx').innerHTML = `${project.context[currentLang]}`;
    document.getElementById('popup-img').src = project.image;
    document.getElementById('popup-desc').innerHTML = `${project.description[currentLang]}`;
    
    const toolsContainer = document.getElementById('popup-tools');
    //Je recuèpre les textes et mets une chaine de caractère ide si vide
    let textSoftwares = project.software || "";
    let textlLanguages = project.languages || "";

    let textTools = textSoftwares + "," + textlLanguages;

    let htmlTools = "";

    //Je coupe la liste à chaque vrifule
    let toolsWords = textTools.split(',');

    toolsWords.forEach(word => {
        let cleanWord = word.trim();

        if(cleanWord !== "") {
            htmlTools += `<span class="tool-tag">${cleanWord}</span>`;
        }
    });
    //Dans la popup
    toolsContainer.innerHTML = htmlTools;

    //Le lien
    const linkDiv = document.getElementById('popup-link');
    if(project.link) {
        linkDiv.innerHTML = `<a href="${project.link}" target="_blank" class="link-btn">${elements.link}</a>`;
    } else {
        linkDiv.innerHTML = "";
    }

    //J'affiche la popup
    popupContainer.classList.remove('hidden');
}

//Les langues
const btnFr = document.getElementById('btn-fr');
const btnEn = document.getElementById('btn-en');

if(btnFr && btnEn) {
    btnFr.addEventListener('click', () => {
        currentLang = 'fr';
        displayProjects('fr');
        updateStaticContent('fr');
    });

    btnEn.addEventListener('click', () => {
        currentLang = 'en';
        displayProjects('en');
        updateStaticContent('en');
    });
}