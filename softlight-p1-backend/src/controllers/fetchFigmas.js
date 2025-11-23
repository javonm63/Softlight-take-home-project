import viewFigma from "../services/previewFigma.js";
import renderNode from "../services/renderNODES.js";
import { generateCss } from "../utils/convertCSS.js";

export async function fetchFigma(req, res) {
    try { 
        const file_key = req.body.figmaUrl;
        const figmaApiUrl = process.env.FIG_API_URL

        const figReq = await fetch(`${figmaApiUrl}${file_key}`, {
            method: "GET",
            headers: {"X-Figma-Token": `${req.body.figmaKey}`, 'Content-Type': 'application/json'},
            credentials: 'include',
        });
        
        if (!figReq.ok) {
            const error = await figReq.json();
            if (error.status === 429) {
                const retryAfter = figReq.headers.get("Retry-After"); 
                console.log("Rate limit hit! Retry after:", retryAfter, "seconds");
                return res.status(429).json({message: 'Rate limit hit!'});
            } else {
                console.error('request error: ', error);
                return res.status(500).json({message: 'Request Error', error: error});
            }
        } else {
            const data = await figReq.json();
            const classMap = { count: 0, map: {} };

            // Main container
            const mainFrame = data.document.children[0];
            // HTML conversion
            const htmlOutput = renderNode(mainFrame, null, classMap, true);
            // CSS conversion 
            const cssOutput = generateCss(classMap);
            // HTML boilerplate 
            viewFigma(htmlOutput, cssOutput);
            
            return res.status(200).json({
            message: "Converted successfully!",
            htmlOutput,
            cssOutput
            });
        };
    } catch (err) {
        console.error('error: ', err);
        return res.status(500).json({error: 'Server Error', err});
    };
};

// check to see if the preview.html file was created then go to the frontend and setup preview button to go to preview.html in the browser