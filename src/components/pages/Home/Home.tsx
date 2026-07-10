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
            <div className="flex flex-col">
                <Component.Text fontWeight="600" textSize="30px" color="2">
                    {title}
                </Component.Text>
                <Component.Text style="quote" fontWeight="600" textSize="16px" color="2">
                    {subtitle}
                </Component.Text>
            </div>
            {body}
        </div>
    )

    if (!t) return null
    if (!t.portfolio) return null
    return (
        <div className={styles["homepage"]}>
            <div className="relative">
                <div className={styles["background-hero-backdrop"]} />
                <div className={styles["background-hero-foto"]} />
            </div>

            <div className={`${styles["sections-container"]}`}>
                <div className="w-full max-w-[1300px] px-[3.5%] flex-1 flex flex-col gap-10">
                    <div>
                        <SectionHero lang={lang} />
                    </div>

                    <SectionLanguage lang={lang} />

                    <SectionMemo
                        title={t.portfolio.title}
                        subtitle={t.portfolio.subtitle}
                        body={<SectionPortfolio lang={lang} />}
                    />

                    <SectionMemo
                        title={t.futures.title}
                        subtitle={t.futures.subtitle}
                        body={<SectionFutures lang={lang} />}
                    />

                </div>
            </div>
        </div >
    )
}