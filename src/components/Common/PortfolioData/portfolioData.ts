import type { AvailableLanguages } from "@/components/assets/data"

export interface PortfolioItem {
    id: string
    title: string
    slogan: string
    image_src: string
    featured?: boolean
    youtube_intro: string | null
    tech_stack: string[]
    core_features: string[]
    categories: PortfolioCategory[]
}

export interface PortfolioLink {
    text: string
    href: string
}

export interface PortfolioCategory {
    title: string
    subtitle: string
    items: PortfolioSectionItem[]
}

export interface PortfolioSectionItem {
    title: string
    subtitle: string
    image_src: string
    bullets: string[]
    links: PortfolioLink[]
    gallery?: {
        image_src: string
        title?: string
        bullets: string[]
    }[]
}

export interface FuturePortfolio {
    title: string
    problem: string
    expected_features: string[]
    expected_results: string[]
    expected_tech_stack: string[]
}

import portfolioDataJson from "./portfolioData.json"
import itemsFuturePortfolioJson from "./itemsFuturePortfolio.json"

const portfolioDataByLanguage = portfolioDataJson as {
    es: PortfolioItem[]
    en: PortfolioItem[]
}

export const getPortfolio = (lang: AvailableLanguages = "en"): PortfolioItem[] => {
    return portfolioDataByLanguage[lang]
}

export const getPortfolioItem = (id: string, lang: AvailableLanguages = "en"): PortfolioItem | null => {
    const collection = portfolioDataByLanguage[lang]

    return collection.find((x) => x.id === id) ?? null
}

export const getFuturePortfolioList = (lang: AvailableLanguages): FuturePortfolio[] => {
    return itemsFuturePortfolioJson[lang]
}