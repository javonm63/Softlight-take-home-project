import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function downloadFigma(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'preview.html'); 

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: 'File not found' });
    }

    return res.status(200).download(filePath, 'preview.html', (err) => {
        if (err) {
        console.error('Error downloading file:', err);
        return res.status(500).send('Server error');
        }
    });
}