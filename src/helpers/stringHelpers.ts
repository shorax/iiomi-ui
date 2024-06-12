export function transformKeyToCamelCase(string: string) {
	const DASH = '-', UNDERSCORE = '_';

	return string
		.split(DASH)
		.map(s => s.indexOf(UNDERSCORE) > -1 ? toCamelCase(s, UNDERSCORE) : transformToLowerCaseIfFirstLetterIsUpperCase(s))
		.join(DASH);
}

export function toCamelCase(word: string, separator: string) {
	return word
		.split(separator)
		.map((w, i) => i === 0 ? w.toLowerCase() : toPascalCase(w))
		.join('');
}

export function toPascalCase(word: string) {
	return word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase();
}

export function transformToLowerCaseIfFirstLetterIsUpperCase(word: string) {
	return (word[0]+'').toUpperCase() === word[0] ? word.toLowerCase() : word;
}