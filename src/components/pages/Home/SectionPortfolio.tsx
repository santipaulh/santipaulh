import styles from "./Home.module.css"
import {
    Portfolio,
    PortfolioItem
} from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import Component from "@/components/Utilities/Component"
import Image from "next/image"
import langJson from "./Home.language.json"

const SectionPortfolio = ({ lang }: { lang: AvailableLanguages }) => {
    const homePortfolioItems = Portfolio.getPortfolio()
    const secondaryItems = homePortfolioItems

    const ItemCard = (props: {
        item: PortfolioItem
    }) => {
        const presentation = props.item.presentation
        const data = props.item.data
        const techStackSorted = [...data.tech_stack[lang]].sort((x, y) => (
            (y.type === "skill-icons" ? 1 : 0)
            - (x.type === "skill-icons" ? 1 : 0)
        ))
        const techStackPreview = techStackSorted.slice(0, 3)
        const techStackRemaining = Math.max(techStackSorted.length - 3, 0)

        const coreFeaturesPreview = data.core_features[lang].slice(0, 3)
        const coreFeaturesRemaining = Math.max(data.core_features[lang].length - 3, 0)

        return (
            <Component.Card
                color="1"
                className={styles["section_portfolio-item_card"]}
            >
                <div
                    className={styles["section_portfolio-item_media"]}
                >
                    <Component.Card
                        color="2"
                        className={styles["section_portfolio-item_mediaCard"]}
                    >
                        <Image
                            src={presentation.image_src}
                            width={1920}
                            height={1080}
                            alt="Image"
                            className={styles["section_portfolio-item_image"]}
                        />
                    </Component.Card>
                </div>
                <div
                    className={`flex flex-col ${styles["section_portfolio-item_content"]}`}
                >
                    <div
                        className="flex flex-col"
                        style={{
                            gap: "24px"
                        }}
                    >
                        <div
                            className="flex flex-col gap-2"
                        >
                            <Component.Tag
                                type="text-with-ball"
                                ballColor="1"
                                bgColor="2"
                                text={presentation.tag[lang]}
                            />
                            <Component.Text
                                textSize="24px"
                                color="1"
                                fontWeight="600"
                            >
                                {presentation.title[lang]}
                            </Component.Text>
                            <div
                                style={{
                                    opacity: 0.7
                                }}
                            >
                                <Component.Text
                                    textSize="14px"
                                    color="1"
                                    fontWeight="400"
                                >
                                    {presentation.slogan[lang]}
                                </Component.Text>
                            </div>
                        </div>
                        <div
                            className="flex flex-col"
                            style={{
                                gap: "6px"
                            }}
                        >
                            {/* <div className="flex flex-wrap">
                                {techStackPreview.map((techItem, idx) => (
                                    techItem.type === "skill-icons" ? (
                                        <Component.Tag
                                            key={`${props.item.id}-tech-${idx}`}
                                            type="custom-skills-icon"
                                            color="2"
                                            icon={techItem.icon}
                                        />
                                    ) : (
                                        <Component.Tag
                                            key={`${props.item.id}-tech-${idx}`}
                                            type="text-with-ball"
                                            ballColor="1"
                                            bgColor="2"
                                            text={techItem.text}
                                        />
                                    )
                                ))}
                                {techStackRemaining > 0 && (
                                    <Component.Tag
                                        type="text-with-ball"
                                        ballColor="none"
                                        bgColor="2"
                                        text={`+${techStackRemaining}`}
                                    />
                                )}
                            </div>
                            <div className="flex flex-wrap">
                                {coreFeaturesPreview.map((coreItem, idx) => (
                                    <Component.Tag
                                        key={`${props.item.id}-core-${idx}`}
                                        type="text-with-ball"
                                        ballColor="2"
                                        bgColor="2"
                                        text={coreItem}
                                    />
                                ))}
                                {coreFeaturesRemaining > 0 && (
                                    <Component.Tag
                                        type="text-with-ball"
                                        ballColor="none"
                                        bgColor="2"
                                        text={`+${coreFeaturesRemaining}`}
                                    />
                                )}
                            </div> */}
                        </div>
                    </div>
                    <div
                        className="flex flex-row"
                        style={{
                            gap: "4px"
                        }}
                    >
                        <Component.Button
                            color="1"
                            action={{
                                type: "ref",
                                href: `/${lang}/portfolio/${props.item.id}`
                            }}
                            text={langJson[lang].portfolio.knowMore}
                        />
                    </div>
                </div>
            </Component.Card>
        )
    }

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-col"
                style={{
                    gap: "16px"
                }}
            >
                {secondaryItems.map((item) => (
                    <ItemCard
                        key={`${item.id}-dsaadkask`}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionPortfolio