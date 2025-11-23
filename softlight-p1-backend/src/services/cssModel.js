export const STYLE_MODEL = {
frame: {
size: ["width", "height"],
position: ["x", "y"],
layout: [
"layoutMode", "primaryAxisSizingMode", "counterAxisSizingMode",
"itemSpacing", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom",
"layoutAlign", "layoutGrow"
],
fills: ["fills"],
strokes: ["strokes", "strokeWeight", "strokeAlign", "strokeCap", "strokeJoin"],
effects: ["effects"],
cornerRadius: ["cornerRadius", "rectangleCornerRadii"],
opacity: ["opacity"],
blendMode: ["blendMode"],
overflow: ["clipsContent"],
geometry: ["isMask"],
},

rectangle: {
size: ["width", "height"],
fills: ["fills"],
strokes: ["strokes", "strokeWeight", "strokeAlign"],
cornerRadius: ["cornerRadius", "rectangleCornerRadii"],
effects: ["effects"],
opacity: ["opacity"],
blendMode: ["blendMode"],
},

text: {
text: ["characters"],
font: [
"fontFamily",
"fontPostScriptName",
"fontWeight",
"fontSize",
"textAutoResize",
"textAlignHorizontal",
"textAlignVertical",
"textCase",
"textDecoration",
"lineHeightPx",
"lineHeightPercent",
"lineHeightUnit",
"letterSpacing",
"paragraphIndent",
"paragraphSpacing"
],
fills: ["fills"],
opacity: ["opacity"]
},

vector: {
size: ["width", "height"],
fills: ["fills"],
strokes: ["strokes", "strokeWeight", "strokeAlign"],
effects: ["effects"],
opacity: ["opacity"],
blendMode: ["blendMode"]
},

component: {
size: ["width", "height"],
layout: ["layoutMode", "itemSpacing", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom"],
fills: ["fills"],
strokes: ["strokes", "strokeWeight"],
effects: ["effects"],
opacity: ["opacity"]
},

instance: {
size: ["width", "height"],
layout: ["layoutMode"],
opacity: ["opacity"],
overrides: ["componentId", "overrideProperties"]
}
};