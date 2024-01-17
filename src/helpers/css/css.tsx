import React from "react";
import { createGenerateId, createUseStyles } from "react-jss";

export type ICssStyles<IRuleProps = {}> = Record<string, ICssProperties<IRuleProps> | ((props: IRuleProps) => ICssProperties<IRuleProps>)>;

export function css<IRuleProps>(cssStyles: ICssStyles<IRuleProps>) {
    let _cssStyles: ICssStyles<IRuleProps>;
    _cssStyles = hoistClassNamesWhichAreInsideMediaQueries(cssStyles);
    _cssStyles = parseMultipleStringLiteralIntoObject(_cssStyles);

    const _getStyles = createUseStyles(_cssStyles, { 
        generateId: generateId,
        name: 'iui'
    });

    return <T extends { CLASS: object}>(names: T, props?: IRuleProps & { theme?: Jss.Theme}) => {
        const memorizedProps = React.useMemo(() => props, [JSON.stringify(props)]);
        const styles = _getStyles(memorizedProps);
        return React.useMemo(
            () => insertGeneratedClassNamesIntoNames(names, styles), 
            [JSON.stringify(names), JSON.stringify(styles)]
        );
    };
}


// HELPERS

const generateId = createGenerateId({ minify: false });

export type ISimpleCSS = Record<string, string>;
export type INestedCSS = Record<string, string | ISimpleCSS>;
export type IComplexCSSProperties<IRuleProps> = {[key: string]: string | ((props: IRuleProps) => string | INestedCSS) | ICssProperties<IRuleProps>};

export type ICssProperties<IRuleProps> = string | IComplexCSSProperties<IRuleProps>;

export function insertGeneratedClassNamesIntoNames<T extends { CLASS: object}>(names: T, generatedClassNames: Record<string, string>): T {
    const _classes = JSON.parse(JSON.stringify(names.CLASS));
    Object.keys(_classes).forEach((name: string) => {
        const cssClassName: any = (generatedClassNames as any)[_classes[name]];
        _classes[name] = _classes[name] + (cssClassName ? ' ' + cssClassName : '');
    });
    return {...names, CLASS: _classes};
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
    if(s.trim() === '') {
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
    }
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