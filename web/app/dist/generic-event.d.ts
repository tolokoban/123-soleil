export interface GenericEventInterface<TArgument> {
    add(listener: (arg: TArgument) => void): void;
    remove(listener: (arg: TArgument) => void): void;
    removeAll(): void;
    readonly length: number;
}
/**
 * Listeners are function with only one argument of type TArgument.
 *
 * Usage example:
 * ```typescript
 * interface IPoint { x: number, y: number }
 * const onClick = new Event<IPoint>()
 * onClick.add( (point: IPoint) => ... )
 * ```
 */
export default class GenericEvent<TArgument> implements GenericEventInterface<TArgument> {
    private readonly name;
    private listeners;
    /**
     * @returns How many listeners are currently registred.
     */
    get length(): number;
    /**
     * @param name Any string to be used for debug purpose.
     */
    constructor(name?: string);
    /**
     * Add a listener to this event. A listener can be added only once to an event.
     * @param listener A function that expects only one parameter of type TArgument.
     */
    add(listener: (arg: TArgument) => void): void;
    /**
     * Call all the listeners one after the other with <argument> as unique parameter.
     * @param argument This argument will be sent to all the listeners. Be sure it is immutable.
     */
    readonly fire: (argument: TArgument) => void;
    /**
     * Remove a listener from this event.
     */
    remove(listener: (arg: TArgument) => void): void;
    /**
     * Remove all listeners from this event.
     */
    removeAll(): void;
}
//# sourceMappingURL=generic-event.d.ts.map