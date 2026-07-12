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
import { ItemSkillIcons } from "@/components/Utilities/Components/Tag/Tag"
import Image from "next/image"

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

    const skilliconsMap: (keyof typeof ItemSkillIcons)[] = [
        "TypeScript",
        "JavaScript",
        "Java",
        "Python",
        "PHP"
    ]

    return (
        <div className="relative">
            <div
                style={{ background: "var(--homepage-color-gradient-1)", }}
                className="absolute w-full h-[75%] top-[10%]"
            />
            <Component.Card
                className="mx-[calc(25%)]"
            >
                <div className="flex flex-col flex-1 p-12">
                    <div className="flex flex-col gap-4">
                        <Component.Tag
                            type="text-with-ball"
                            ballColor="1"
                            text="Disponible para nuevos proyectos"
                        />
                        <div className="flex flex-col gap-2">
                            <Component.Text color="1" textSize="35px" fontWeight="700" shadow>
                                {data.name}
                            </Component.Text>
                            <div style={{ marginTop: "-8px", width: "100%" }}>
                                <Component.Text color="gradient-2" textSize="20px" fontWeight="700" shadow>
                                    {data.title}
                                </Component.Text>
                            </div>
                        </div>
                    </div>
                    <div className="my-[30px] overflow-y-auto flex gap-1 flex-wrap">
                        {skilliconsMap.map((x, idx) => (
                            <Component.Tag
                            key={`${idx}-dsadfda12312331`}
                                icon={x}
                                type="custom-skills-icon"
                            />
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
                <div className={`${styles['hero-pfp-responsive']} `}>
                    <div
                        className={`p-[10px] flex flex-row justify-center items-center`}
                        style={{
                            boxShadow: "0px 0px 16px 1px rgba(var(--homepage-color-3-rgb), 0.3)",
                            // backgroundColor: "var(--homepage-color-2)",
                            borderRadius: "var(--homepage-rounded-3)"
                        }}
                    >
                        <Image
                            src={"/old.cv-hero-pfp.jpg"}
                            alt="Mi cara"
                            width={1750}
                            height={1750}
                            style={{
                            boxShadow: "0px 0px 25px -10px var(--homepage-color-3)",
                                borderRadius: "var(--homepage-rounded-3)"
                            }}
                            className="w-full 2xl:h-[350px] xl:h-[250px]"
                        />
                    </div>
                </div>
                {/* <div className="relative hidden lg:block w-full lg:w-auto">
                    <div
                        className={styles["profile"]}
                    />
                    <img
                        src={"/old.cv-hero-pfp.jpg"}
                        alt="Mi cara"
                        className="relative z-1 self-end cover w-full h-[320px] md:h-[420px] lg:h-[var(--homepage-firstsection-height)]"
                    />
                </div> */}
            </Component.Card>
        </div>
    )
}

export default SectionHero