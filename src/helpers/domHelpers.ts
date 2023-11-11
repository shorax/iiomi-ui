interface ClassNamesObject {
    [key: string]: string | boolean | undefined;
  }
  
  export function mergeClassNames(baseClassName: string, classNamesObject: ClassNamesObject): string {
    const conditionalClassNames = Object.entries(classNamesObject)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => (value ? `${baseClassName}-${key}` : ''))
      .join(' ');
  
    return `${baseClassName} ${conditionalClassNames}`.trim();
  }
  