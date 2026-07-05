"use client";

import { useState } from "react";
import styles from "./Home.module.css";
import langJson from "./Home.language.json"
import { Portfolio } from "@/components/Utilities/Data/portfolio/portfolioData";
import { AvailableLanguages } from "@/components/Utilities/Data/Data";


export default function SectionFutures({ lang }: { lang: AvailableLanguages }) {
    const [isOpen, setIsOpen] = useState(false);
    const itemsFuturePortfolio = Portfolio.getFuturePortfolioList()
    const language = langJson[lang]

    return (
        <div className="flex flex-col gap-2">
            {itemsFuturePortfolio.map((futureContent, idx) => (
                <div key={`${idx}-213ko13po2`} className="w-full">
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={styles["future-toggle"]}
                        aria-expanded={isOpen}
                    >
                        <span className={styles["future-toggleIcon"]}>
                            {isOpen ? "−" : "+"}
                        </span>
                        <span className={styles["future-toggleLabel"]}>
                            {futureContent.title[lang]}
                        </span>
                    </button>

                    {isOpen && (
                        <div className={styles["future-content"]}>
                            <div className={styles["future-section"]}>
                                <h4 className={styles["future-sectionTitle"]}>
                                    {language.futures.problem_to_solve}
                                </h4>
                                <p className={styles["future-bodyText"]}>
                                    {futureContent.problem[lang]}
                                </p>
                            </div>

                            <div className={styles["future-section"]}>
                                <h4 className={styles["future-sectionTitle"]}>
                                    {language.futures.expected_features}
                                </h4>
                                <ul className={styles["future-list"]}>
                                    {futureContent.expected_features[lang].map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles["future-section"]}>
                                <h4 className={styles["future-sectionTitle"]}>
                                    {language.futures.expected_results}
                                </h4>
                                <ul className={styles["future-list"]}>
                                    {futureContent.expected_results[lang].map((result, idx) => (
                                        <li key={`${idx}-as3d,lñasd`}>{result}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles["future-section"]}>
                                <h4 className={styles["future-sectionTitle"]}>
                                    {language.futures.tech_stack}
                                </h4>
                                <ul className={styles["future-list"]}>
                                    {futureContent.expected_tech_stack[lang].map((result, idx) => (
                                        <li key={`${idx}-asd,lñasd`}>{result}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
