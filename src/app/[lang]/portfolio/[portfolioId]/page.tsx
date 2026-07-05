import PortfolioPage from "@/components/pages/Portfolio/Portfolio";
import { AvailableLanguages } from "@/components/Utilities/Data/Data";
import { use } from "react";

export default function Portfolio({ params }: {
    params: Promise<{ lang: AvailableLanguages; portfolioId: string }>
}) {
    const { portfolioId, lang } = use(params)
    return <PortfolioPage portfolioId={portfolioId} lang={lang} />
}
