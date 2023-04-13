/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        black: string;
        white: string;
        gray: string;
        blue: string;
        red: string;
        yellow: string;
        pink: string;
        turq: string;
        orange: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        round: string;
    };
    fontWeights: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        black: string;
        white: string;
        gray: string;
        blue: string;
        red: string;
        yellow: string;
        pink: string;
        turq: string;
        orange: string;
    };
    fonts: {
        sans: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    radii: {
        1: string;
        2: string;
        3: string;
        round: string;
    };
    fontWeights: unknown;
    lineHeights: unknown;
    letterSpacings: unknown;
    borderWidths: unknown;
    borderStyles: unknown;
    shadows: unknown;
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
