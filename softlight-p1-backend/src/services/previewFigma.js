import fs from "fs";
import path from "path";

function viewFigma(htmlOutput, cssOutput) {
  const fullHtml = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Figma Preview</title>
<style>
  /* reset */
 /* html,body { margin:0; padding:0; box-sizing:border-box;} */
  /* generated styles */
  ${cssOutput}
</style>
</head>
  ${htmlOutput}
</html>`;

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  const filePath = path.join(publicDir, "preview.html");
  fs.writeFileSync(filePath, fullHtml, "utf8");
  console.log("Preview saved as preview.html");
  setTimeout(() => {
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Failed to delete file:", err);
          } else {
            console.log("File deleted:", filePath);
          }
        });
    }
  }, 10 * 60 * 1000);
}

export default viewFigma

