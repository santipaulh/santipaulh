"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import langJson from "./Portfolio.language.json"
import Component from "@/components/Utilities/Component"
import { Portfolio, PortfolioCategory, PortfolioLink, PortfolioSectionItem } from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import FaviconPNG from "../../../../public/favicon.png"

type PortfolioCardContent = {
    title: string
    image_src: string
    bullets: string[]
    links?: PortfolioLink[]
}

const toYouTubeEmbedUrl = (url: string): string | null => {
    try {
        const parsedUrl = new URL(url)

        if (parsedUrl.hostname.includes("youtu.be")) {
            const idFromPath = parsedUrl.pathname.replace("/", "")
            return idFromPath ? `https://www.youtube.com/embed/${idFromPath}` : null
        }

        if (parsedUrl.hostname.includes("youtube.com")) {
            const watchId = parsedUrl.searchParams.get("v")
            if (watchId) return `https://www.youtube.com/embed/${watchId}`
        }

        return null
    } catch {
        return null
    }
}

const PortfolioCard = ({
    item,
    color = "1",
    onPrimaryAction,
    showPrimaryAction = false,
    titleSize = "18px",
    lang
}: {
    item: PortfolioCardContent
    color?: "1" | "2"
    onPrimaryAction?: () => void
    showPrimaryAction?: boolean
    titleSize?: string
    lang: AvailableLanguages
}) => (
    <Component.Card
        color={color}
        className="flex w-full flex-col gap-4 overflow-hidden p-5"
    >
        <div className="flex h-full flex-col gap-4 lg:flex-row">
            <div className="shrink-0 overflow-hidden rounded-(--homepage-rounded-1) lg:w-1/2">
                <img
                    src={item.image_src}
                    alt={item.title}
                    className="h-[350px] w-full rounded-lg object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col gap-5 lg:p-2">
                <div className="flex flex-col gap-1">
                    <Component.Text
                        fontWeight="600"
                        textSize={titleSize}
                        color="1"
                    >
                        {item.title}
                    </Component.Text>
                </div>

                <div className="flex flex-col items-start gap-2">
                    {item.bullets.map((bullet, idx) => (
                        <Component.Tag
                            key={`${idx}-portfolio-bullet`}
                            type="text-with-ball"
                            ballColor="2"
                            bgColor="2"
                            text={bullet}
                        >
                        </Component.Tag>
                    ))}
                </div>

                {((item.links && item.links.length > 0) || (showPrimaryAction && onPrimaryAction)) ? (
                    <div className="flex flex-col items-start justify-start gap-3">
                        {item.links && item.links.length > 0 ? (
                            <div className="flex flex-row flex-wrap items-start justify-start gap-3">
                                {item.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-md border px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
                                        style={{
                                            borderColor: "var(--homepage-color-1)",
                                            color: "var(--homepage-color-1)"
                                        }}
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

                        {showPrimaryAction && onPrimaryAction ? (
                            <div className="flex flex-row items-start justify-start">
                                <Component.Button
                                    action={{
                                        type: "click",
                                        onClick: onPrimaryAction
                                    }}
                                    text={langJson[lang].seeMore}
                                    color="1"
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}


            </div>
        </div>
    </Component.Card>
)

export default function PortfolioPage({
    portfolioId,
    lang
}: {
    portfolioId: string
    lang: AvailableLanguages
}) {
    const portfolio = Portfolio.getPortfolioItem(portfolioId)
    const [openedGalleryKey, setOpenedGalleryKey] = useState<string | null>(null)

    useEffect(() => {
        if (portfolio !== null) return
        alert(langJson[lang].notFound)
    }, [
        portfolio
    ])

    const renderSectionCards = (items: PortfolioSectionItem[], categoryIndex: number) => (
        <div className="flex flex-col gap-4">
            {items.map((item, idx) => (
                <div key={`${categoryIndex}-${idx}-portfolio-card`} className="flex flex-col gap-3">
                    <PortfolioCard
                        item={{
                            title: item.title[lang],
                            image_src: item.image_src,
                            bullets: item.bullets[lang],
                            links: item.links
                        }}
                        lang={lang}
                        onPrimaryAction={() => {
                            const currentKey = `${categoryIndex}-${idx}`
                            setOpenedGalleryKey((previous) => previous === currentKey ? null : currentKey)
                        }}
                        showPrimaryAction={Boolean(item.gallery && item.gallery.length > 0)}
                    />

                    {openedGalleryKey === `${categoryIndex}-${idx}` && item.gallery.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {item.gallery.map((entry, galleryIndex) => (
                                <PortfolioCard
                                    key={`${categoryIndex}-${idx}-gallery-${galleryIndex}`}
                                    item={{
                                        title: entry.title[lang],
                                        image_src: entry.image_src,
                                        bullets: entry.bullets[lang],
                                        links: entry.links
                                    }}
                                    color="2"
                                    lang={lang}
                                    titleSize="16px"
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )

    const renderCategories = (categories: PortfolioCategory[]) => (
        <div className="flex flex-col gap-8">
            {categories.map((category, idx) => (
                <div
                    key={`${idx}-portfolio-category`}
                    className="flex flex-col gap-4"
                >
                    <div className="flex flex-col gap-2">
                        <Component.Text
                            fontWeight="600"
                            textSize="30px"
                            color="1"
                        >
                            {category.title[lang]}
                        </Component.Text>
                    </div>
                    {renderSectionCards(category.items, idx)}
                </div>
            ))}
        </div>
    )

    if (!portfolio) return null

    const youtubeEmbedUrl = portfolio.presentation.youtube_intro
        ? toYouTubeEmbedUrl(portfolio.presentation.youtube_intro)
        : null

    return (
        <div className="flex min-h-screen flex-col gap-8 bg-black pb-12">
            <div className="relative flex flex-col">
                <div className="absolute top-[10%] flex h-[120px] w-full bg-black" />
                <Component.Card className="relative mx-(--homepage-width-danger-zone) my-6 flex flex-row justify-between px-6 py-4">
                    <div className="flex flex-row gap-3">
                        <Component.Text
                            fontWeight="500"
                            textSize="14px"
                            color="2"
                        >
                            <Image
                                src={FaviconPNG}
                                alt="favicon"
                                width={50}
                                height={50}
                            />
                        </Component.Text>
                        <div className="flex flex-col items-start justify-center">
                            <Component.Text
                                fontWeight="500"
                                textSize="14px"
                                color="1"
                            >
                                Santiago Paul H.
                            </Component.Text>
                            <Component.Text
                                fontWeight="500"
                                textSize="12px"
                                color="gradient-3"
                            >
                                Desarrollador de Software
                            </Component.Text>
                        </div>
                    </div>

                    <div className="flex flex-row gap-9">
                        <Component.Button
                            action={{
                                type: "ref",
                                href: `/${lang}`
                            }}
                            color="1"
                            text={lang === "es" ? "Volver" : "Back"}
                        />
                    </div>
                </Component.Card>

                <div className="mx-(--homepage-width-danger-zone) mt-1">
                    <Component.Card
                        color="1"
                        className="relative min-h-[320px] w-full overflow-hidden"
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-(--homepage-rounded-1)">
                            <img
                                src={portfolio.presentation.image_src}
                                alt={portfolio.presentation.title[lang]}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.84),rgba(0,0,0,0.38))]" />
                            <div className="relative flex min-h-[320px] flex-col items-center justify-center gap-4 px-5 py-8 text-center">
                                <Component.Tag
                                    type="text-with-ball"
                                    ballColor="1"
                                    bgColor="2"
                                    text={portfolio.presentation.tag[lang]}
                                />
                                <Component.Text
                                    fontWeight="700"
                                    textSize="44px"
                                    color="1"
                                    shadow={true}
                                >
                                    {portfolio.presentation.title[lang]}
                                </Component.Text>
                                <Component.Text
                                    fontWeight="400"
                                    textSize="18px"
                                    color="1"
                                    shadow={true}
                                >
                                    {portfolio.presentation.slogan[lang]}
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
                                        {lang === "es" ? "Volver" : "Back"}
                                    </Component.Text>
                                </Link>
                            </div>
                        </div>
                    </Component.Card>
                </div>
            </div>

            <div className="mx-(--homepage-width-danger-zone) flex flex-col gap-8">

                {youtubeEmbedUrl ? (
                    <Component.Card
                        color="2"
                        className="p-6 flex-col gap-3"
                    >
                        <Component.Text
                            fontWeight="600"
                            textSize="24px"
                            color="1"
                        >
                            {lang === "es" ? "Video de introduccion" : "Introduction video"}
                        </Component.Text>
                        <div className="overflow-hidden rounded-(--homepage-rounded-1)">
                            <iframe
                                src={youtubeEmbedUrl}
                                title={lang === "es" ? "Video de YouTube" : "YouTube video"}
                                className="aspect-video w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </Component.Card>
                ) : null}

                {portfolio.data.tech_stack[lang].length > 0 ? (
                    <Component.Card
                        color="2"
                        className="p-6"
                    >
                        <div className="flex flex-col gap-3">
                            <Component.Text
                                fontWeight="600"
                                textSize="24px"
                                color="1"
                            >
                                {langJson[lang].techStack}
                            </Component.Text>
                            <div className="flex flex-wrap gap-2">
                                {portfolio.data.tech_stack[lang].sort((x, y) =>
                                    (y.type === "skill-icons" ? 1 : 0) -
                                    (x.type === "skill-icons" ? 1 : 0)
                                ).map((item, idx) => (
                                    item.type === "skill-icons" ? (
                                        <Component.Tag
                                            key={`${idx}-portfolio-tech-stack`}
                                            type="custom-skills-icon"
                                            color="2"
                                            icon={item.icon}
                                        />
                                    ) : (
                                        <Component.Tag
                                            key={`${idx}-portfolio-tech-stack`}
                                            type="text-with-ball"
                                            ballColor="1"
                                            bgColor="2"
                                            text={item.text}
                                        />
                                    )
                                ))}
                            </div>
                        </div>
                    </Component.Card>
                ) : null}

                {portfolio.data.core_features[lang].length > 0 ? (
                    <Component.Card
                        color="2"
                        className="p-6"
                    >
                        <div className="flex flex-col gap-3">
                            <Component.Text
                                fontWeight="600"
                                textSize="24px"
                                color="1"
                            >
                                {langJson[lang].coreFeatures}
                            </Component.Text>
                            <div className="flex flex-wrap gap-2">
                                {portfolio.data.core_features[lang].map((item, idx) => (
                                    <Component.Tag
                                        key={`${idx}-portfolio-core-features`}
                                        type="text-with-ball"
                                        ballColor="2"
                                        bgColor="2"
                                        text={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </Component.Card>
                ) : null}

                <div className="flex flex-col gap-8">
                    {renderCategories(portfolio.data.categories)}
                </div>
            </div>

        </div>
    )
}