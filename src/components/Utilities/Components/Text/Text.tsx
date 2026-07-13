import { HTMLAttributes } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Text = ({
    color,
    textSize,
    fontWeight,
    style = undefined,
    shadow = false,
    children,
    href,
    styleColor,
    className
}: {
    href?: {
        url: string
    }
    className?: HTMLAttributes<HTMLDivElement>["className"]
    color: "1" | "2" | "3" | "4" | "5" | "gradient-1" | "gradient-2" | "gradient-3"
    textSize: string
    fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    style?: "quote" | "bullet-point" | "checkmark"
    styleColor?: "1" | "2"
    shadow?: boolean
    children: React.ReactNode
}) => {
    const colorMap = {
        "1": "var(--homepage-text-color-1)",
        "2": "var(--homepage-text-color-2)",
        "3": "var(--homepage-color-1)",
        "4": "var(--homepage-color-2)",
        "5": "var(--homepage-color-3)",
        "gradient-1": "transparent",
        "gradient-2": "transparent",
        "gradient-3": "transparent",
    }

    const colorGradientMap = {
        "gradient-1": "var(--homepage-color-gradient-1)",
        "gradient-2": "var(--homepage-color-gradient-2)",
        "gradient-3": "var(--homepage-color-gradient-3)",
    }

    const shadowStyle = shadow ? "2px 2px 4px rgba(0, 0, 0, 0.29)" : "none"
    const styleColorMap = {
        "1": "var(--homepage-color-1)",
        "2": "var(--homepage-color-3)"
    }, styleColorResult = styleColorMap[styleColor ?? "1"]

    if (style === "quote") {
        return (
            <div
                style={{
                    borderLeft: `4px solid ${styleColorResult}`,
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
                <span style={{
                    color: styleColorResult
                }}>
                    •
                </span>
                <div>{children}</div>
            </div>
        )
    }

    if (style === "checkmark") {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    alignItems: "center",
                    color: colorMap[color],
                    fontSize: textSize,
                    fontWeight,
                    textShadow: shadowStyle
                }}
            >
                <span
                    style={{
                        width: "16px",
                        height: "16px",
                        minWidth: "16px",
                        borderRadius: "999px",
                        border: `0px solid ${styleColorResult}`,
                        backgroundColor: styleColorResult,
                        color: "transparent",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                        lineHeight: 1
                    }}
                >
                    <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                            fontSize: "10px",
                            fontWeight:"900",
                            color: "var(--homepage-color-6)"
                        }}
                    />
                </span>
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
                ...(["gradient-1", "gradient-2", "gradient-3"].includes(color) ? {
                    background: (colorGradientMap as any)[color],
                    color: "transparent",
                    backgroundClip: "text",
                } : {}),
                textShadow: shadowStyle
            }}
            className={className}
        >
            {children}
        </div>
    )
}

export default Text