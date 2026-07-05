import type { PortfolioItem } from "../portfolioData"

const BotketingCrm: PortfolioItem = {
    id: "botketing-crm",
    title: {
        es: "Botketing",
        en: "Botketing"
    },
    slogan: {
        es: "SaaS vertical de alto rendimiento, solución CRM white-label",
        en: "High-scalable vertical SaaS, Whitelabel CRM Solution"
    },
    image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(29).png",
    featured: true,
    youtube_intro: "https://www.youtube.com/watch?v=dqFhC4X13wA",
    tech_stack: {
        es: [
            "TypeScript",
            "Node.js",
            "Next.js",
            "React",
            "Modificaciones de Webpack",
            "Tanstack React Query",
            "Webhooks",
            "Docker y Redis",
            "CDN con Cloudflare S3",
            "PostgreSQL",
            "Facturación vía Payphone/LemonSqueezy",
            "Facebook, WABA, Instagram Graph API",
            "API de OpenAI",
            "Cron Jobs",
            "Nginx",
            "Socket.IO",
            "OAuth 2.0",
            "Correo vía Resend"
        ],
        en: [
            "TypeScript",
            "Node.js",
            "Next.js",
            "React",
            "Webpack modifications",
            "Tanstack React Query",
            "Webhooks",
            "Docker & Redis",
            "CDN via Cloudflare S3",
            "PostgreSQL",
            "Billing via Payphone/LemonSqueezy",
            "Facebook, WABA, Instagram Graph API",
            "OpenAI API",
            "Cron Jobs",
            "Nginx",
            "Socket.IO",
            "OAuth 2.0",
            "Mail via Resend"
        ]
    },
    core_features: {
        es: [
            "Automatización de workflows",
            "Gestión de clientes",
            "Agendamiento",
            "Sistema de tickets",
            "Comunicación interna",
            "CRM white-label",
            "Funciones verticales (Veterinaria, Dentista)"
        ],
        en: [
            "Workflow automation",
            "Customer management",
            "Scheduling",
            "Ticket system",
            "Internal communication",
            "Whitelabel CRM",
            "Vertical features (Veterinary, Dentist)"
        ]
    },
    categories: [
        {
            title: {
                es: "Resultados",
                en: "Results"
            },
            subtitle: {
                es: "Casos de estudio y capturas de progreso",
                en: "Study cases and progress snapshots"
            },
            items: [
                {
                    title: {
                        es: "En desarrollo",
                        en: "In development"
                    },
                    subtitle: {
                        es: "Desarrollo pausado",
                        en: "Paused development"
                    },
                    image_src: "/portfolio-cosas/botketing/IMG_20250621_184627 (1).jpg",
                    bullets: {
                        es: [
                            "El producto muestra un fuerte potencial para clientes con procesos repetitivos y altos volúmenes de comunicación.",
                            "Los primeros prototipos ya generan interés en equipos de marketing locales."
                        ],
                        en: [
                            "The product shows strong potential for clients with repetitive processes and high communication volume.",
                            "The first prototypes already attract interest from local marketing teams."
                        ]
                    },
                    links: [],
                    gallery: []
                }
            ]
        },
        {
            title: {
                es: "Características",
                en: "Features"
            },
            subtitle: {
                es: "Capacidades clave diseñadas para automatización y eficiencia",
                en: "Core capabilities designed for seamless automation and efficiency"
            },
            items: [
                {
                    title: {
                        es: "Funciones horizontales",
                        en: "Horizontal features"
                    },
                    subtitle: {
                        es: "Herramientas centrales de automatización y colaboración",
                        en: "Core automation and collaboration tools"
                    },
                    image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(29).png",
                    bullets: {
                        es: [
                            "Diseñado para operar con rapidez y visibilidad total del estado de los procesos.",
                            "Incluye flujos de trabajo, agenda, tickets y comunicación interna."
                        ],
                        en: [
                            "Designed to run quickly while providing full visibility into process status.",
                            "Includes workflows, scheduling, tickets, and internal communication."
                        ]
                    },
                    links: [],
                    gallery: []
                },
                {
                    title: {
                        es: "Funciones verticales",
                        en: "Vertical features"
                    },
                    subtitle: {
                        es: "Paquetes de módulos específicos por industria",
                        en: "Industry-specific module packages"
                    },
                    image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(34).png",
                    bullets: {
                        es: [
                            "Adaptado a verticales como clínica dental y veterinaria.",
                            "Reduce la configuración manual y acelera la implementación."
                        ],
                        en: [
                            "Adapted to verticals such as dental and veterinary clinics.",
                            "Reduces manual setup and accelerates deployment."
                        ]
                    },
                    links: [],
                    gallery: []
                }
            ]
        }
    ]
}

export default BotketingCrm