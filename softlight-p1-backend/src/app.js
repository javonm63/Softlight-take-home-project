import express, { urlencoded } from 'express';
import path from "path";
import { fileURLToPath } from "url";
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit'
import figmaRouter from './routes/fRouter.js';
import downloadRouter from './routes/dRouter.js';
import { errorHandler, notFound } from './utils/errorHandler.js';
// GLOBAL VARIABLES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// MIDDLEWARES
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(helmet());
app.use(hpp());
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true
}));
app.use(morgan('dev'));
app.use(compression());
app.use('/api', rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    message: 'Too many requests, try again later.'
}));
// PREVIEW ROUTE 
app.use(express.static(path.join(__dirname,"..", "public")));
// ROUTES
app.use('/api/fetch', figmaRouter)
app.use('/api/download', downloadRouter)
app.use(notFound)
app.use(errorHandler)
// TEST ROUTE 
app.get('/api/test', (req, res) => {
    return res.status(200).json({message: 'Figma conversion server up and running.'})
})

export default app;