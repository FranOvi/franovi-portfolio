import type { Experience } from '@/types/experience';

const now = new Date();
const experiences: Experience[] = [
    {
        id: "netdiligence",
        type: "job",
        subtype: "Full-time",
        organization: "NetDiligence (via Kubikware)",
        name: "Fullstack Developer",
        startDate: { "year": 2024, "month": 12 },
        endDate: { "year": now.getFullYear(), "month": now.getMonth() + 1 },
        description: "",
        tasks: [
            "Migrated legacy platforms in the cybersecurity domain from vanilla PHP/jQuery to a modern Laravel + React stack, improving maintainability and development rate.",
            "Applied Laravel best practices — resource and invokable controllers, clean architecture — to keep the codebase consistent and easy to extend. Integrated Meilisearch to power fast, relevant search functionality across the platform.",
            "Leveraged AI tools (e.g., Copilot/Claude) to accelerate development, improve code quality, and streamline problem-solving workflows."
        ],
        hide: false,
    },
    {
        id: "downshift",
        type: "job",
        subtype: "Part-time",
        organization: "Downshift",
        name: "Mid. Fullstack Developer",
        startDate: { "year": 2024, "month": 6 },
        endDate: { "year": 2025, "month": 4 },
        description: "",
        tasks: [
            "Translated Figma designs into pixel-perfect, responsive React components, ensuring consistent UI/UX across device types and breakpoints.",
            "Contributed to existing Node.js backend services by integrating Mixpanel analytics across key user flows, enabling data-driven product and future decisions."
        ],
        hide: false,
    },
    {
        id: "goit",
        type: "job",
        subtype: "Part-time",
        organization: "GoIT",
        name: "Web Developer Mentor",
        startDate: { "year": 2022, "month": 8 },
        endDate: { "year": 2024, "month": 5 },
        description: "GoIT is a Ukrainian IT school that provides online courses for aspiring developers.",
        tasks: [
            "Mentored students through a full-stack curriculum, from HTML, CSS, and JavaScript fundamentals to advanced technologies like Node.js and React.",
            "Led junior teams in building responsive React projects, guiding them in applying their skills to real-world, collaborative development scenarios."
        ],
        hide: false,
    },
    {
        id: "implementhit",
        type: "job",
        subtype: "Full-time",
        organization: "ImplementHIT",
        name: "Mid. Fullstack Developer",
        startDate: { "year": 2021, "month": 6 },
        endDate: { "year": 2024, "month": 11 },
        description: "",
        tasks: [
            "Developed SPAs and Web APIs for US-based medical sector companies using Laravel, Vue.js, and MySQL, delivering HIPAA-compliant, healthcare applications.",
            "Optimized application performance and response times through database indexing, eager loading, queued jobs, and Redis-based caching strategies.",
            "Implemented unit and feature test suites to ensure code reliability, and integrated third-party libraries for tasks such as automated Excel and PDF report generation."
        ],
        hide: false,
    },
    {
        id: "telesoft",
        type: "job",
        subtype: "Full-time",
        organization: "VitalPBX",
        name: "Jr. Fullstack Developer",
        startDate: { "year": 2019, "month": 10 },
        endDate: { "year": 2021, "month": 5 },
        description: "",
        tasks: [
            "Built an SPA using Vue.js and Laravel to support collaborative project translations, and developed \"Vitxi,\" a mobile Android VoIP application.",
            "Migrated a legacy call-rate software system from VB6 to .NET Framework using Visual Basic and the DevExpress library, modernizing a critical business tool."
        ],
        hide: false,
    },
    {
        id: "fitnesscorecenter",
        type: "job",
        subtype: "Internship",
        organization: "Fitness Core Center",
        name: "Intern Jr. Fullstack Developer",
        startDate: { "year": 2020, "month": 1 },
        endDate: { "year": 2020, "month": 6 },
        description: "",
        tasks: [
            "Developed a web platform to manage a gym and exercise routines, using Angular with a Laravel Web API"
        ],
        hide: true,
    },
    {
        id: "beebusiness",
        type: "job",
        subtype: "Internship",
        organization: "Bee Business Suite",
        name: "Intern Jr. Developer",
        startDate: { "year": 2019, "month": 2 },
        endDate: { "year": 2019, "month": 9 },
        description: "",
        tasks: [
            "Migrated a desktop ERP in .Net framework, with multiple reports in ActiveReports."
        ],
        hide: true,
    },
    {
        id: "uca",
        type: "education",
        subtype: "Degree",
        organization: "Universidad Centroamericana",
        name: "Systems Engineering",
        startDate: { "year": 2016, "month": 1 },
        endDate: { "year": 2021, "month": 6 },
        description: "A career that has a professional academic profile with a technological focus, based on certified international references such as ACM, AIS and IEEE. Equipping individuals with a broad set of knowledge and skills, preparing them to address complex challenges in designing, developing, and managing large-scale systems.",
        tasks: [
            "Learnt about mutiple software development methodologies and paradigms.",
            "Applied the life cycle of a system, from conception and design to implementation, operation, and eventual retirement.",
            "Gathered, analyzed, and documented requirements from stakeholders.",
            "Defined system architecture models, and other project documentation.",
            "Developed desktop, mobile and web applications."
        ],
        hide: false,
    }
];

export default experiences;
