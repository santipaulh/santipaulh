import Image from "next/image"
import Text from "../Text/Text"

const ItemIcons = {
    "nodejs": "/NodeJS-Dark.svg",
}

const ItemIconsText: Record<keyof typeof ItemIcons, string> = {
    "nodejs": "Node.js",
}

const Tag = (props:
    | {
        type: "custom-skills-icon"
        icon: keyof typeof ItemIcons
    }
    | {
        type: "text-with-ball"
        ballColor: "1" | "2"
    }
) => {
    if (props.type === "custom-skills-icon") return <div className="flex flex-row items-center gap-4">
        <Text
            textSize="14px"
            color="1"
            fontWeight="500"
        >
            <Image src={ItemIcons[props.icon]} width={24} height={24} alt={props.icon} />
        </Text>

        <Text
            textSize="14px"
            color="1"
            fontWeight="500"
        >
            {ItemIconsText[props.icon]}
        </Text>
    </div>

    return null
}

export default Tag