import HomePage from "@/components/pages/Home/Home";
import { AvailableLanguages } from "@/components/Utilities/Data/Data";
import { use } from "react";

export default function Home({ params }: {
    params: Promise<{ lang: AvailableLanguages }>
}) {
    const { lang } = use(params)
    return <HomePage lang={lang} />
}
