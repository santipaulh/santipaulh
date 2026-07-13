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
                            src={props.item.image_src}
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
                                text={props.item.tag[lang]}
                            />
                            <Component.Text
                                textSize="24px"
                                color="1"
                                fontWeight="600"
                            >
                                {props.item.title[lang]}
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
                                    {props.item.slogan[lang]}
                                </Component.Text>
                            </div>

                            <div
                                className="flex flex-col"
                                style={{
                                    gap: "4px"
                                }}
                            >
                                {props.item.simple_featured_features[lang].map((featureText, featureIndex) => (
                                    <div
                                        key={`${props.item.id}-feature-${featureIndex}`}
                                        className="flex flex-row"
                                        style={{
                                            opacity: 0.8
                                        }}
                                    >
                                        <Component.Text
                                            textSize="13px"
                                            color="1"
                                            style="checkmark"
                                            fontWeight="400"
                                            styleColor="2"
                                        >
                                            {featureText}
                                        </Component.Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className="flex"
                            style={{
                                flexWrap: "wrap"
                            }}
                        >
                            {props.item.icons_tech_stack.map((x, idx) => (
                                <Component.Tag
                                    key={`${idx}=dsadas`}
                                    color="2"
                                    type="custom-skills-icon"
                                    icon={x}
                                />
                            ))}
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