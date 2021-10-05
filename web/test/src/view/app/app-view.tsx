import * as React from "react"
import "./app-view.css"

export interface AppViewProps {
    className?: string
}

export default function AppView(props: AppViewProps) {
    const [shakeValue, setShakeValue] = React.useState(20)
    React.useEffect(() => {
        const interval = window.setInterval(() => {
            const iframe = document.getElementById(
                "iframe"
            ) as HTMLIFrameElement
            if (!iframe) return

            const value = (shakeValue * (0.9 + Math.random() * 0.2)) / 100
            iframe.contentWindow?.postMessage(
                { type: "DeviceAPI", name: "shake", args: value },
                "*"
            )
        }, 100)
        return () => window.clearInterval(interval)
    }, [shakeValue])
    return (
        <div className={getClassNames(props)}>
            <iframe
                id="iframe"
                src="http://localhost:35831/"
                width="360"
                height="740"
            ></iframe>
            <menu>
                <h1>Test</h1>
                <div className="flex">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={shakeValue}
                        onChange={evt =>
                            setShakeValue(parseInt(evt.target.value))
                        }
                    />
                    <div>{shakeValue} %</div>
                </div>
            </menu>
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
