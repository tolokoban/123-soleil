import * as React from "react"
import { Mode } from "../../types"
import Background from "../background"
import Dead from "../dead"
import ShakeProgress from "../shake-progress"
import Stack from "../stack"
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
            <Stack value={`${mode}`}>
                <Start key={`${Mode.INIT}`} onStart={() => setMode(Mode.RUN)} />
                <ShakeProgress
                    key={`${Mode.STILL}`}
                    value={shakeValue}
                />
                <Dead key={`${Mode.DEAD}`} />
            </Stack>
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
