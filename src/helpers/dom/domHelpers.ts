import classnames from "classnames";

export function mergeClassNames(...args: (string | null | undefined | { [keyof: string]: boolean | undefined | null })[]): string | undefined {
  let result = classnames(args).replace(/ +(?=)/g, '').trim();

  if (typeof result === 'string') {
    result = [...new Set(result.split(' '))].join(' ');
  }

  return result === '' ? undefined : result;
}
