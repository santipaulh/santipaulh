import styles from "./Home.module.css"
import langJson from "./Home.language.json"
import {
    Portfolio,
    PortfolioItem
} from "@/components/Utilities/Data/portfolio/portfolioData"
import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import Component from "@/components/Utilities/Component"

const SectionPortfolio = ({ lang }: { lang: AvailableLanguages }) => {
    void langJson

    const homePortfolioItems = Portfolio.getPortfolio()
    const featuredItem = homePortfolioItems.find((item) => item.featured)
    const secondaryItems = homePortfolioItems.filter((item) => !item.featured)

    const ItemCard = (props: {
        item: PortfolioItem
        featured: boolean
    }) => {
        const mockTags: Array<"nodejs"> = [
            "nodejs",
            "nodejs",
            "nodejs"
        ]

        return (
            <Component.Card
                color="2"
            >
                a
            </Component.Card>
            // <div className={`overflow-hidden rounded-[20px] border border-white/15 bg-[#111111] ${props.featured ? "flex flex-col lg:flex-row" : "flex flex-col"}`} >
            //     <Component.Card>
            //         a
            //     </Component.Card>
            //     <div
            //         className={`relative ${props.featured ? "w-full lg:w-[45%] min-h-[260px]" : "w-full h-[240px]"}`}
            //     >
            //         <img
            //             src={props.item.image_src}
            //             alt={props.item.title[lang]}
            //             className="absolute inset-0 h-full w-full object-cover"
            //         />
            //         <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            //     </div>

            //     <div
            //         className={`flex flex-col gap-4 p-6 ${props.featured ? "w-full lg:w-[55%]" : "w-full"}`}
            //     >
            //         <Component.Text
            //             color="1"
            //             textSize={props.featured ? "30px" : "22px"}
            //             fontWeight="700"
            //         >
            //             {props.item.title[lang]}
            //         </Component.Text>

            //         <Component.Text
            //             color="1"
            //             textSize="14px"
            //             fontWeight="400"
            //         >
            //             {props.item.slogan[lang]}
            //         </Component.Text>

            //         <div className="flex flex-wrap gap-3">
            //             {mockTags.map((tag, idx) => (
            //                 <div
            //                     key={`${props.item.id}-${idx}`}
            //                     className="rounded-[10px] border border-white/15 bg-black/20 px-3 py-2"
            //                 >
            //                     <Component.Tag
            //                         type="custom-skills-icon"
            //                         icon={tag}
            //                     />
            //                 </div>
            //             ))}
            //         </div>

            //         <div className="mt-2">
            //             <Component.Button
            //                 action={{
            //                     type: "ref",
            //                     href: `/${lang}/portfolio/${props.item.id}`
            //                 }}
            //                 text="Ver proyecto"
            //                 color="1"
            //             />
            //         </div>
            //     </div>
            // </div>
        )
    }

    return (
        <div className="flex flex-col">
            {!!featuredItem ? (
                <div
                    key={`${featuredItem.id}-edkmqlwejqwkl`}
                    className="w-full"
                >
                    <ItemCard
                        item={featuredItem}
                        featured
                    />
                </div>
            ) : null}

        </div>
        // <div className="flex flex-col gap-6">
        //     {featuredItem && (
        //         <div
        //             key={featuredItem.id}
        //             className="w-full"
        //         >
        //             <ItemCard
        //                 item={featuredItem}
        //                 featured
        //             />
        //         </div>
        //     )}

        //     <div className={styles["section_portfolio-grid"]}>
        //         {secondaryItems.map((item) => (
        //             <div
        //                 key={item.id}
        //                 className="w-full"
        //             >
        //                 <ItemCard
        //                     item={item}
        //                     featured={false}
        //                 />
        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}

export default SectionPortfolio