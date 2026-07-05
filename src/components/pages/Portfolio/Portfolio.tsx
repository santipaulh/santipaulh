"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./Portfolio.module.css"
import langJson from "./Portfolio.language.json"
import Component from "@/components/Utilities/Component"
import { Portfolio, PortfolioCategory, PortfolioLink, PortfolioSectionItem } from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"

type PortfolioCardContent = {
    title: string
    subtitle?: string
    image_src: string
    bullets: string[]
    links?: PortfolioLink[]
}

const PortfolioCard = ({
    item,
    onPrimaryAction,
    showPrimaryAction = false,
    titleSize = "18px",
    subtitleSize = "14px",
    lang
}: {
    item: PortfolioCardContent
    onPrimaryAction?: () => void
    showPrimaryAction?: boolean
    titleSize?: string
    subtitleSize?: string,
    lang: AvailableLanguages
}) => (
    <div className="overflow-hidden rounded-lg border border-[#e8e8e8] bg-white shadow-sm">
        <div className="flex h-full flex-col border-l-8 border-(--homepage-color-1) p-5 lg:flex-row">
            <div className="flex-shrink-0 lg:w-1/2">
                <img
                    src={item.image_src}
                    alt={item.title}
                    className="h-[350px] w-full rounded-lg object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col gap-5 p-4 lg:p-6">
                <div className="flex flex-col gap-1">
                    <Component.Text fontWeight="600" textSize={titleSize} color="2">
                        {item.title}
                    </Component.Text>
                    {item.subtitle && (
                        <Component.Text fontWeight="400" textSize={subtitleSize} color="2">
                            {item.subtitle}
                        </Component.Text>
                    )}
                </div>

                <div className="flex flex-col gap-2 items-start">
                    {item.bullets.map((bullet, idx) => (
                        <Component.Text
                            key={`${idx}-123123`}
                            fontWeight="400"
                            textSize="14px"
                            color="2"
                            style="bullet-point"
                        >
                            {bullet}
                        </Component.Text>
                    ))}
                </div>

                {item.links && item.links.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                        {item.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md border border-(--homepage-color-1) px-4 py-2 text-sm font-semibold text-(--homepage-color-1) transition-opacity hover:opacity-80"
                            >
                                <Component.Text
                                    color="3"
                                    textSize="14px"
                                    fontWeight="600"
                                >
                                    {link.text[lang]}
                                </Component.Text>
                            </a>
                        ))}
                    </div>
                ) : null}

                {showPrimaryAction && onPrimaryAction && (
                    <Component.Button
                        action={{
                            type: "click",
                            onClick: onPrimaryAction
                        }}
                        text={lang === "es" ? "Ver mas" : "See more"}
                        color="2"
                    />
                )}
            </div>
        </div>
    </div>
)

export default function PortfolioPage({
    portfolioId,
    lang
}: {
    portfolioId: string
    lang: AvailableLanguages
}) {
    const portfolio = Portfolio.getPortfolioItem(portfolioId)
    const [
        selectedItem,
        setSelectedItem
    ] = useState<PortfolioSectionItem | null>(null)
    const closeModal = () => setSelectedItem(null)

    useEffect(() => {
        if (portfolio !== null) return
        alert(langJson[lang].notFound)
    }, [
        portfolio
    ])

    const renderSectionCards = (items: PortfolioSectionItem[]) => (
        <div className="flex flex-col gap-2">
            {items.map((item, idx) => (
                <PortfolioCard
                    key={`${idx}-123192810931029`}
                    item={{
                        title: item.title[lang],
                        subtitle: item.subtitle[lang],
                        image_src: item.image_src,
                        bullets: item.bullets[lang],
                        links: item.links
                    }}
                    lang={lang}
                    onPrimaryAction={() => setSelectedItem(item)}
                    showPrimaryAction={Boolean(item.gallery && item.gallery.length > 0)}
                />
            ))}
        </div>
    )

    const renderCategories = (categories: PortfolioCategory[]) => (
        <div className="flex flex-col gap-8">
            {categories.map((category, idx) => (
                <div key={`${idx}-1231231231231`} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Component.Text fontWeight="600" textSize="30px" color="2">
                            {category.title[lang]}
                        </Component.Text>
                        <Component.Text fontWeight="600" textSize="20px" color="2" style="quote">
                            {category.subtitle[lang]}
                        </Component.Text>
                    </div>
                    {renderSectionCards(category.items)}
                </div>
            ))}
        </div>
    )

    if (!portfolio) return null

    return (
        <div className={styles["homepage"]}>
            <div className="relative">
                <div className={styles["background-hero-backdrop"]} />
                <div
                    className={styles["background-hero-foto"]}
                    style={{ backgroundImage: `url(${portfolio.image_src})` }}
                />
            </div>

            <div className={`${styles["sections-container"]}`}>
                <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto flex-1 flex flex-col gap-8 mb-20">
                    <div className="relative min-h-[320px] overflow-hidden rounded-(--rules-page-dashboard-roounded_border_corners-1) shadow-md">
                        <img
                            src={portfolio.image_src}
                            alt={portfolio.title[lang]}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.78),rgba(0,0,0,0.35))]" />
                        <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:px-8 md:min-h-[360px]">
                            <Component.Text fontWeight="700" textSize="48px" color="1" shadow={true}>
                                {portfolio.title[lang]}
                            </Component.Text>
                            <Component.Text fontWeight="400" textSize="18px" color="1" shadow={true}>
                                {portfolio.slogan[lang]}
                            </Component.Text>
                            <Link
                                href={`/${lang}`}
                                className="rounded-md border border-white px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            >
                                <Component.Text
                                    color="1"
                                    textSize="14px"
                                    fontWeight="600"
                                >
                                    {lang === "es" ? "← Volver" : "← Back"}
                                </Component.Text>
                            </Link>
                        </div>
                    </div>

                    {portfolio.tech_stack[lang].length > 0 ? (
                        <Component.Card backgroundColor="2" className="p-6">
                            <div className="flex flex-col gap-3">
                                <Component.Text fontWeight="600" textSize="24px" color="1">
                                    {langJson[lang].techStack}
                                </Component.Text>
                                <div className="flex flex-wrap gap-2">
                                    {portfolio.tech_stack[lang].map((item, idx) => (
                                        <span
                                            key={`${idx}-12378179ds78192`}
                                            className="rounded-full border border-white bg-white/10 px-3 py-2 text-sm font-medium text-white"
                                        >
                                            <Component.Text
                                                color="1"
                                                textSize="14px"
                                                fontWeight="500"
                                            >
                                                {item}
                                            </Component.Text>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Component.Card>
                    ) : null}
                    {portfolio.core_features[lang].length > 0 ? (
                        <Component.Card backgroundColor="2" className="p-6">
                            <div className="flex flex-col gap-3">
                                <Component.Text fontWeight="600" textSize="24px" color="1">
                                    {langJson[lang].coreFeatures}
                                </Component.Text>
                                <div className="flex flex-wrap gap-2">
                                    {portfolio.core_features[lang].map((item, idx) => (
                                        <span
                                            key={`${idx}-3123123123121312`}
                                            className="rounded-full border border-white bg-white/10 px-3 py-2 text-sm font-medium text-white"
                                        >
                                            <Component.Text
                                                color="1"
                                                textSize="14px"
                                                fontWeight="500"
                                            >
                                                {item}
                                            </Component.Text>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Component.Card>
                    ) : null}

                    {renderCategories(portfolio.categories)}
                </div>
            </div>

            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="max-h-[90vh] w-full max-w-[1200px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <Component.Text fontWeight="700" textSize="24px" color="2">
                                {selectedItem.title[lang]}
                            </Component.Text>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="rounded-full border border-(--homepage-color-1) px-3 py-1 text-sm font-semibold text-(--homepage-color-1) transition-opacity hover:opacity-80"
                            >
                                <Component.Text
                                    color="3"
                                    textSize="14px"
                                    fontWeight="600"
                                >
                                    {lang === "es" ? "Cerrar" : "Close"}
                                </Component.Text>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            {!!selectedItem.gallery ? (
                                selectedItem.gallery.map((entry, index) => (
                                    <PortfolioCard
                                        key={`123123123211-${index}`}
                                        item={{
                                            title: entry.title[lang],
                                            image_src: entry.image_src,
                                            bullets: entry.bullets[lang],
                                            links: []
                                        }}
                                        lang={lang}
                                        titleSize="16px"
                                    />
                                ))
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}