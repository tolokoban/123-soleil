import * as React from "react"
import Api, { Broadcast } from "../../../api"

export function useShakeValue() {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
        const onMessage = (data: Broadcast) => {
            const {name, args} = data
            if (name !== "shake") return
            
            setValue(args)
        }
        Api.event.add(onMessage)
        return () => Api.event.remove(onMessage)
    }, [])
    return value
}
