"use client"
import styles from "./Home.module.css"
import SectionHero from "./SectionHero"
import translations from "./Home.language.json"
import SectionPortfolio from "./SectionPortfolio"
import SectionFutures from "./SectionFutures"
import { ReactNode } from "react"
import SectionLanguage from "./SectionLanguage"
import Component from "@/components/Utilities/Component"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import FaviconPNG from "../../../../public/favicon.png"

export default function HomePage({ lang = 'en' }: {
    lang: AvailableLanguages
}) {
    const t = translations[lang]
    const SectionMemo = ({
        title,
        subtitle,
        body
    }: {
        title: string
        subtitle: string
        body: ReactNode
    }) => (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <Component.Text fontWeight="600" textSize="15px" color="gradient-3">
                        {title.toUpperCase()}
                    </Component.Text>
                    <Component.Text style="quote" fontWeight="600" textSize="24px" color="1">
                        {subtitle}
                    </Component.Text>
                </div>
                {/* <div className="flex bg-[var(--homepage-color-2)] h-[2px] opacity-40" /> */}
            </div>
            {body}
        </div>
    )

    if (!t) return null
    if (!t.portfolio) return null
    return (
        <div className="h-full flex flex-col gap-7 bg-black min-h-[100vh]">
            {/* contenedor header + hero */}
            <div className="relative flex flex-col">
                {/* coso del header */}
                <div className="absolute flex h-[120px] w-full top-[10%] bg-black" />
                <Component.Card className="relative mx-[var(--homepage-width-danger-zone)] my-6 py-4 px-6 flex flex-row justify-between">
                    {/* favicon y titulo */}
                    <div className="flex flex-row gap-3">
                        <Component.Text
                            fontWeight="500"
                            textSize="14px"
                            color="2"
                        >
                            <Image src={FaviconPNG} alt={"favicon"} width={50} height={50} />
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

                    {/* header buttons */}
                    <div className="flex flex-row gap-9">
                        {/* <div className="flex flex-row gap-2 items-center justify-center">
                                <Component.Text
                                    fontWeight="600"
                                    textSize="12px"
                                    color="1"
                                    style=""
                                >
                                    Building systems
                                </Component.Text>
                            </div> */}
                        <Component.Button
                            action={{
                                type: "ref",
                                href: t.resume.cvUrl
                            }}
                            color="1"
                            text={t.resume.cvText}
                        />
                    </div>
                </Component.Card>
                <SectionHero lang={lang} />
            </div>

            {/* body */}
            <div className="mx-[var(--homepage-width-danger-zone)] flex flex-col gap-9">
                <SectionLanguage lang={lang} />
                <SectionMemo
                    title={t.portfolio.title}
                    subtitle={t.portfolio.subtitle}
                    body={<SectionPortfolio lang={lang} />}
                />
            </div>

            {/* footer, dudo ponerlo*/}
            <div className="h-[100px]"></div>
        </div>
    )
}