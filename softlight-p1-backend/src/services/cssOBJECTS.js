// import { STYLE_MODEL } from "./cssModel.js";

function getNodeStyles(node, parent = null) {
  const styles = {};

  // --- Dimensions ---
  if (node.absoluteBoundingBox) {
    styles.width = node.absoluteBoundingBox.width + "px";
    if (node.type !== "TEXT") styles.height = node.absoluteBoundingBox.height + "px";
  }

  // --- Background & border (for non-text nodes) ---
  if (node.type !== "TEXT") {
    if (node.fills?.length) {
      const fill = node.fills[0];
      if (fill.type === "SOLID" && fill.visible !== false) {
        styles.backgroundColor =
          `rgba(${fill.color.r * 255}, ${fill.color.g * 255}, ${fill.color.b * 255}, ${fill.color.a})`;
      }
      if ((fill.type === "GRADIENT_LINEAR" || fill.type === "GRADIENT_RADIAL") && !styles.background) {
        const gradientStops = fill.gradientStops
          .map(gs => {
            const r = Math.round(gs.color.r * 255);
            const g = Math.round(gs.color.g * 255);
            const b = Math.round(gs.color.b * 255);
            const a = gs.color.a;
            return `rgba(${r}, ${g}, ${b}, ${a}) ${gs.position * 100}%`;
          })
          .join(", ");
        const deg = fill.gradientTransform ? 90 : 0;
        styles.background = `linear-gradient(${deg}deg, ${gradientStops})`;
      }
    }

    if (node.strokes?.length && !styles.border) {
      const stroke = node.strokes[0];
      if (stroke.type === "SOLID") {
        styles.border =
          `${node.strokeWeight || 1}px solid rgba(${stroke.color.r * 255}, ${stroke.color.g * 255}, ${stroke.color.b * 255}, ${stroke.color.a})`;
      }
    }

    if (node.opacity !== undefined && !styles.opacity) styles.opacity = node.opacity;

    if (node.effects?.length && !styles.boxShadow) {
      const shadows = node.effects
        .filter(e => e.visible !== false && (e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW"))
        .map(e => {
          const r = Math.round(e.color.r * 255);
          const g = Math.round(e.color.g * 255);
          const b = Math.round(e.color.b * 255);
          const a = e.color.a;
          const x = e.offset?.x || 0;
          const y = e.offset?.y || 0;
          const blur = e.radius || 0;
          const spread = e.spread || 0;
          return `${x}px ${y}px ${blur}px ${spread}px rgba(${r}, ${g}, ${b}, ${a})`;
        })
        .join(", ");
      if (shadows) styles.boxShadow = shadows;
    }
  }

  // --- Border Radius ---
  if (node.cornerRadius !== undefined && node.cornerRadius !== null) styles.borderRadius = node.cornerRadius + "px";
  else if (node.rectangleCornerRadii?.length === 4) styles.borderRadius = node.rectangleCornerRadii.map(r => r + "px").join(" ");

  // --- Text styling ---
  if (node.type === "TEXT" && node.style) {
    if (node.style.textAlignHorizontal) styles.textAlign = node.style.textAlignHorizontal.toLowerCase();
    if (node.style.textAlignVertical) styles.verticalAlign = node.style.textAlignVertical.toLowerCase();
    if (node.style.fontSize) styles.fontSize = node.style.fontSize + "px";
    if (node.style.fontWeight) styles.fontWeight = node.style.fontWeight;
    if (node.style.lineHeightPx) styles.lineHeight = node.style.lineHeightPx + "px";
    if (node.style.letterSpacing) styles.letterSpacing = node.style.letterSpacing + "px";
    if (node.style.textCase) styles.textTransform = node.style.textCase.toLowerCase();
    if (node.style.textDecoration) styles.textDecoration = node.style.textDecoration.toLowerCase();

    // --- get all fonts from styleOverrides ---
    const fonts = new Set();
    if (node.style.fontFamily) fonts.add(node.style.fontFamily);

    if (node.styleOverrides && node.styleOverrideTable) {
      Object.values(node.styleOverrides).forEach(id => {
        const override = node.styleOverrideTable[id];
        if (override?.fontFamily) fonts.add(override.fontFamily);
      });
    }

    if (fonts.size) styles.fontFamily = Array.from(fonts).join(", ");

    if (node.fills?.length) {
      const fill = node.fills[0];
      if (fill.type === "SOLID") {
        styles.color =
          `rgba(${fill.color.r * 255}, ${fill.color.g * 255}, ${fill.color.b * 255}, ${fill.color.a})`;
      }
      if ((fill.type === "GRADIENT_LINEAR" || fill.type === "GRADIENT_RADIAL") && !styles.background) {
        const gradientStops = fill.gradientStops
          .map(gs => {
            const r = Math.round(gs.color.r * 255);
            const g = Math.round(gs.color.g * 255);
            const b = Math.round(gs.color.b * 255);
            const a = gs.color.a;
            return `rgba(${r}, ${g}, ${b}, ${a}) ${gs.position * 100}%`;
          })
          .join(", ");
        const deg = fill.gradientTransform ? 90 : 0;
        styles.background = `linear-gradient(${deg}deg, ${gradientStops})`;
      }
    }
  }

  // --- Positioning relative to parent ---
  if (parent?.absoluteBoundingBox && node.absoluteBoundingBox) {
    const parentBox = parent.absoluteBoundingBox;
    const nodeBox = node.absoluteBoundingBox;

    const top = nodeBox.y - parentBox.y;
    const left = nodeBox.x - parentBox.x;

    const parentIsRoot = parent.id === "node-1";

    const isNode14 =
      node.id === "node-14" ||
      node.name === "node-14" ||
      node.className === "node-14" ||
      (node.characters && node.characters.trim() === "Forgot password");

    if (isNode14) {
      styles.position = "absolute";
      styles.top = top + "px";
      styles.left = left + "px";
      return styles;
    }

    if (node.type === "TEXT" && parentIsRoot) {
      styles.position = "absolute";
      styles.top = top + "px";
      styles.left = left + "px";
    } else if (node.type === "TEXT" && !parentIsRoot) {
      styles.marginTop = top + "px";
      styles.marginLeft = left + "px";
    } else if (node.type !== "TEXT") {
      styles.position = "absolute";
      styles.top = top + "px";
      styles.left = left + "px";
    }
  }

  if (parent === null) {
    styles.display = "flex";
    styles.flexDirection = "column";
    styles.position = "relative";
  }

  return styles;
}

export default getNodeStyles;