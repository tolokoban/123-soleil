interface DeviceAPI {
    start(): void
}

declare interface Window {
    DeviceAPI: DeviceAPI | undefined
}
