import * as React from "react"
import "./dead-view.css"

export interface DeadViewProps {
    className?: string
}

export default function DeadView(props: DeadViewProps) {
    return <div className={getClassNames(props)}></div>
}

function getClassNames(props: DeadViewProps): string {
    const classNames = ["custom", "view-DeadView"]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }

    return classNames.join(" ")
}
