import type { PortfolioItem } from "../portfolioData"

const BotketingCrm: PortfolioItem = {
    id: "botketing-crm",
    presentation: {
        title: {
            es: "Botketing",
            en: "Botketing"
        },
        description: {
            es: "CRM SaaS white-label enfocado en automatización comercial y operación multicanal.",
            en: "A white-label SaaS CRM focused on commercial automation and multichannel operations."
        },
        slogan: {
            es: "SaaS vertical de alto rendimiento, solución CRM white-label",
            en: "High-scalable vertical SaaS, Whitelabel CRM Solution"
        },
        simple_featured_features: {
            es: [
                "Worklfows de automatización HTML5",
                "Agenda y calendario de citas",
                "Sistema de tickets",
                "Multicanal por WhatsApp, Instagram, FB Graph API",
                "Módulos verticales: Veterinarios (pacientes) y Dentistas (odontograma)"
            ],
            en: [
                "HTML5 automation workflows",
                "Appointment scheduling and calendar",
                "Ticketing system",
                "Multichannel support via WhatsApp, Instagram, and FB Graph API",
                "Vertical modules: Veterinary (patients) and Dental (odontogram)"
            ]
        },
        image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(27).png",
        logo_src: "/old.cv-hero-pfp.jpg",
        youtube_intro: "https://www.youtube.com/watch?v=IsxZiCtEEy4",
        tag: {
            es: "Proyecto independiente",
            en: "Solo project"
        }
    },
    data: {
        tech_stack: {
            es: [
                { type: "skill-icons", icon: "TypeScript" },
                { type: "skill-icons", icon: "NodeJS" },
                { type: "skill-icons", icon: "NextJS" },
                { type: "skill-icons", icon: "React" },
                { type: "skill-icons", icon: "Webpack" },
                { type: "text", text: "Tanstack React Query" },
                { type: "text", text: "Webhooks" },
                { type: "skill-icons", icon: "Docker" },
                { type: "skill-icons", icon: "Redis" },
                { type: "text", text: "CDN con Cloudflare S3" },
                { type: "skill-icons", icon: "PostgreSQL" },
                { type: "text", text: "Facturación vía Payphone/LemonSqueezy" },
                { type: "text", text: "Facebook, WABA, Instagram Graph API" },
                { type: "text", text: "API de OpenAI" },
                { type: "text", text: "Cron Jobs" },
                { type: "skill-icons", icon: "Nginx" },
                { type: "text", text: "Socket.IO" },
                { type: "text", text: "OAuth 2.0" },
                { type: "text", text: "Correo vía Resend" }
            ],
            en: [
                { type: "skill-icons", icon: "TypeScript" },
                { type: "skill-icons", icon: "NodeJS" },
                { type: "skill-icons", icon: "NextJS" },
                { type: "skill-icons", icon: "React" },
                { type: "skill-icons", icon: "Webpack" },
                { type: "text", text: "Tanstack React Query" },
                { type: "text", text: "Webhooks" },
                { type: "skill-icons", icon: "Docker" },
                { type: "skill-icons", icon: "Redis" },
                { type: "text", text: "CDN via Cloudflare S3" },
                { type: "skill-icons", icon: "PostgreSQL" },
                { type: "text", text: "Billing via Payphone/LemonSqueezy" },
                { type: "text", text: "Facebook, WABA, Instagram Graph API" },
                { type: "text", text: "OpenAI API" },
                { type: "text", text: "Cron Jobs" },
                { type: "skill-icons", icon: "Nginx" },
                { type: "text", text: "Socket.IO" },
                { type: "text", text: "OAuth 2.0" },
                { type: "text", text: "Mail via Resend" }
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
            /*{
                title: {
                    es: "Resultados",
                    en: "Results"
                },
                items: [
                    {
                        title: {
                            es: "En desarrollo",
                            en: "In development"
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
                        gallery: [
                        ]
                    }
                ]
            },*/
            {
                title: {
                    es: "Características",
                    en: "Features"
                },
                items: [
                    {
                        title: {
                            es: "Funciones horizontales",
                            en: "Horizontal features"
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
                        gallery: [
                            {
                                image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(30).png",
                                title: {
                                    es: "Inbox Whatsapp, Facebook, Instagram",
                                    en: "WhatsApp, Facebook, and Instagram inbox"
                                },
                                bullets: {
                                    es: [
                                        "Inbox unificado para conversaciones entrantes en canales sociales y mensajería."
                                    ],
                                    en: [
                                        "Unified inbox for incoming conversations across social and messaging channels."
                                    ]
                                },
                                links: []
                            },
                            {
                                image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(31).png",
                                title: {
                                    es: "Inbox de Ticketmail",
                                    en: "Ticketmail inbox"
                                },
                                bullets: {
                                    es: [
                                        "Bandeja para ticketing por correo con seguimiento centralizado."
                                    ],
                                    en: [
                                        "Email ticketing inbox with centralized follow-up."
                                    ]
                                },
                                links: []
                            },
                            {
                                image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(32).png",
                                title: {
                                    es: "Calendarios de reservas y citas de clientes",
                                    en: "Customer booking and appointment calendars"
                                },
                                bullets: {
                                    es: [
                                        "Gestión de disponibilidad, reservas y coordinación de citas para equipos comerciales."
                                    ],
                                    en: [
                                        "Availability, booking, and appointment coordination for sales teams."
                                    ]
                                },
                                links: []
                            },
                            {
                                image_src: "/portfolio-cosas/botketing/Add%20a%20heading%20(33).png",
                                title: {
                                    es: "Manejo de roles, gestión de empleados y permisos",
                                    en: "Role handling, staff management, and permissions"
                                },
                                bullets: {
                                    es: [
                                        "Control de acceso por roles para organizar equipos y responsabilidades operativas."
                                    ],
                                    en: [
                                        "Role-based access control to organize teams and operational responsibilities."
                                    ]
                                },
                                links: []
                            }
                        ]
                    },
                    {
                        title: {
                            es: "Funciones verticales",
                            en: "Vertical features"
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
}

export default BotketingCrm
