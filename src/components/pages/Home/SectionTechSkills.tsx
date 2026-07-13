import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import KnownTechStack from "@/components/Utilities/Data/stack-i-know/stack-i-know"
import Component from "@/components/Utilities/Component"

const SectionTechSkills = ({ lang }: { lang: AvailableLanguages }) => {
    const categories = KnownTechStack[lang]

    return (
        <Component.Card
            color="1"
            className="flex flex-col p-6"
        >
            <div className="flex flex-col">
                {categories.map((category) => (
                    <div
                        key={`${lang}-${category.category}`}
                        className="flex flex-row items-start justify-between gap-8 border-b border-(--homepage-color-5) py-4 last:border-b-0"
                    >
                        <div className="min-w-[200px]">
                            <Component.Text
                                color="gradient-3"
                                textSize="14px"
                                fontWeight="700"
                            >
                                {category.category}
                            </Component.Text>
                        </div>

                        <div className="flex flex-row flex-wrap gap-2 flex-1 justify-end">
                            {category.icons.sort((x, y) =>
                                (x.type === "skill-icon" ? 1 : 0)
                                - (y.type === "skill-icon" ? 1 : 0)
                            ).map((item, index) => {
                                if (item.type === "skill-icon") {
                                    return (
                                        <Component.Tag
                                            key={`${category.category}-icon-${index}`}
                                            type="custom-skills-icon"
                                            color="3"
                                            icon={item.icon}
                                        />
                                    )
                                }

                                return (
                                    <Component.Tag
                                        key={`${category.category}-text-${index}`}
                                        type="text-with-ball"
                                        ballColor="1"
                                        bgColor="1"
                                        text={item.text}
                                    />
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Component.Card>
    )
}

export default SectionTechSkills