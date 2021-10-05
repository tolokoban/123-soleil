import * as React from "react"
import './run-view.css'



export interface RunViewProps {
    className?: string
}

export default function RunView(props: RunViewProps) {
    return <div className={getClassNames(props)}>
        <div>RUN</div>
    </div>
}


function getClassNames(props: RunViewProps): string {
    const classNames = ['custom', 'view-RunView']
    if (typeof props.className === 'string') {
        classNames.push(props.className)
    }

    return classNames.join(' ')
}
