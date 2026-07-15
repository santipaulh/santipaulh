import BotketingCrm from "./portfolio-item/BotketingCrm"
import EarlyDaysDiscordCommunities from "./portfolio-item/EarlyDiscord"
import MarketingAgency2024 from "./portfolio-item/Marketing2024"
import { AvailableLanguages } from "../Data"
import { ItemSkillIconsKeys } from "../icons/icons"

export type PortfolioTechStackItem =
    | {
        type: "skill-icons"
        icon: ItemSkillIconsKeys
    }
    | {
        type: "text"
        text: string
    }

export interface PortfolioPresentation {
    title: Record<AvailableLanguages, string>
    description: Record<AvailableLanguages, string>
    slogan: Record<AvailableLanguages, string>
    simple_featured_features: Record<AvailableLanguages, string[]>
    image_src: string
    logo_src: string
    youtube_intro: string | null
    tag: Record<AvailableLanguages, string>
}

export interface PortfolioDataBlock {
    tech_stack: Record<AvailableLanguages, PortfolioTechStackItem[]>
    core_features: Record<AvailableLanguages, string[]>
    categories: PortfolioCategory[]
}

export interface PortfolioItem {
    id: string
    presentation: PortfolioPresentation
    data: PortfolioDataBlock
}

export interface PortfolioLink {
    text: Record<AvailableLanguages, string>
    href: string
}

export interface PortfolioCategory {
    title: Record<AvailableLanguages, string>
    items: PortfolioSectionItem[]
}

export interface PortfolioSectionItem {
    title: Record<AvailableLanguages, string>
    image_src: string
    bullets: Record<AvailableLanguages, string[]>
    links: PortfolioLink[]
    gallery: {
        image_src: string
        title: Record<AvailableLanguages, string>
        bullets: Record<AvailableLanguages, string[]>
        links: PortfolioLink[]
    }[]
}

export interface FuturePortfolio {
    title: Record<AvailableLanguages, string>
    problem: Record<AvailableLanguages, string>
    expected_features: Record<AvailableLanguages, string[]>
    expected_results: Record<AvailableLanguages, string[]>
    expected_tech_stack: Record<AvailableLanguages, string[]>
}

const PortfolioItems: PortfolioItem[] = [
    BotketingCrm,
    EarlyDaysDiscordCommunities,
    MarketingAgency2024
]

const PortfolioFutures: FuturePortfolio[] = []

export const Portfolio = {
    getPortfolio: (): PortfolioItem[] => {
        return PortfolioItems
    },
    getPortfolioItem: (id: string): PortfolioItem | null => {
        return PortfolioItems.find((item) => item.id === id) ?? null
    },
    getFuturePortfolioList: (): FuturePortfolio[] => {
        return PortfolioFutures
    }
}
