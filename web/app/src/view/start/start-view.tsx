import * as React from "react"
import './start-view.css'



export interface StartViewProps {
    className?: string
    visible: boolean
    onStart(): void
}

export default function StartView(props: StartViewProps) {
    return (
        <div className={getClassNames(props)}>
            <div></div>
            <p>Quand la contine retentit, courrez !</p>
            <p>Quand elle s'arrête, ne bougez plus...</p>
            <button onClick={props.onStart}>Start!</button>
        </div>
    )
}


function getClassNames(props: StartViewProps): string {
    const classNames = ['custom', 'view-StartView', props.visible ? 'show' : 'hide']
    if (typeof props.className === 'string') {
        classNames.push(props.className)
    }

    return classNames.join(' ')
}
