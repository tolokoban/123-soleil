import * as React from "react"
import { RUN_DURATION, STILL_DURATION } from "../../../constants"
import { Mode } from "../../../types"

export function useMode(
    gun: HTMLAudioElement,
    song: HTMLAudioElement
): [Mode, (mode: Mode) => void] {
    const [mode, setMode] = React.useState<Mode>(Mode.INIT)
    React.useEffect(() => {
        switch (mode) {
            case Mode.RUN:
                song.play()
                window.setTimeout(() => setMode(Mode.STILL), RUN_DURATION)
                break
            case Mode.STILL:
                window.setTimeout(() => setMode(Mode.RUN), STILL_DURATION)
                break
            case Mode.DEAD:
                gun.play()
                break
        }
    }, [mode])
    return [mode, setMode]
}
