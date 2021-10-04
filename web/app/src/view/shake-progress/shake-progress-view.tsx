import * as React from "react"
import Color from "../../color"
import "./shake-progress-view.css"

const COLORS = ["#0f0", "#ff0", "#f00"].map(Color.fromColorOrString)

export interface ShakeProgressViewProps {
    className?: string
    value: number
}

export default function ShakeProgressView(props: ShakeProgressViewProps) {
    const { value } = props
    const percent = Math.max(0, Math.min(1, value))
    const color1 = Color.ramp(COLORS, percent)
    const color0 = color1.copy()
    color0.rgb2hsl()
    color0.L = 0.9
    color0.hsl2rgb()
    const color2 = color1.copy()
    color2.rgb2hsl()
    color2.L *= 0.6
    color2.hsl2rgb()
    const gradient = `linear-gradient(to top,${color0.stringify()},${color1.stringify()},${color2.stringify()})`
    return (
        <div className={getClassNames(props)}>
            <div
                style={{
                    width: `${100 * percent}%`,
                    backgroundImage: gradient,
                }}
            ></div>
        </div>
    )
}

function getClassNames(props: ShakeProgressViewProps): string {
    const classNames = ["custom", "view-ShakeProgressView"]
    if (typeof props.className === "string") {
        classNames.push(props.className)
    }

    return classNames.join(" ")
}
