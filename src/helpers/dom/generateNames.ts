import prefixHelpers from "../prefixHelpers";
import { transformKeyToCamelCase } from "../stringHelpers";
import { allWithPrefix, withPrefix } from "../withPrefix";

export default function generateNames<T extends string>(
    componentId: string,
    componentName: string,
    ...keys: T[]
) {
    type IWithRoot = { ROOT: string};
    type INames<T extends string> = {
        ID: Record<T, string> & IWithRoot,
        CLASS: Record<T, string> & IWithRoot,
    };

    const ROOT = 'ROOT';
    const namesKeysAsObjectWithoutROOTKeyForIds: any = {};
    const namesKeysAsObjectWithoutROOTKeyForClassNames: any = {};

    const rootId = createName(componentId);
    const rootClassNameNoPrefix = createNameWithoutPrefix(componentName);
    const rootClassName = createName(componentName);

    keys
    .map(key => key.toUpperCase())
    .filter(key => key !== ROOT)
    .forEach(key => {
        namesKeysAsObjectWithoutROOTKeyForIds[key] = transformKeyToCamelCase(key);
        namesKeysAsObjectWithoutROOTKeyForClassNames[key] = namesKeysAsObjectWithoutROOTKeyForIds[key];
    });

    let classNames: any = {};
    Object.keys(namesKeysAsObjectWithoutROOTKeyForIds).forEach(key => {
        classNames[key] = rootClassNameNoPrefix + '-' + namesKeysAsObjectWithoutROOTKeyForClassNames[key];
    });

    const r: any = {
        ID: prefixHelpers.allWithPrefix(rootId + '-', namesKeysAsObjectWithoutROOTKeyForIds),
        CLASS: allWithPrefix(classNames)
    };

    r.ID.ROOT = rootId;

    r.CLASS.ROOT = rootClassName;

    return r as INames<T>;
}

export function createName(...substrings: (string | number)[]){
    return withPrefix(createNameWithoutPrefix(...substrings));
}

export function createNameWithoutPrefix(...substrings: (string | number)[]){
    return transformKeyToCamelCase(substrings.join('-')).replace('_', '');
};