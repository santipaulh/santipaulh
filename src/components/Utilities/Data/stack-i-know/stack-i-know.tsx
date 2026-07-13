import { ItemSkillIconsKeys } from "../../Data/icons/icons"
import { AvailableLanguages } from "../Data"

type KnownTechStackItem = {
    category: string
    icons: (
        {
            type: "skill-icon"
            icon: ItemSkillIconsKeys
        }
        | {
            type: "text"
            text: string
        }
    )[]
}

type KnownTechStackType = KnownTechStackItem[]

const KnownTechStack: Record<AvailableLanguages, KnownTechStackType> = {
    en: [
        {
            category: "backend",
            icons: [
                { type: "skill-icon", icon: "NodeJS" },
                { type: "skill-icon", icon: "Nginx" },
                { type: "skill-icon", icon: "DiscordJS" },
                { type: "skill-icon", icon: "GraphQL" },
                { type: "text", text: "Webhooks" },
                { type: "text", text: "Socket.IO" },
                { type: "text", text: "OAuth 2.0" },
                { type: "text", text: "Cron Jobs" }
            ]
        },
        {
            category: "frontend",
            icons: [
                { type: "skill-icon", icon: "React" },
                { type: "skill-icon", icon: "NextJS" },
                { type: "skill-icon", icon: "Webpack" },
                { type: "text", text: "TanStack React Query" },
                { type: "text", text: "HTML5" }
            ]
        },
        {
            category: "languages",
            icons: [
                { type: "skill-icon", icon: "TypeScript" },
                { type: "skill-icon", icon: "JavaScript" }
            ]
        },
        {
            category: "bases de datos",
            icons: [
                { type: "skill-icon", icon: "PostgreSQL" },
                { type: "skill-icon", icon: "MongoDB" },
                { type: "skill-icon", icon: "Redis" },
                { type: "skill-icon", icon: "SQLite" }
            ]
        },
        {
            category: "devops",
            icons: [
                { type: "skill-icon", icon: "Docker" },
                { type: "skill-icon", icon: "Cloudflare" },
                { type: "skill-icon", icon: "GCP" },
                { type: "text", text: "CDN" },
                { type: "text", text: "CI/CD" }
            ]
        },
        {
            category: "otros",
            icons: [
                { type: "text", text: "Botpress" },
                { type: "text", text: "Zapier" },
                { type: "text", text: "Make" },
                { type: "text", text: "GoHighLevel CRM" },
                { type: "text", text: "Google Calendar API" },
                { type: "text", text: "Meta Ads" },
                { type: "text", text: "Resend" }
            ]
        }
    ],
    es: [
        {
            category: "backend",
            icons: [
                { type: "skill-icon", icon: "NodeJS" },
                { type: "skill-icon", icon: "Nginx" },
                { type: "skill-icon", icon: "DiscordJS" },
                { type: "skill-icon", icon: "GraphQL" },
                { type: "text", text: "Webhooks" },
                { type: "text", text: "Socket.IO" },
                { type: "text", text: "OAuth 2.0" },
                { type: "text", text: "Cron Jobs" }
            ]
        },
        {
            category: "frontend",
            icons: [
                { type: "skill-icon", icon: "React" },
                { type: "skill-icon", icon: "NextJS" },
                { type: "skill-icon", icon: "Webpack" },
                { type: "text", text: "TanStack React Query" },
                { type: "text", text: "HTML5" }
            ]
        },
        {
            category: "languages",
            icons: [
                { type: "skill-icon", icon: "TypeScript" },
                { type: "skill-icon", icon: "JavaScript" }
            ]
        },
        {
            category: "bases de datos",
            icons: [
                { type: "skill-icon", icon: "PostgreSQL" },
                { type: "skill-icon", icon: "MongoDB" },
                { type: "skill-icon", icon: "Redis" },
                { type: "skill-icon", icon: "SQLite" }
            ]
        },
        {
            category: "devops",
            icons: [
                { type: "skill-icon", icon: "Docker" },
                { type: "skill-icon", icon: "Cloudflare" },
                { type: "skill-icon", icon: "GCP" },
                { type: "text", text: "CDN" },
                { type: "text", text: "CI/CD" }
            ]
        },
        {
            category: "otros",
            icons: [
                { type: "text", text: "Botpress" },
                { type: "text", text: "Zapier" },
                { type: "text", text: "Make" },
                { type: "text", text: "GoHighLevel CRM" },
                { type: "text", text: "Google Calendar API" },
                { type: "text", text: "Meta Ads" },
                { type: "text", text: "Resend" }
            ]
        }
    ]
}

export default KnownTechStack