import prefixHelpers from './prefixHelpers';

export function allWithPrefix<T>(classNames: {[className in keyof T]: string}) {
	return prefixHelpers.allWithPrefix(('iui' + '-'), classNames);
}

export function withPrefix(className: string) {
	return prefixHelpers.withPrefix(('iui' + '-'), className);
}