import styles from "./Card.module.css"
import { HTMLAttributes } from "react"

const Card = ({
    className,
    color = "1",
    children
}: {
    color?: "1" | "2"
    className?: HTMLAttributes<HTMLDivElement>["className"]
    children: React.ReactNode
}) => {
    let styles: HTMLAttributes<HTMLDivElement>["style"] = {}

    switch (color) {
        case "1":
            styles = {
                background: "var(--homepage-color-gradient-1)",
                borderRadius: "var(--homepage-rounded-1)",
                border: "1px solid var(--homepage-color-2)"
            }
            break
        case "2":
            styles = {
                background: "var(--homepage-color-6)",
                borderRadius: "var(--homepage-rounded-1)",
                border: "1px solid var(--homepage-color-7)"
            }
            break
    }

    return (
        <div
            style={styles}
            className={`${className} relative flex`}
        >
            {children}
        </div>
    )
}

export default Card