const Text = ({
    color,
    textSize,
    fontWeight,
    style = undefined,
    shadow = false,
    children,
    href
}: {
    href?: {
        url: string
    }
    color: "1" | "2" | "3"
    textSize: string
    fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    style?: "quote" | "bullet-point"
    shadow?: boolean
    children: React.ReactNode
}) => {
    const colorMap = {
        "1": "#FFFFFF",
        "2": "#616161",
        "3": "var(--homepage-color-1)"
    }

    const shadowStyle = shadow ? "2px 2px 4px rgba(0, 0, 0, 0.29)" : "none"

    if (style === "quote") {
        return (
            <div
                style={{
                    borderLeft: "4px solid var(--homepage-color-1)",
                    paddingLeft: "16px",
                    color: colorMap[color],
                    fontSize: textSize,
                    fontWeight,
                    textShadow: shadowStyle
                }}
            >
                {children}
            </div>
        )
    }

    if (style === "bullet-point") {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "flex-center",
                    justifyContent: "center",
                    color: colorMap[color],
                    fontSize: textSize,
                    fontWeight,
                    textShadow: shadowStyle
                }}
            >
                <span>•</span>
                <div>{children}</div>
            </div>
        )
    }

    return (
        <div
            style={{
                color: colorMap[color],
                fontSize: textSize,
                fontWeight,
                textShadow: shadowStyle
            }}
        >
            {children}
        </div>
    )
}

export default Text