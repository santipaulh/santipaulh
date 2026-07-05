import styles from "./Home.module.css"
import langJson from "./Home.language.json"
import { Portfolio } from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import Component from "@/components/Utilities/Component"

const SectionPortfolio = ({ lang }: { lang: AvailableLanguages }) => {
    void lang

    const language = langJson[lang]
    const homePortfolioItems = Portfolio.getPortfolio()
    const featuredItem = homePortfolioItems.find((item) => item.featured)
    const secondaryItems = homePortfolioItems.filter((item) => !item.featured)

    return (
        <section className="w-full">
            <div className="flex flex-col gap-6">
                {featuredItem && (
                    <article
                        key={featuredItem.id}
                        className={`${styles["section_portfolio-card_container"]} ${styles["section_portfolio-card_container_featured"]}`}
                    >
                        <img
                            src={featuredItem.image_src}
                            alt={featuredItem.title[lang]}
                            className={styles["section_portfolio-card_image"]}
                        />

                        <div className={styles["section_portfolio-card_overlay"]} />

                        <div className={styles["section_portfolio-card_badge"]}>
                            <Component.Text
                                color="1"
                                textSize="12px"
                                fontWeight="600"
                            >
                                Featured
                            </Component.Text>
                        </div>

                        <div className={styles["section_portfolio-card_content"]}>
                            <Component.Text
                                color="1"
                                textSize="22px"
                                fontWeight="700"
                            >
                                {featuredItem.title[lang]}
                            </Component.Text>
                            <Component.Text
                                color="1"
                                textSize="14px"
                                fontWeight="400"
                            >
                                {featuredItem.slogan[lang]}
                            </Component.Text>
                            <Component.Button
                                action={{
                                    type: "ref",
                                    href: `/${lang}/portfolio/${featuredItem.id}`
                                }}
                                text={language.portfolio.knowMore}
                                color="2"
                            />
                        </div>
                    </article>
                )}

                <div className={styles["section_portfolio-grid"]}>
                    {secondaryItems.map((item) => (
                        <article
                            key={item.id}
                            className={styles["section_portfolio-card_container"]}
                        >
                            <img
                                src={item.image_src}
                                alt={item.title[lang]}
                                className={styles["section_portfolio-card_image"]}
                            />

                            <div className={styles["section_portfolio-card_overlay"]} />

                            <div className={styles["section_portfolio-card_content"]}>
                                <Component.Text
                                    color="1"
                                    textSize="22px"
                                    fontWeight="700"
                                >
                                    {item.title[lang]}
                                </Component.Text>
                                <Component.Text
                                    color="1"
                                    textSize="14px"
                                    fontWeight="400"
                                >
                                    {item.slogan[lang]}
                                </Component.Text>
                                <Component.Button
                                    action={{
                                        type: "ref",
                                        href: `/${lang}/portfolio/${item.id}`
                                    }}
                                    text={language.portfolio.knowMore}
                                    color="2"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionPortfolio