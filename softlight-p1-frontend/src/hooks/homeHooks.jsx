import { use, useState } from "react";

export function converterHooks() {
    const [title, setTitle] = useState("Enter your figma file key and figma access token below then click the 'send figma' button, if all goes well you'll then be able to download/preview the converted html/css.");
    const [figmaUrl, setFigmaUrl] = useState('')
    const [figmaKey, setFigmaKey] = useState('')
    const [buttons, setButtons] = useState(false)
    return {
        title, setTitle,
        figmaUrl, setFigmaUrl,
        figmaKey, setFigmaKey,
        buttons, setButtons,
    }
}