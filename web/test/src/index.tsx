import * as React from "react"
import * as ReactDOM from "react-dom"
import "./index.css"
import App from "./view/app"

function start() {
        ReactDOM.render(
            <App />,
            document.getElementById("root")
        )
        removeSplashScreen()
}

start()

function removeSplashScreen() {
    const SPLASH_VANISHING_DELAY = 900
    const splash = document.getElementById("tgd-logo")
    if (!splash) return

    splash.classList.add("vanish")
    window.setTimeout(() => {
        const parent = splash.parentNode
        if (!parent) return

        parent.removeChild(splash)
    }, SPLASH_VANISHING_DELAY)
}
