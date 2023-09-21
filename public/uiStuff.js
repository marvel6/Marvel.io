let Wheight = window.innerHeight
let wWidth = window.innerWidth

const canvas = document.querySelector('#the-canvas')
const context = canvas.getContext('2d')

canvas.height = Wheight
canvas.width = wWidth

window.addEventListener('load',() => {

    const loginModal = new bootstrap.Modal('#loginModal')

    loginModal.show()

})