import express from 'express'
import { downloadFigma } from '../controllers/downloadFigmas.js'

const downloadRouter = express.Router()

downloadRouter.get('/html', downloadFigma)
// downloadRouter.post()
// downloadRouter.put()
// downloadRouter.patch()
// downloadRouter.delete()

export default downloadRouter