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
                color="2"
                className="w-full flex-1 flex-col"
            >
                <Image
                    src={props.item.image_src}
                    width={1920}
                    height={1080}
                    alt="Image"
                    className="opacity-75 w-[100%] h-[300px]"
                />
                <div className="flex flex-1 flex-col p-7 gap-7 justify-between h-max">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <Component.Text
                                textSize="24px"
                                color="1"
                                fontWeight="600"
                            >
                                {props.item.title[lang]}
                            </Component.Text>
                            <Component.Text
                                textSize="14px"
                                color="1"
                                fontWeight="400"
                                className="opacity-70"
                            >
                                {props.item.slogan[lang]}
                            </Component.Text>
                        </div>
                        <div className="flex flex-wrap">
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
                    <div className="flex flex-row gap-1">
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
                {/* <div className="flex flex-row items-start gap-5">
                    <div>
                        <Image
                            src={props.item.logo_src}
                            width={40}
                            height={40}
                            alt="Image"
                        />
                    </div>

                    <div className="flex flex-1 flex-col items-start justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <Component.Text
                                color="1"
                                textSize="21px"
                                fontWeight="700"
                            >
                                {props.item.title[lang]}
                            </Component.Text>
                            <Component.Text
                                color="1"
                                textSize="13px"
                                fontWeight="400"
                            >
                                {props.item.slogan[lang]}
                            </Component.Text>
                        </div>

                        <img
                            src={props.item.image_src}
                            alt={props.item.title[lang]}
                        />
                    </div>
                </div>

                <Component.Button
                    action={{
                        type: "ref",
                        href: `/${lang}/portfolio/${props.item.id}`
                    }}
                    text="Ver proyecto"
                    color="1"
                /> */}
            </Component.Card>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="gap-4 grid grid-cols-2">
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