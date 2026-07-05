import styles from "./Card.module.css"
import { HTMLAttributes } from "react"

const Card = ({
    backgroundColor = "1",
    border,
    children,
    className
}: {
    className?: HTMLAttributes<HTMLDivElement>["className"]
    backgroundColor?: "1" | "2"
    border?: { color: "1" | "2", showing: Array<"up" | "left" | "right" | "down"> }
    children: React.ReactNode
}) => {
    const bgColorMap = {
        "1": "#FFFFFF",
        "2": "var(--homepage-color-1)"
    };

    const borderColorMap = {
        "1": "#FFFFFF",
        "2": "var(--homepage-color-1)"
    };

    const borderStyles: React.CSSProperties = {};

    if (border) {
        const borderColor = borderColorMap[border.color];
        const borderSize = "8px";

        if (border.showing.includes("up")) {
            borderStyles.borderTop = `${borderSize} solid ${borderColor}`;
        }
        if (border.showing.includes("down")) {
            borderStyles.borderBottom = `${borderSize} solid ${borderColor}`;
        }
        if (border.showing.includes("left")) {
            borderStyles.borderLeft = `${borderSize} solid ${borderColor}`;
        }
        if (border.showing.includes("right")) {
            borderStyles.borderRight = `${borderSize} solid ${borderColor}`;
        }
    }

    return (
        <div
            style={{
                backgroundColor: bgColorMap[backgroundColor],
                ...borderStyles
            }}
            className={`${styles["card"]} ${className} flex flex-col rounded-lg shadow-md p-6 h-full`}
        >
            {children}
        </div>
    );
}

export default Card