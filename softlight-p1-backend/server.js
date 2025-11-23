import http from 'http'
import app from './src/app.js'

const PORT = process.env.PORT

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`http sever running on port: ${PORT}`)
})