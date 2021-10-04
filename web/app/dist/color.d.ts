declare type ColorOrString = Color | string;
/**
 * Fast color manipulations.
 * Attributes R  (red), G  (green), B  (blue), A  (alpha), H  (hue), S
 * (saturation), and L (luminance) are all floats between 0 and 1.
 */
export default class Color {
    static fromColorOrString(colorOrString?: ColorOrString): Color;
    static fromArrayRGB(rgb: [number, number, number]): Color;
    static fromArrayRGBA(rgba: [number, number, number, number]): Color;
    static fromHSL(hue: number, saturation: number, luminance: number): Color;
    static fromHSLA(hue: number, saturation: number, luminance: number, alpha: number): Color;
    /**
     * Check if a CSS stle string is an actual color.
     */
    static isValid(codeCSS: any): codeCSS is string;
    /**
     * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
     */
    static contrast(background: ColorOrString | undefined, foreground: ColorOrString | undefined): number;
    /**
     * Return the color with better contrast on a given surface.
     *
     * @param backColor Color of the background surface.
     * @param foreColors Possible colors for a text on this surface.
     */
    static bestContrast<T extends (Color | string)>(backColor: ColorOrString, ...foreColors: T[]): T;
    /**
     * return luminance between 0 (darkest) and 1 (brightest).
     * If the color is invalid, return -1.
     */
    static luminance(colorOrString: ColorOrString | undefined): number;
    /**
     * Returns 1 for bright colors and 0 for dark colors.
     * If the color is invalid, return -1.
     */
    static luminanceStep(colorOrString: ColorOrString): -1 | 0 | 1;
    static isDarkColor(colorOrString: ColorOrString): boolean;
    static isLightColor(colorOrString: ColorOrString): boolean;
    static makeDarker(colorOrString: ColorOrString, luminancePercentage?: number): Color;
    static makeHueRotated(colorOrString: ColorOrString, rotation?: number): Color;
    static makeTransparent(colorOrString: ColorOrString, alpha: number): Color;
    /**
     * Mix two colors. alpha should be between 0 and 1,
     * but there is no check on this.
     * If alpha is 0, the resulting color is `color1`,
     * if alpha is 1, the resulting color is `color2`.
     */
    static mix(colorOrString1: ColorOrString, colorOrString2: ColorOrString, alpha?: number): Color;
    static newBlack(): Color;
    static newWhite(): Color;
    /**
     * Create a new Color instance base on R,G,B channels.
     *
     * @param   red - Value between 0 and 1.
     * @param   green - Value between 0 and 1.
     * @param   blue - Value between 0 and 1.
     * @returns New instance of Color.
     */
    static fromRGB(red: number, green: number, blue: number): Color;
    /**
     * Create a new Color instance base on R,G,B,A channels.
     *
     * @param   red - Value between 0 and 1.
     * @param   green - Value between 0 and 1.
     * @param   blue - Value between 0 and 1.
     * @param   alpha - Value between 0 and 1.
     * @returns New instance of Color.
     */
    static fromRGBA(red: number, green: number, blue: number, alpha: number): Color;
    static normalize(codeCSS: string): string;
    /**
     * Create an array of colors by interpolating on other colors.
     */
    static interpolate(colors: Array<Color | string>, arrayLength: number): Color[];
    /**
     * If `colors` has only two elements, this method is the same as `mix()`.
     * Otherwise, it will perform a linear blending through the colors.
     * If alpha is 0, the resulting color is `colors[0]`,
     * If alpha is 1, the resulting color is `colors[colors.length - 1]`,
     */
    static ramp(colors: Color[], alpha?: number): Color;
    A: number;
    B: number;
    G: number;
    H: number;
    L: number;
    R: number;
    S: number;
    constructor(codeCSS?: string);
    copy(): Color;
    /**
     * @see https://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
     */
    hsl2rgb(): void;
    /**
     * Compute the luminance of the color.
     * @see https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
     */
    luminance(): number;
    /**
     * @returns 0 if the color is dark and 1 if it is light.
     */
    luminanceStep(): 0 | 1;
    /**
     * Parse a color writtent in CSS syntax.
     *
     * @param   code - CSS color.
     * @returns `true` if the color has valid syntax.
     */
    parse(code?: string): boolean;
    rgb2hsl(): void;
    stringify(): string;
    toArrayRGB(): [number, number, number];
    toArrayRGBA(): [number, number, number, number];
    private parseHexa;
    /**
     * @param   text - `hsl(200, 140, 50)`
     * @returns `true` if `text` is a valid `hsl()` syntax.
     */
    private parseHSL;
    /**
     * @param   text - `rgb(200, 140, 50)`
     * @returns `true` if `text` is a valid `rgb()` syntax.
     */
    private parseRGB;
    /**
     * @param   text - `rgba(200, 140, 50, 0.5)`
     * @returns `true` if `text` is a valid `rgba()` syntax.
     */
    private parseRGBA;
}
export {};
//# sourceMappingURL=color.d.ts.map