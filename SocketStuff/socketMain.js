const io = require('../server').io
const app = require('../server').app

const Orb = require('./classes/orb')

const orbs = [];


function initGame() {

    for(let i =0; i < 500 ; i++){

        orbs.push(new Orb())
    }   
}

