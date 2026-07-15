import Image from "next/image"
import Text from "../Text/Text"
import { ItemSkillIcons } from "../../Data/icons/icons"



const resolveItemIcon = (icon: keyof typeof ItemSkillIcons) => {
    return ItemSkillIcons[icon] ?? {
        text: icon,
        uri: `/skills-icons/${icon}.svg`
    }
}

const Tag = (props:
    | {
        type: "custom-skills-icon"
        color?: "1" | "2" | "3"
        icon: keyof typeof ItemSkillIcons
    }
    | {
        type: "text-with-ball"
        bgColor?: "1" | "2"
        ballColor: "1" | "2" | "none"
        text: string
    }
) => {
    if (props.type === "text-with-ball") {
        const ballColorMap: Record<"1" | "2", string> = {
            "1": "#22c55e",
            "2": "#ef4444"
        }

        const bgColorMap = {
            "1": "var(--homepage-color-6)",
            "2": "var(--homepage-color-2)"
        }

        return (
            <div
                style={{
                    backgroundColor: bgColorMap[props.bgColor ?? "1"],
                    borderRadius: "var(--homepage-rounded-1)"
                }}
                className="flex max-w-max flex-row items-center gap-3 px-4 py-2"
            >
                {props.ballColor !== "none" && (
                    <div
                        style={{
                            backgroundColor: ballColorMap[props.ballColor]
                        }}
                        className="h-2 w-2 rounded-full"
                    />
                )}
                <Text
                    color="1"
                    textSize="11px"
                    fontWeight="400"
                >
                    {props.text}
                </Text>
            </div>
        )
    }

    if (props.type === "custom-skills-icon") {
        const iconData = resolveItemIcon(props.icon)
        const bgColorMap: Record<"1" | "2" | "3", string> = {
            "1": "var(--homepage-color-4)",
            "2": "var(--homepage-color-2)",
            "3": "transparent"
        }
        

        return <div
            style={{
                border: "1px solid var(--homepage-color-5)",
                backgroundColor: bgColorMap[props.color ?? "1"],
                borderRadius: "var(--homepage-rounded-1)"
            }}
            className="flex max-w-max flex-row items-center gap-3 px-4 py-2"
        >
            <Text
                textSize="12px"
                color="1"
                fontWeight="500"
            >
                <Image src={iconData.uri} width={24 / 1.75} height={24 / 1.75} alt={props.icon} />
            </Text>

            <Text
                textSize="11px"
                color="1"
                fontWeight="500"
            >
                {iconData.text}
            </Text>
        </div>
    }

    return null
}

export default Tag