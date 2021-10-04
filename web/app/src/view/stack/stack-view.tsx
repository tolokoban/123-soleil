import * as React from "react"
import "./stack-view.css"

export interface StackViewProps {
    className?: string
    value: string
    children: JSX.Element[]
}

export default function StackView(props: StackViewProps) {
    return (
        <div className={getClassNames(props)}>
            {props.children.map(child => (
                <div
                    key={child.key}
                    className={child.key === props.value ? "show" : "hide"}
                >
                    {child}
                </div>
            ))}
        </div>
    )
}

function getClassNames(props: StackViewProps): string {
    const classNames = ["custom", "view-StackView"]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }

    return classNames.join(" ")
}
