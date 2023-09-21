let Wheight = window.innerHeight
let wWidth = window.innerWidth

const canvas = document.querySelector('#the-canvas')
const context = canvas.getContext('2d')

canvas.height = Wheight
canvas.width = wWidth

const player = {}


const loginModal = new bootstrap.Modal('#loginModal')
const spawnModal = new bootstrap.Modal('#spawnModal')

window.addEventListener('load',() => {

    

    loginModal.show()

})

document.addEventListener('submit',(e) => {

    e.preventDefault()

    player.name = document.querySelector('#name-input').value
    document.querySelector('.player-name').innerHTML = player.name

    loginModal.hide()

    spawnModal.show()
})


document.querySelector('.start-game').addEventListener('click',(e) => {

    spawnModal.hide()

    Array.from(document.querySelectorAll('.hiddenOnStart')).forEach(el => {

        el.removeAttribute('hidden')

    })

    init()
})