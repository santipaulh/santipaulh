import Link from "next/link"
import styles from "./Home.module.css"
import langJson from "./Home.language.json"
import { Portfolio } from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"

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
                            Featured
                        </div>

                        <div className={styles["section_portfolio-card_content"]}>
                            <h3 className={styles["section_portfolio-card_title"]}>
                                {featuredItem.title[lang]}
                            </h3>
                            <p className={styles["section_portfolio-card_description"]}>
                                {featuredItem.slogan[lang]}
                            </p>
                            <Link
                                href={`/${lang}/portfolio/${featuredItem.id}`}
                                className={styles["section_portfolio-card_button"]}
                            >
                                {language.portfolio.knowMore}
                            </Link>
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
                                <h3 className={styles["section_portfolio-card_title"]}>
                                    {item.title[lang]}
                                </h3>
                                <p className={styles["section_portfolio-card_description"]}>
                                    {item.slogan[lang]}
                                </p>
                                <Link
                                    href={`/${lang}/portfolio/${item.id}`}
                                    className={styles["section_portfolio-card_button"]}
                                >
                                    {language.portfolio.knowMore}
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionPortfolio