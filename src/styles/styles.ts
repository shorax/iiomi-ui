import storageHelpers from '../helpers/storageHelpers';

let lightStyles = {
	BORDER_RADIUS_SMALL: getFontSize(0.25),
	BORDER_RADIUS: getFontSize(0.5),
	BORDER_RADIUS_LARGE: getFontSize(1),
	MARGIN_SMALL: getFontSize(0.5),
	MARGIN: getFontSize(0.75),
	COLOR_PRIMARY: '#6024FF',
	COLOR_PRIMARY_DARK: '#5800FF',
	COLOR_PRIMARY_DISABLED: '#140332',
	COLOR_PRIMARY_TEXT_DISABLED: '#6024FF',
	COLOR_SECONDARY: '#60637A',
	COLOR_SECONDARY_DARK: '#525468',
	COLOR_SECONDARY_DISABLED: '#09090b',
	COLOR_TERTIARY_DISABLED: '#3F3F4B',
	BORDER_COLOR_LIGHT: '#474957',
	BORDER_COLOR: '#7B7F95',
	BORDER_COLOR_DARK: '#525468',
	TEXT_COLOR: '#E6E7FF',
	TEXT_COLOR_DARK: '#7B7F95',
	TEXT_COLOR_DISABLED: '#A7AAB9',
	BACKGROUND_COLOR: '#27272A',
	BACKGROUND_COLOR_DARK: '#18181B',
	FONT_SIZE: getFontSize()
};

let darkStyles = {
	...lightStyles,
	TEXT_COLOR: '#e7e7e7',
	BACKGROUND_COLOR: '#171717'
};

function getFontSize(size: number = 1): string {
	let fontSize = 16;
	return Math.floor(fontSize * size) + 'px';
}

const defaultFontStyles = {
	H1: {
		fontSize: getFontSize(2),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		letterSpacing: '-0.04em',
		fontWeight: 'normal',
		margin: '0'
	},
	H2: {
		fontSize: getFontSize(1.5),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		letterSpacing: '-0.04em',
		fontWeight: 'normal',
		margin: '0'
	},
	H3: {
		fontSize: getFontSize(1.25),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		letterSpacing: '-0.02em',
		fontWeight: 'normal',
		margin: '0'
	},
	H4: {
		fontSize: getFontSize(1.125),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		letterSpacing: '-0.02em',
		fontWeight: 'normal',
		margin: '0'
	},
	H5: {
		fontSize: getFontSize(0.875),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		fontWeight: 'normal',
		margin: '0'
	},
	H6: {
		fontSize: getFontSize(0.875),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		fontWeight: 'normal',
		margin: '0'
	},
	DEFAULT_SMALL: {
		fontSize: getFontSize(0.875),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em'
	},
	DEFAULT_SMALL_BOLD: {
		fontSize: getFontSize(0.875),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		fontWeight: 600
	},
	DEFAULT_REGULAR: {
		fontSize: getFontSize(1),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em'
	},
	DEFAULT_REGULAR_BOLD: {
		fontSize: getFontSize(1),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em',
		fontWeight: 600
	},
	DEFAULT_LARGE: {
		fontSize: getFontSize(1.125),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em'
	},
	DEFAULT_LARGE_BOLD: {
		fontSize: getFontSize(1.125),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em',
		fontWeight: 600
	},
	LABEL_REGULAR: {
		fontSize: getFontSize(0.875),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em'
	},
	LABEL_REGULAR_BOLD: {
		fontSize: getFontSize(0.875),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.4em',
		fontWeight: 600
	},
	LABEL_LARGE: {
		fontSize: getFontSize(1.125),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em'
	},
	LABEL_LARGE_BOLD: {
		fontSize: getFontSize(1.125),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em',
		fontWeight: 600
	},
	LABEL_SMALL: {
		fontSize: getFontSize(0.75),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.3em',
		fontWeight: 600
	},
	PARAGRAPH_REGULAR: {
		fontSize: getFontSize(1),
		fontFamily: 'Roboto, sans-serif',
		lineHeight: '1.5em',
		fontWeight: 400
	}
};

export const fontStyles = {
	DEFAULT: defaultFontStyles
};

export type IPartialStyles = Partial<typeof lightStyles>;

export function setStyles(s: IPartialStyles) {
	darkStyles = {...darkStyles, ...s};
	lightStyles = {...lightStyles, ...s};
}

export function getStyles() {
	let styles = lightStyles;
	if (storageHelpers.localStorage.getItem('theme') === 'dark') {
		styles = darkStyles;
	}
	return styles;
}

export function getStyle<ICssProps>(cb: (s: typeof lightStyles, cssProps: ICssProps) => string, isImportant?: boolean) {
	return (cssProps: ICssProps) => cb(getStyles(), cssProps) + (isImportant ? ' !important' : '');
}