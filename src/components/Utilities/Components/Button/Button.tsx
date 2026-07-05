import Text from "../Text/Text"
import styles from "./Button.module.css"

const Button = ({
    text,
    action,
    color
}: {
    text: string
    color: "1" | "2"
    action: {
        type: "click"
        onClick: () => void
    } | {
        type: "ref"
        href: string
    }
}) => {
    const colorStyleMap: Record<"1" | "2", React.CSSProperties> = {
        "1": {
            backgroundColor: "var(--homepage-color-2)",
            border: "none"
        },
        "2": {
            backgroundColor: "rgba(255, 255, 255, 0.18)",
            border: "1px solid #FFFFFF"
        }
    }

    const props = {
        className: styles.button,
        style: colorStyleMap[color]
    }

    switch (action.type) {
        case "click":
            return (
                <div
                    onClick={action.type === "click" ? action.onClick : undefined}
                    {...props}
                >
                    <Text
                        color="1"
                        textSize="15px"
                        fontWeight="500"
                    >
                        {text}
                    </Text>
                </div>
            )
        case "ref":
            return (
                <a
                    href={action.href}
                    {...props}
                >
                    <Text
                        color="1"
                        textSize="15px"
                        fontWeight="500"
                    >
                        {text}
                    </Text>
                </a>
            )
    }
}

export default Button