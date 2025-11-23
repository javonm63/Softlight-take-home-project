import getNodeStyles from "./cssOBJECTS.js";

function renderNode(node, parent = null, classMap) {
  const tag = parent === null ? "body" : node.type === "TEXT" ? "p" : "div";

  // Compute styles
  const styles = getNodeStyles(node, parent);

  // Assign class
  const className = `node-${classMap.count++}`;
  classMap.map[className] = styles;

  // Start HTML
  let html = `<${tag} class="${className}">`;

  // Add text content if any
  if (node.characters) {
    html += node.characters.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Render children
  if (node.children?.length) {
    for (const child of node.children) {
      html += renderNode(child, node, classMap);
    }
  }

  html += `</${tag}>`;
  return html;
}


export default renderNode
