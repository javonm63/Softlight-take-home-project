import { body } from 'express-validator';

export const figmaValidate = [
    body('figmaKey').isString().notEmpty().withMessage('figma file key required!').trim(),
    body('figmaUrl').isString().notEmpty().withMessage('personal figma token required!').trim()
]