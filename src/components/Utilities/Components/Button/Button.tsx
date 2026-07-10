import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import Text from "../Text/Text"
import styles from "./Button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({
    text,
    action,
    color,
    icon
}: {
    text: string
    color: "1" | "2"
    icon?: IconDefinition | null
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
            background: "var(--homepage-color-gradient-1)",
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

    const Content = () => (
        <div className="flex flex-row justify-between gap-2">
            {!!icon ? (
                <Text
                    color="1"
                    textSize="12px"
                    fontWeight="500"
                >
                    <FontAwesomeIcon icon={icon} />
                </Text>
            ) : null}
            <Text
                color="1"
                textSize="14px"
                fontWeight="500"
            >
                {text}
            </Text>
        </div>
    )

    switch (action.type) {
        case "click":
            return (
                <div
                    onClick={action.type === "click" ? action.onClick : undefined}
                    {...props}
                >
                    <Content />
                </div>
            )
        case "ref":
            return (
                <a
                    href={action.href}
                    {...props}
                >
                    <Content />
                </a>
            )
    }
}

export default Button