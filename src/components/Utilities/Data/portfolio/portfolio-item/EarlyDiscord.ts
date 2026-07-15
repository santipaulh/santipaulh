import type { PortfolioItem } from "../portfolioData"

const EarlyDiscord: PortfolioItem = {
    id: "early-days-discord-communities",
    presentation: {
        title: {
            es: "Mis inicios; Programador para Influencers",
            en: "Early Days; Developing for Influencers"
        },
        description: {
            es: "Etapa inicial construyendo bots, moderación y operaciones para comunidades masivas en Discord.",
            en: "Early stage building bots, moderation and operations for large Discord communities."
        },
        slogan: {
            es: "Automatización y moderación en comunidades activas.",
            en: "Automation and moderation in active communities."
        },
        simple_featured_features: {
            es: [
                "Cargo de Moderador, Administrador y Community Managment",
                "Gestor de eventos",
                "Desarrollo de bots para automatización",
                "Referentes influencers: Spreen y Aquino"
            ],
            en: [
                "Moderator, Administrator, and Community Management roles",
                "Event management",
                "Bot development for automation",
                "Influencer references: Spreen and Aquino"
            ]
        },
        image_src: "/portfolio-cosas/early-discord-days/imgdiscorddays.png",
        logo_src: "/old.cv-hero-pfp.jpg",
        youtube_intro: null,
        tag: {
            es: "Experiencia",
            en: "Experience"
        }
    },
    data: {
        tech_stack: {
            es: [
                { type: "skill-icons", icon: "NodeJS" },
                { type: "text", text: "JavaScript y TypeScript" },
                { type: "skill-icons", icon: "Redis" },
                { type: "text", text: "MongoDB con Mongoose" },
                { type: "skill-icons", icon: "SQLite" },
                { type: "skill-icons", icon: "Docker" },
                { type: "skill-icons", icon: "DiscordJS" },
                { type: "text", text: "Webhooks" },
                { type: "text", text: "Cron Jobs" }
            ],
            en: [
                { type: "skill-icons", icon: "NodeJS" },
                { type: "text", text: "JavaScript and TypeScript" },
                { type: "skill-icons", icon: "Redis" },
                { type: "text", text: "MongoDB via Mongoose" },
                { type: "skill-icons", icon: "SQLite" },
                { type: "skill-icons", icon: "Docker" },
                { type: "skill-icons", icon: "DiscordJS" },
                { type: "text", text: "Webhooks" },
                { type: "text", text: "Cron jobs" }
            ]
        },
        core_features: {
            es: [
                "Moderación automatizada",
                "Bots para comunidades",
                "Infraestructura estable",
                "Gestión de servidores grandes",
                "Edición de video",
                "Moderación manual",
                "Gestión de comunidad",
                "Ascenso a roles ejecutivos"
            ],
            en: [
                "Automated moderation",
                "Community bots",
                "Stable infrastructure",
                "Large server management",
                "Video editing",
                "Manual moderation",
                "Community management",
                "Promotion to executive roles"
            ]
        },
        categories: [
            {
                title: {
                    es: "Comunidades de Discord",
                    en: "Discord communities"
                },
                items: [
                    {
                        title: {
                            es: "Discord de AQUINO",
                            en: "AQUINO Discord"
                        },
                        image_src: "/portfolio-cosas/early-discord-days/Screenshot 2026-05-06 194015.png",
                        bullets: {
                            es: [
                                "Desarrollé automatizaciones para moderar contenido y apoyar a los administradores.",
                                "El trabajo ayudó a estabilizar la operación del servidor y mejorar la experiencia de los usuarios."
                            ],
                            en: [
                                "I built automations to moderate content and support administrators.",
                                "The work helped stabilize server operations and improve the user experience."
                            ]
                        },
                        links: [
                        ],
                        gallery: [
                            {
                                image_src: "/portfolio-cosas/early-discord-days/Screenshot%202026-07-01%20191954.png",
                                title: {
                                    es: "Canal de YouTube gestionado",
                                    en: "Managed YouTube channel"
                                },
                                bullets: {
                                    es: [
                                        "Canal gestionado durante la etapa de operación y soporte de comunidad."
                                    ],
                                    en: [
                                        "Channel managed during the operations and community support stage."
                                    ]
                                },
                                links: [
                                    {
                                        text: {
                                            es: "Canal de YouTube",
                                            en: "YouTube channel"
                                        },
                                        href: "https://youtube.com/c/AQUINOdiscord"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: {
                            es: "Discord de Spreen",
                            en: "Spreen Discord"
                        },
                        image_src: "/portfolio-cosas/early-discord-days/Screenshot 2026-05-06 194116.png",
                        bullets: {
                            es: [
                                "Implementé flujos automáticos para gestionar interacción y estructura de comunidad.",
                                "Mantuve una relación cercana con los admins y el equipo de contenido."
                            ],
                            en: [
                                "I implemented automated flows to manage interaction and community structure.",
                                "I maintained a close relationship with admins and the content team."
                            ]
                        },
                        links: [],
                        gallery: []
                    }
                ]
            },
            {
                title: {
                    es: "Proyectos",
                    en: "Projects"
                },
                items: [
                    {
                        title: {
                            es: "Bots adicionales",
                            en: "Additional bots"
                        },
                        image_src: "/portfolio-cosas/early-discord-days/imgdiscorddays.png",
                        bullets: {
                            es: [
                                "Abarcó varios servidores con necesidades diferentes de moderación y engagement.",
                                "La experiencia reforzó mi conocimiento de escalabilidad y operación de bots."
                            ],
                            en: [
                                "It covered several servers with different needs for moderation and engagement.",
                                "The experience strengthened my knowledge of bot scalability and operations."
                            ]
                        },
                        links: [
                            {
                                text: {
                                    es: "Mi GitHub",
                                    en: "My GitHub"
                                },
                                href: "https://github.com/xertozer"
                            }
                        ],
                        gallery: []
                    }
                ]
            }
        ]
    }
}

export default EarlyDiscord