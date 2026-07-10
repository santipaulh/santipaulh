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
            <div className="flex flex-col w-full h-[100vh] bg-black">
                <div className="mx-[calc(15%)] flex flex-col gap-7">
                    {/* coso del header */}
                    <div className="flex flex-row justify-between p-9">
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
                                    color="2"
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
                    </div>
                    {/* body */}
                    <div className="flex flex-col px-9">
                        <SectionHero lang={lang} />
                    </div>

                    {/* footer, dudo ponerlo*/}
                </div>
            </div>
            {/* <div className="relative">
                <div className={styles["background-hero-backdrop"]} />
                <div className={styles["background-hero-foto"]} />
            </div> */}

            {/* <div className={`${styles["sections-container"]}`}>
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
            </div> */}
        </div >
    )
}