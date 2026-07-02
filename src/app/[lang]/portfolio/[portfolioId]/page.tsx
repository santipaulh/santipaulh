import { AvailableLanguages } from "@/components/assets/data";
import PortfolioPage from "@/components/pages/Landing/Portfolio/Portfolio";
import { use } from "react";

export default function Portfolio({ params }: {
    params: Promise<{ lang: AvailableLanguages; portfolioId: string }>
}) {
    const { portfolioId, lang } = use(params)
    return <PortfolioPage portfolioId={portfolioId} lang={lang} />
}
