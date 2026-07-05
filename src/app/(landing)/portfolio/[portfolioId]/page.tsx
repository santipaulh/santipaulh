import PortfolioPage from "@/components/pages/Portfolio/Portfolio";
import { use } from "react";

export default function Portfolio({ params }: {
    params: Promise<{ portfolioId: string }>
}) {
    const { portfolioId } = use(params)
    return <PortfolioPage lang={"en"} portfolioId={portfolioId} />
}