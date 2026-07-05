import { AvailableLanguages } from "../../Data";
import { FuturePortfolio } from "../portfolioData";

const OmniInboxEmail: FuturePortfolio = {
    title: {
        en: "SaaS - Omni-Inbox Email & Organization",
        es: "SaaS - Omni-Inbox Mail & Organización"
    },
    problem: {
        en: "As both a student and freelancer, I use multiple services including institutional email accounts, personal email accounts, note-taking applications, study tools, and more. My long-term goal is to build a personal productivity application that gradually evolves into a commercial or private SaaS platform for students, executives, and educational institutions.",
        es: "Siendo estudiante y freelancer, utilizo varias instancias entre correos institucionales, correos personales, aplicaciones para notas, aplicaciones de estudio, etc. Mi plan ambicioso será crear una aplicación de productividad personal, que, a medida del tiempo, desemboque en un SaaS comercial o privado para estudiantes, ejecutivos e instituciones académicas."
    },
    expected_features: {
        en: [
            "Calendars: Built-in calendar with integration support for Google Calendar, Microsoft, and other providers.",
            "Notes: Integrated note-taking system inspired by Notion, featuring multi-page workspaces and Markdown blocks.",
            "Emails: Unified omnichannel inbox that consolidates multiple email accounts into a single interface."
        ],
        es: [
            "Calendarios: Integrado con opción a vincular con Google Calendar, Microsoft, etc.",
            "Notas: Sistema integrado de notas inspirado en Notion, con múltiples páginas y bloques Markdown.",
            "E-Mails: Bandeja de entrada unificada para reunir múltiples cuentas de correo en un solo lugar."
        ]
    },
    expected_results: {
        en: [
            "Reduced time spent switching between applications.",
            "Centralized workflow to maintain momentum while completing tasks.",
            "Improved focus by reducing mental friction through a unified workspace."
        ],
        es: [
            "Ahorro de tiempo al evitar cambiar constantemente entre aplicaciones.",
            "Centralización del trabajo para mantener un mejor ritmo al realizar tareas.",
            "Mayor enfoque al reducir la fricción mental mediante una aplicación unificada."
        ]
    },
    expected_tech_stack: {
        en: [
            "Language: Java",
            "Desktop: JavaFX",
            "Backend: Spring Boot",
            "Database & Caching: PostgreSQL, Redis",
            "Authentication: JWT, OAuth 2.0",
            "External APIs: Gmail API, Microsoft Graph API, IMAP",
            "Build & Infrastructure: Gradle, Docker",
            "Platforms: Linux, Windows"
        ],
        es: [
            "Language: Java",
            "Desktop: JavaFX",
            "Backend: Spring Boot",
            "Database & caching: PostgreSQL, Redis",
            "Authentication: JWT, OAuth 2.0",
            "External APIs: Gmail API, Microsoft Graph API, IMAP",
            "Build & infrastructure: Gradle, Docker",
            "Platforms: Linux, Windows"
        ]
    }
};

export default OmniInboxEmail