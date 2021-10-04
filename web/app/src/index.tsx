import * as React from "react"
import * as ReactDOM from "react-dom"
import BackgroundURL from "./gfx/background.webp"
import Gun from "./gfx/gun.mp3"
import Song from "./gfx/song.mp3"
import "./index.css"
import App from "./view/app"

function start() {
    const song = new Promise<HTMLAudioElement>(resolve => {
        const audio = new Audio()
        audio.src = Song
        audio.oncanplaythrough = () => resolve(audio)
    })
    const gun = new Promise<HTMLAudioElement>(resolve => {
        const audio = new Audio()
        audio.src = Gun
        audio.oncanplaythrough = () => resolve(audio)
    })
    const background = new Image()
    background.src = BackgroundURL
    background.onload = async () => {
        const audioSong = await song
        const audioGun = await gun
        ReactDOM.render(
            <App song={audioSong} gun={audioGun} />,
            document.getElementById("root")
        )
        removeSplashScreen()
    }
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
