const io = require('../server').io
const app = require('../server').app

const Orb = require('./classes/objects')

const orbs = [];

const settings = {
    numberOfOrbs: 500,
    defaultSize: 6,
    defaultSpeed: 6,
    defaultZoom: 1.5,
    worldWidth: 500,
    worldHeight: 500,
    defaultGenericOrbsSize: 5
}

initGame()

io.on('connect', (socket) => {

    socket.emit('init', {
        orbs
    })
})

function initGame() {

    for (let i = 0; i < settings.numberOfOrbs; i++) {

        orbs.push(new Orb(settings))
    }
}

