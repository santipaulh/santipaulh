import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { AvailableLanguages } from "./components/Utilities/Data/Data"

const locales: AvailableLanguages[] = ["en", "es"]
const defaultLocale = "es"

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next()
    }

    const hasLocale = locales.some(
        (locale) =>
            pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    )

    if (!hasLocale) {
        const url = request.nextUrl.clone()
        url.pathname = `/${defaultLocale}${pathname}`
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: "/:path*",
}