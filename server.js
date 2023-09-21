const express = require('express')
const app = express()
const socketio = require('socket.io')
const expressServer = app.listen(8000)
const io = socketio(expressServer)


app.use(express.static('./public'))


console.log('hello')

module.exports = {
    io,
    app
}