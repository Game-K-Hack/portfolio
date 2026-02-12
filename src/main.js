import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import { createHead } from '@unhead/vue/client'

const i18nData = {
    legacy: false,
    locale: navigator.language.split('-')[0],
    fallbackLocale: 'en',
    messages: {
        fr: {
            name: "Kélian", 
            job_title: "Développeur informatique",
            meta_description: "Développeur informatique passionné, curieux, autonome et autodidacte, je maîtrise plusieurs langages. Explorez mes projets pour mieux me connaître.", 
            description: "Développeur informatique passionné depuis l’âge de 12 ans, j’ai progressivement acquis des compétences dans des domaines variés. Curieux, autonome et autodidacte, je maîtrise plusieurs langages et je m’adapte facilement à tout type d’environnement. Je continue de me former activement en cybersécurité, afin d’approfondir et d’actualiser constamment mes connaissances.", 
            projects: {
                title: "Mes Projets", 
                realprice: {
                    title: "RealPrice", 
                    description: "RealPrice est une application pratique de conversion de devises pour les voyageurs. Comparez facilement les taux de change, ajustez les frais bancaires et calculez vos coûts avec précision. Restez informé grâce aux mises à jour automatiques via Internet pour des conversions précises où que vous soyez."
                }, 
                i20: {
                    title: "Interface I20", 
                    description: "Interface personnalisé auto-radio pour ma voiture, une hyundai i20 gen2."
                }, 
                bkcrackgui: {
                    title: "Inspecteur Cracker", 
                    description: "Interface utilisateur graphique pour casser le chiffrement zip ancien avec l'attaque à texte clair connue de Biham et Kocher."
                }
            }, 
            xpp: {
                title: "Expériences professionnelles", 
                items: [
                    {
                        date: "19 | 23 Janvier, 2026", 
                        company: { name: "Socodep", location: "Bouguenais", url: "https://socodep.fr" }, 
                        icons: ["python", "microsoftsqlserver"], 
                        type: "Freelance", 
                        name: "Développement d’un module ERP - intégration Geodis", 
                        description: "Conception et développement d’un module ERP, permettant la création automatisée d’enlèvements Geodis. Mise en place d’un script de création d’enlèvements via les API Geodis, puis modification des procédures SQL afin d’intégrer l’appel du script directement depuis l’ERP."
                    }, {
                        date: "6 Janvier | 11 Juillet, 2025", 
                        company: { name: "Algam", location: "Thouaré-sur-Loire", url: "https://www.algam.net" }, 
                        icons: ["php", "javascript", "jobscheduler7", "talend", "talaxie"], 
                        type: "CDD", 
                        name: "Analyste Développeur Flux", 
                        description: "- Modification et maintenance de flux de données (CSV, JSON, SQL)\n\n- Développement initial d’un [b]module de connexion API[/b]\n\n- Réalisation de tests de [b]sécurité sur un logiciel[/b] de gestion des RH"
                    }, {
                        date: "16 Mars 2024", 
                        company: { name: "Socodep", location: "Bouguenais", url: "https://socodep.fr" }, 
                        icons: ["php"], 
                        type: "Freelance", 
                        name: "Correction d’un dysfonctionnement web–ERP", 
                        description: "Analyse et résolution d’un incident bloquant le module de communication entre le site web et l’ERP. Identification d’une erreur de vérification de certificat SSL dans un module PHP et remise en service du système."
                    }, {
                        date: "4 Septembre | 30 Août, 2024", 
                        company: { name: "Sodebo", location: "Montaigu-Vendée", url: "https://www.sodebo.com" }, 
                        icons: ["spring", "angular", "python", "postgresql", "kubernetes"], 
                        type: "Alternance", 
                        name: "Licence Développeur", 
                        description: "- Évolution d'un portail applicatif (Java Spring Boot pour le backend et Angular pour le frontend)\n\n- Migration de base de données PostgreSQL vers un nouveau serveur PostgreSQL 16 (création d'une interface Python pour faciliter la migration)\n\n- Migration de projets vers un nouveau serveur Kubernetes"
                    }, {
                        date: "3 Janvier | 17 Février, 2023", 
                        company: { name: "Sodebo", location: "Montaigu-Vendée", url: "https://www.sodebo.com" }, 
                        icons: ["jenkins", "gitlab", "python", "rabbitmq", "prometheus", "grafana", "gravitee"], 
                        type: "Stage", 
                        name: "2ème année BTS SIO", 
                        description: "- Création de fichiers de [b]configuration GitLab-CI[/b] pour la migration de projets\n\n- Création d’API via [b]Gravitee[/b]\n\n- Création d’un [b]script Python[/b] pour transférer des dépendances\n\n- Création de requêtes d’alert [b]RabbitMQ sur Prometheus[/b]\n\n- Création de graphiques d’alert [b]RabbitMQ sur Grafana[/b]"
                    }, {
                        date: "23 Mai | 25 Juin, 2022", 
                        company: { name: "Sodebo", location: "Montaigu-Vendée", url: "https://www.sodebo.com" }, 
                        icons: ["angular", "squashtm"], 
                        type: "Stage", 
                        name: "1ère année BTS SIO", 
                        description: "- Modification d'application web (pour la production) en [b]Angular[/b]\n\n- Création de matrice de tests sur [b]Squash[/b]\n\n- Création d’interfaces pour un projet de gestion de fournitures sous [b]Angular[/b]\n\n- Réalisation d’un test de [b]sécurité informatique[/b]"
                    }, {
                        date: "22 | 25 Janvier, 2018", 
                        company: { name: "Airbus", location: "Bouguenais", url: "https://www.airbus.com" }, 
                        icons: [], 
                        type: "Stage", 
                        name: "découverte 3ème", 
                        description: "Découverte de tous les secteurs"
                    }
                ]
            }, 
            skills: {
                title: "Compétences Informatiques", 
                language: "Langages de programmation", 
                framework: "Frameworks & technologies", 
                database: "Bases de données", 
                devops: "DevOps", 
                os: "Systèmes d’exploitation", 
                cyber: "Cybersécurité & analyse", 
                conception: "Conception & organisation"
            }, 
            studies: {
                title: "Formation", 
                items: [
                    {
                        date: "2023, 2024", 
                        school: { name: "La Joliverie", location: "Saint-Sébastien-sur-Loire", url: "https://www.la-joliverie.com" }, 
                        type: "Licence Informatique", 
                        name: "Développeur"
                    }, {
                        date: "2021, 2023", 
                        school: { name: "La Joliverie", location: "Saint-Sébastien-sur-Loire", url: "https://www.la-joliverie.com" }, 
                        type: "BTS", 
                        name: "SIO (Services informatiques aux organisations)"
                    }, {
                        date: "2020, 2021", 
                        school: { name: "Jean-Perrin", location: "Rezé", url: "https://perrin-goussier.paysdelaloire.e-lyco.fr/perrin" }, 
                        type: "BAC", 
                        name: "STI2D (Sciences et technologies de l'industrie et du développement durable)",
                        option: "Option SIN (Système d’Information et Numérique)"
                    }
                ]
            }, 
            certifications: {
                title: "Certifications"
            }, 
            cyber: {
                title: "Labs & challenges de cybersécurité", 
                tryhackme: { title: "Try Hack Me" }, 
                rootme: { title: "Root Me" }, 
            }
        }
    }
};

const i18n = createI18n(i18nData);
const head = createHead();
const app = createApp(App);
app.use(i18n);
app.use(head);
app.mount('#app');

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
