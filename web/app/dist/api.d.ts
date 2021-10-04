import GenericEvent from "./generic-event";
export interface Broadcast {
    name: string;
    args: any;
}
declare class Api {
    readonly event: GenericEvent<Broadcast>;
    private readonly DeviceAPI;
    constructor();
    start(): void;
}
declare const _default: Api;
export default _default;
//# sourceMappingURL=api.d.ts.map