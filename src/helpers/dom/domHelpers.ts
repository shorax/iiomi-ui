import classnames from 'classnames';

export function mergeClassNames(...args: (string | null | undefined | { [keyof: string]: boolean | undefined | null })[]): string | undefined {
	let result = classnames(args).replace(/ +(?= )/g, '').trim();

	result = [...new Set(result.split(' '))].join(' ');

	return result === '' ? undefined : result;
}

export function isMobileDevice() {
	if(/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	}
	if(/MacIntel/.test(navigator.platform)) {
		if(navigator.maxTouchPoints > 2) {
			return true;
		}
	}
	return false;
}
