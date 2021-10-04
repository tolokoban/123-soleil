import * as React from "react"
import './background-view.css'



export interface BackgroundViewProps {
    className?: string
    blur: boolean
    zoom: boolean
}

export default function BackgroundView(props: BackgroundViewProps) {
    return <div className={getClassNames(props)}>
    </div>
}


function getClassNames(props: BackgroundViewProps): string {
    const classNames = ['custom', 'view-BackgroundView']
    if (typeof props.className === 'string') {
        classNames.push(props.className)
    }
    if (props.blur === true) classNames.push("blur")
    if (props.zoom === true) classNames.push("zoom")

    return classNames.join(' ')
}
