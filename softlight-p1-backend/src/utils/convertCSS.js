export function generateCss(classMap) {
  let css = "";

  for (const className in classMap.map) {
    css += `.${className} {\n`;

    const styles = classMap.map[className];
    for (const key in styles) {
      const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      css += `  ${cssKey}: ${styles[key]};\n`;
    }

    css += `}\n`;
  }

  return css;
}