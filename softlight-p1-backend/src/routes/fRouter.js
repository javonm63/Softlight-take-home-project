import express from 'express'
import { fetchFigma } from '../controllers/fetchFigmas.js'
import { figmaValidate } from '../validators/figmaValidator.js'
import { validateGetFigma } from '../utils/figmaValidateHelper.js'

const figmaRouter = express.Router()

figmaRouter.post('/figma', figmaValidate, validateGetFigma, fetchFigma)
// figmaRouter.get()
// figmaRouter.put()
// figmaRouter.patch()
// figmaRouter.delete()

export default figmaRouter