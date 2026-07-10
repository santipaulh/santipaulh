"use client"

import styles from "./Home.module.css"
import dynamic from "next/dynamic"
import homeLanguage from "./Home.language.json"
import {
    faBirthdayCake,
    faBusinessTime,
    faEnvelope,
    faGlobeAmericas,
    faPhone,
} from "@fortawesome/free-solid-svg-icons"
import {
    faFacebookF,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons"
import Component from "@/components/Utilities/Component"
import { AvailableLanguages, Data } from "@/components/Utilities/Data/Data"

const FontAwesomeIcon = dynamic(
    () => import("@fortawesome/react-fontawesome").then(x => x.FontAwesomeIcon),
    { ssr: !!false }
)

interface SectionHeroProps {
    lang: AvailableLanguages
}

const SectionHero = ({ lang }: SectionHeroProps) => {
    const language = homeLanguage[lang]
    const data = homeLanguage[lang].hero

    const iconMap: Record<string, any> = {
        faBirthdayCake: faBirthdayCake,
        faBusinessTime: faBusinessTime,
        faPhone: faPhone,
        faEnvelope: faEnvelope,
        faGlobeAmericas: faGlobeAmericas
    }

    return (
        <div
            style={{
                background: "var(--homepage-color-gradient-1)",
                borderRadius: "var(--homepage-rounded-1)",
                border: "1px solid var(--homepage-color-2)",
                overflow: "hidden"
            }}
            className={`${styles["card"]} min-h-[420px] lg:min-h-[var(--homepage-firstsection-height)] relative flex flex-1 flex-col lg:flex-row`}
        >
            <div className="flex flex-col flex-1 p-6 md:p-10">
                <Component.Text color="1" textSize="35px" fontWeight="700" shadow>
                    {data.name}
                </Component.Text>
                <div style={{ marginTop: "-8px" }}>
                    <Component.Text color="5" textSize="20px" fontWeight="600" shadow>
                        {data.title}
                    </Component.Text>
                </div>
                <div className="my-[30px] overflow-y-auto flex flex-col gap-2">
                    {data.items.map((x, idx) => (
                        <div key={`dsqweeqweqwqewqeqwewq-${idx}`} className={`flex flex-row gap-2 items-center`}>
                            <FontAwesomeIcon
                                width={18}
                                height={18}
                                icon={iconMap[x.icon]}
                                className={`${styles["text-text-1"]} text-[15px]`}
                            />

                            <Component.Text color="1" textSize="15px" fontWeight="400">{x.text}</Component.Text>
                        </div>
                    ))}
                </div>
                <div className="mt-auto flex flex-col gap-[12px] sm:flex-row sm:items-center">
                    <div className="flex flex-row gap-[14px]">
                        {[
                            {
                                icon: faWhatsapp,
                                src: Data.mySocialLinks.whatsapp,
                                hexColor: "#25D366"
                            },
                            {
                                icon: faInstagram,
                                src: Data.mySocialLinks.instagram,
                                hexColor: "#E1306C"
                            },
                            {
                                icon: faGithub,
                                src: Data.mySocialLinks.github,
                                hexColor: "#000000"
                            },
                            {
                                icon: faLinkedinIn,
                                src: Data.mySocialLinks.linkedin,
                                hexColor: "#0A66C2"
                            }
                        ].map((x, idx) => (
                            <a
                                key={`${idx}123109873298132`}
                                className={`p-[10px] flex flex-row justify-center items-center rounded-full`}
                                style={{
                                    boxShadow: "0px 0px 1.6px 5px rgba(var(--homepage-color-3-rgb), 0.25)",
                                    backgroundColor: x.hexColor
                                }}
                                href={x.src}
                            >
                                <FontAwesomeIcon
                                    icon={x.icon}
                                    height={15}
                                    width={15}
                                    className={`${styles["text-text-1"]} text-[15px] font-black`}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:block w-full lg:w-auto">
                <div
                    className={styles["profile"]}
                />
                <img
                    src={"/old.cv-hero-pfp.jpg"}
                    alt="Mi cara"
                    className="relative z-1 self-end cover w-full h-[320px] md:h-[420px] lg:h-[var(--homepage-firstsection-height)]"
                />
            </div>
        </div>
    )
}

export default SectionHero