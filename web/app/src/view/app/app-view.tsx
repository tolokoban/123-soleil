import * as React from "react"
import { Mode } from "../../types"
import Background from "../background"
import ShakeProgress from "../shake-progress"
import Start from "../start"
import "./app-view.css"
import { useMode, useShakeValue } from "./hooks"

export interface AppViewProps {
    className?: string
    gun: HTMLAudioElement
    song: HTMLAudioElement
}

export default function AppView(props: AppViewProps) {
    const [mode, setMode] = useMode(props.gun, props.song)
    const shakeValue = useShakeValue()
    if (mode === Mode.STILL && shakeValue > 1) {
        setMode(Mode.DEAD)
    }
    return (
        <div className={getClassNames(props)}>
            <Background blur={mode === Mode.INIT} zoom={mode === Mode.STILL} />
            <section>
                <Start
                    visible={mode === Mode.INIT}
                    onStart={() => setMode(Mode.RUN)}
                />
                <ShakeProgress
                    className="shake-progress"
                    visible={mode === Mode.STILL}
                    value={shakeValue}
                />
            </section>
        </div>
    )
}

function getClassNames(props: AppViewProps): string {
    const classNames = ["custom", "view-AppView"]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }

    return classNames.join(" ")
}
