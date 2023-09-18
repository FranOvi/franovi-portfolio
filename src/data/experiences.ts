import type { Experience } from '@/types/experience';

const now = new Date();
const experiences: Experience[] = [
    {
        "id": "implementhit",
        "type": "job",
        "organization": "ImplementHIT",
        "name": "Mid. Fullstack Developer",
        "startDate": { "year": 2021, "month": 6 },
        "endDate": { "year": now.getFullYear(), "month": now.getMonth() + 1 },
        "description": "Fullstack developer for a US based company, developed multiple applications with the Laravel and Vue.js stack of technologies.",
        "tasks": [
            "Developed applications to companies in the USA medical sector.",
            "Developed SPAs and Web APIs with Laravel, Vue.js and MySQL.",
            "Used techniques such as index creation, Jobs, eager loading, cache management with Redis for better performance and response times.",
            "Implementation of unit and feature tests.",
            "Generation of Excel and PDF reports, integrating libraries."
        ]
    },
    {
        "id": "telesoft",
        "type": "job",
        "organization": "VitalPBX",
        "name": "Jr. Developer",
        "startDate": { "year": 2019, "month": 10 },
        "endDate": { "year": 2021, "month": 5 },
        "description": "Develop multiple applications with the Laravel and Vue.js stack of technologies.",
        "tasks": [
            "Developed an SPA in Vue with Laravel, for collaborative project translations.",
            "Developed a Mobile Android VoIP application “Vitxi”.",
            "Migration of call rate software from VB6 to .Net Framework with Visual Basic and the DevExpress library."
        ]
    },
    {
        "id": "fitnesscorecenter",
        "type": "job",
        "organization": "Fitness Core Center",
        "name": "Intern Jr. Fullstack Developer",
        "startDate": { "year": 2020, "month": 1 },
        "endDate": { "year": 2020, "month": 6 },
        "description": "",
        "tasks": [
            "Developed a web platform to manage a gym and exercise routines, using Angular with a Laravel Web API"
        ]
    },
    {
        "id": "beebusiness",
        "type": "job",
        "organization": "Bee Business Suite",
        "name": "Intern Jr. Developer",
        "startDate": { "year": 2019, "month": 2 },
        "endDate": { "year": 2019, "month": 9 },
        "description": "",
        "tasks": [
            "Desktop ERP development in .Net Framework.",
            "Created multiple reports with Active Reports."
        ]
    },
    {
        "id": "uca",
        "type": "education",
        "organization": "Universidad Centroamericana",
        "name": "Systems Engineering",
        "startDate": { "year": 2016, "month": 1 },
        "endDate": { "year": 2021, "month": 6 },
        "description": "",
        "tasks": [
            "Desktop ERP development in .Net Framework.",
            "Created multiple reports with Active Reports."
        ]
    }
];

export default experiences;
