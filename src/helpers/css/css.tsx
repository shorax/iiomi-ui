import React from 'react';
import * as RJSS from 'react-jss';

export type ICssStyles<IRuleProps = {}> = Record<string, ICssProperties<IRuleProps> | ((props: IRuleProps) => ICssProperties<IRuleProps>)>;

export function css<IRuleProps>(cssStyles: ICssStyles<IRuleProps>) {

	let _cssStyles: ICssStyles<IRuleProps>;
	_cssStyles = hoistClassNamesWhichAreInsideMediaQueries(cssStyles);
	_cssStyles = parseMultipleStringLiteralIntoObject(_cssStyles);

	const _getStyles = RJSS.createUseStyles(_cssStyles, {
		generateId: generateId,
		name: 'iui'
	});

	return <T extends { CLASS: object }>(names: T, props?: IRuleProps & { theme?: any /*Jss.Theme*/ }) => {
		const memorizedProps = React.useMemo(() => props, [JSON.stringify(props)]);
		const styles = _getStyles(memorizedProps);
		return React.useMemo(
			() => insertGeneratedClassNamesIntoNames(names, styles),
			[JSON.stringify(names), JSON.stringify(styles)]
		);
	};
}

const descendant = (...classNames: string[]) => '& .' + classNames.join('.');
descendant['h1'] = '& h1';
descendant['h2'] = '& h2';
descendant['h3'] = '& h3';
descendant['h4'] = '& h4';
descendant['h5'] = '& h5';
descendant['h6'] = '& h6';
descendant['div'] = '& div';
descendant['label'] = '& label';
descendant['p'] = '& p';
descendant['span'] = '& span';
descendant['svg'] = '& svg';
descendant['button'] = '& button';
descendant['input'] = '& input';
descendant['img'] = '& img';
descendant['anyDescendant'] = '& *';
css.descendant = descendant;

const child = (...classNames: string[]) => '& > .' + classNames.join('.');
child['h1'] = '& > h1';
child['h2'] = '& > h2';
child['h3'] = '& > h3';
child['h4'] = '& > h4';
child['h5'] = '& > h5';
child['h6'] = '& > h6';
child['div'] = '& > div';
child['label'] = '& > label';
child['p'] = '& > p';
child['span'] = '& > span';
child['svg'] = '& > svg';
child['button'] = '& > button';
child['input'] = '& > input';
child['img'] = '& > img';
css.child = child;

css['h1'] = 'h1';
css['h2'] = 'h2';
css['h3'] = 'h3';
css['h4'] = 'h4';
css['h5'] = 'h5';
css['h6'] = 'h6';
css['div'] = 'div';
css['label'] = 'label';
css['p'] = 'p';
css['span'] = 'span';

css.modifier = (...classNames: string[]) => '&.' + classNames.join('.');
css.hasNot = (...classNames: string[]) => '&' + classNames.map(className => ':not(.' + className + ')').join('');
css.childNumber = (n: number) => '&:nth-child(' + n + ')';
css.BEFORE = '&::before';
css.AFTER = '&::after';
css.HOVER = '&:hover';
css.FOCUS = '&:focus';
css.ACTIVE = '&:active';
css.EMPTY = '&:empty';
css.DISABLED = '&[disabled]';
css.FIRST_CHILD = '&:first-child';
css.LAST_CHILD = '&:last-child';
css.FIRST_OF_TYPE = '&:first-of-type';

css.UNSET = 'unset';
css.INHERIT = 'inherit';
css.INITIAL = 'initial';

css.MEDIA_QUERIES = {
	minWidth: (pixels: number) => `@media (min-width: ${pixels}px)`,
	maxWidth: (pixels: number) => `@media (max-width: ${pixels}px)`,
};

export default css;


// HELPERS

const generateId = RJSS.createGenerateId({ minify: false });

export type ISimpleCSS = Record<string, string>;
export type INestedCSS = Record<string, string | ISimpleCSS>;
export type IComplexCSSProperties<IRuleProps> = { [key: string]: string | ((props: IRuleProps) => string | INestedCSS) | ICssProperties<IRuleProps> };

export type ICssProperties<IRuleProps> = string | IComplexCSSProperties<IRuleProps>;

export function insertGeneratedClassNamesIntoNames<T extends { CLASS: object }>(names: T, generatedClassNames: Record<string, string>): T {
	const _classes = JSON.parse(JSON.stringify(names.CLASS));
	Object.keys(_classes).forEach((name: string) => {
		const cssClassName: any = (generatedClassNames as any)[_classes[name]];
		_classes[name] = _classes[name] + (cssClassName ? ' ' + cssClassName : '');
	});
	return { ...names, CLASS: _classes };
}

export function parseMultipleStringLiteralIntoObject<IRuleProps>(cssStyles: ICssStyles<IRuleProps>): Record<string, any> {
	Object.keys(cssStyles).forEach(key => {
		if (typeof cssStyles[key] === 'string') {
			cssStyles[key] = pasrseStringLiteralIntoObject(cssStyles[key] as string);
		}
	});
	return cssStyles;
}

export function pasrseStringLiteralIntoObject(s: string) {
	const replaceAll = (text: string, replaceThis: string, withThis: string) => text.split(replaceThis).join(withThis);
	if (s.trim() === '') {
		s = '{}';
	} else {
		s = '{"' + ((s + '')
			.split('\n')
			.join(''))
			.trim()
			.replace(/\s+/g, ' ');

		s = replaceAll(s, '; ', ';');
		s = replaceAll(s, ';', '","');
		s = replaceAll(s, ':', '":"') + '}';
		s = replaceAll(s, '","', '"}');
		s = replaceAll(s, '" ', '"');
	}
	return JSON.parse(s);
}

export function hoistClassNamesWhichAreInsideMediaQueries<IRuleProps>(cssStyles: ICssStyles<IRuleProps>) {
	return {
		...createEmptyStylesForClassNames(getClassNamesThatAreInsideMediaQueries(cssStyles)),
		...cssStyles,
	};
}

function getClassNamesThatAreInsideMediaQueries<IRuleProps>(cssStyles: ICssStyles<IRuleProps>) {
	const mediaQueryKeys = Object.keys(cssStyles).filter(key => key.startsWith('@media'));
	const classNamesInsideMediaQueries = mediaQueryKeys.map(key => typeof cssStyles[key] === 'object' ? Object.keys(cssStyles[key]) : []);
	return ([] as string[]).concat(...classNamesInsideMediaQueries);
}

function createEmptyStylesForClassNames<IRuleProps>(classNames: string[]) {
	return classNames.reduce((styles, key) => {
		styles[key] = {};
		return styles;
	}, {} as ICssStyles<IRuleProps>);
}