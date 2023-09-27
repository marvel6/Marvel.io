const io = require('../server').io
const app = require('../server').app

// ==============CLASSESS==================

const Player = require('./classes/Player')
const PlayConfig = require('./classes/PlayerConfig')
const PlayerDatum = require('./classes/playerDatas')
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

    const playerName = 'devel'

    const playConfig = new PlayConfig(settings)
    const playerData = new PlayerDatum(playerName, settings)

    const player = new Player(socket.id, playConfig, playerData)

    socket.emit('init', {
        orbs
    })
})

function initGame() {

    for (let i = 0; i < settings.numberOfOrbs; i++) {

        orbs.push(new Orb(settings))
    }
}

