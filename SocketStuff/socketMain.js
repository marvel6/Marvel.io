const io = require('../server').io
const app = require('../server').app

const Orb = require('./classes/objects')

const orbs = [];

initGame()

io.on('connect', (socket) => {

    socket.emit('init', {
        orbs
    })
})

function initGame() {

    for (let i = 0; i < 500; i++) {

        orbs.push(new Orb())
    }
}

