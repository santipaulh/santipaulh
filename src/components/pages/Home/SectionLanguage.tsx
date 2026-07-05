import { AvailableLanguages } from "@/components/Utilities/Data/Data"
import styles from "./Home.module.css"
import { useRouter, useParams } from "next/navigation"
import Component from "@/components/Utilities/Component"

const SectionLanguage = ({ lang = 'en' }: { lang: AvailableLanguages }) => {
    const router = useRouter()
    const availableLangs: Record<AvailableLanguages, string> = {
        "en": "English",
        "es": "Español"
    }

    return (
        <div className="flex flex-row justify-center gap-4">
            {Object.entries(availableLangs).map((item, idx) => (
                <Component.Button
                    action={{
                        type: "click",
                        onClick: () => {
                            router.push(`/${item[0]}/`)
                        }
                    }}
                    key={`${idx}-12312321`}
                    text={item[1]}
                    color="1"
                />
            ))}
        </div>
    )
}

export default SectionLanguage