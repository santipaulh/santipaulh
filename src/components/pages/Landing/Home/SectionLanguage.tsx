import { AvailableLanguages } from "@/components/assets/data"
import styles from "./Home.module.css";
import { useRouter, useParams } from "next/navigation";

const SectionLanguage = ({ lang = 'en' }: { lang: AvailableLanguages }) => {
    const router = useRouter();
    const params = useParams();
    const availableLangs: Record<AvailableLanguages, string> = {
        "en": "English",
        "es": "Español"
    }

    return (
        <div className="flex flex-row justify-center gap-4">
            {Object.entries(availableLangs).map((item, idx) => (
                <div
                    onClick={() => {
                        router.push(`/${item[0]}/`);
                    }}
                    key={`${idx}-12312321`}
                    className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${styles["shadow-addon"]}`}
                    style={{
                        backgroundColor: "var(--homepage-color-2)"
                    }}
                >
                    {item[1]}
                </div>
            ))}
        </div>
    )
}

export default SectionLanguage