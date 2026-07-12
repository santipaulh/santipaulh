import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import Text from "../Text/Text"
import styles from "./Button.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({
    text,
    action,
    color,
    icon,
    borderRadius = "1"
}: {
    text: string
    color: "1" | "2"
    borderRadius?: "1" | "2"
    icon?: IconDefinition | null
    action: {
        type: "click"
        onClick: () => void
    } | {
        type: "ref"
        href: string
    }
}) => {
    const borderRadiusX = ({
        "1": "var(--homepage-rounded-1)",
        "2": "var(--homepage-rounded-2)"
    })[borderRadius]
    const colorStyleMap: Record<"1" | "2", React.CSSProperties> = {
        "1": {
            background: "var(--homepage-color-1)",
            border: "none",
            borderRadius: borderRadiusX
        },
        "2": {
            background: "var(--homepage-color-6)",
            border: "none",
            borderRadius: borderRadiusX
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