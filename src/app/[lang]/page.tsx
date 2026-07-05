import { AvailableLanguages } from "@/components/assets/data";
import HomePage from "@/components/pages/Home/Home";
import { use } from "react";

export default function Home({ params }: {
    params: Promise<{ lang: AvailableLanguages }>
}) {
    const { lang } = use(params)
    return <HomePage lang={lang} />
}
