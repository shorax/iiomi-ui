import storageHelpers from "../helpers/storageHelpers";

let lightStyles = {
    BORDER_RADIUS_SMALL: getFontSize(0.25),
    BORDER_RADIUS: getFontSize(0.5),
    BORDER_RADIUS_LARGE: getFontSize(1),
    MARGIN_SMALL: getFontSize(0.5),
    MARGIN: getFontSize(0.75),
    TEXT_COLOR: '#141414',
    BACKGROUND_COLOR: '#FFFFFF',
    FONT_SIZE: getFontSize(),
};

let darkStyles = {
    ...lightStyles,
    TEXT_COLOR: '#e7e7e7',
    BACKGROUND_COLOR: '#171717',
};

function getFontSize(size: number = 1): string {
    let fontSize = 16;
    return Math.floor(fontSize * size) + 'px';
}

export type IPartialStyles = Partial<typeof lightStyles>;

export function setStyles(s: IPartialStyles){
    darkStyles = {...darkStyles, ...s};
    lightStyles = {...lightStyles, ...s};
}

export function getStyles() {
    let styles = lightStyles;
    if(storageHelpers.localStorage.getItem('theme') === 'dark'){
        styles = darkStyles;
    }
    return styles;
}

export function getStyle<ICssProps>(cb: (s: typeof lightStyles, cssProps: ICssProps) => string, isImportant?: boolean){
    return (cssProps: ICssProps) => cb(getStyles(), cssProps) + (isImportant ? ' !important' : '');
}