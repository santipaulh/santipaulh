"use client"

import { useState } from "react"
import styles from "./Home.module.css"
import langJson from "./Home.language.json"
import { Portfolio } from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import Component from "@/components/Utilities/Component"


export default function SectionFutures({ lang }: { lang: AvailableLanguages }) {
    const [isOpen, setIsOpen] = useState(false)
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
                            <Component.Text
                                color="2"
                                textSize="20px"
                                fontWeight="700"
                            >
                                {isOpen ? "−" : "+"}
                            </Component.Text>
                        </span>
                        <span className={styles["future-toggleLabel"]}>
                            <Component.Text
                                color="2"
                                textSize="16px"
                                fontWeight="600"
                            >
                                {futureContent.title[lang]}
                            </Component.Text>
                        </span>
                    </button>

                    {isOpen && (
                        <div className={styles["future-content"]}>
                            <div className={styles["future-section"]}>
                                <Component.Text color="2" textSize="18px" fontWeight="700">
                                    {language.futures.problem_to_solve}
                                </Component.Text>
                                <Component.Text color="2" textSize="15px" fontWeight="400">
                                    {futureContent.problem[lang]}
                                </Component.Text>
                            </div>

                            <div className={styles["future-section"]}>
                                <Component.Text color="2" textSize="18px" fontWeight="700">
                                    {language.futures.expected_features}
                                </Component.Text>
                                <ul className={styles["future-list"]}>
                                    {futureContent.expected_features[lang].map((feature) => (
                                        <li key={feature}>
                                            <Component.Text color="2" textSize="15px" fontWeight="400">
                                                {feature}
                                            </Component.Text>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles["future-section"]}>
                                <Component.Text color="2" textSize="18px" fontWeight="700">
                                    {language.futures.expected_results}
                                </Component.Text>
                                <ul className={styles["future-list"]}>
                                    {futureContent.expected_results[lang].map((result, idx) => (
                                        <li key={`${idx}-as3d,lñasd`}>
                                            <Component.Text color="2" textSize="15px" fontWeight="400">
                                                {result}
                                            </Component.Text>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles["future-section"]}>
                                <Component.Text color="2" textSize="18px" fontWeight="700">
                                    {language.futures.tech_stack}
                                </Component.Text>
                                <ul className={styles["future-list"]}>
                                    {futureContent.expected_tech_stack[lang].map((result, idx) => (
                                        <li key={`${idx}-asd,lñasd`}>
                                            <Component.Text color="2" textSize="15px" fontWeight="400">
                                                {result}
                                            </Component.Text>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
