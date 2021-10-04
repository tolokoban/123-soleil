import GenericEvent from "./generic-event"

export interface Broadcast {
    name: string
    args: any
}

class Api {
    public readonly event = new GenericEvent<Broadcast>()
    private readonly DeviceAPI = window.DeviceAPI

    constructor() {
        window.addEventListener("message", evt => {
            const { data } = evt
            if (!data) return
            if (Array.isArray(data)) return
            const { type, name, args } = data
            if (type !== "DeviceAPI") return
            this.event.fire({ name, args })
        })
        this.start()
    }

    public start() {
        this.DeviceAPI?.start()
    }
}

export default new Api()
