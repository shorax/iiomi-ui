const withPrefix = (prefix: string, names: string) => names.startsWith(prefix) ? names : prefix + names;

function allWithPrefix<T>(prefix: string, classes: {
    [className in keyof T]: string
}) {
    const newClasses = {...classes};
    for (const key in newClasses) {
        newClasses[key] = withPrefix(prefix, newClasses[key]);
    }

    return newClasses;
}

export default {
    withPrefix,
    allWithPrefix
}