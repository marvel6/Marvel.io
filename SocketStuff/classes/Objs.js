
class Obj {
    constructor() {
        this.color = this.getRandomColor()
        this.locX = Math.floor(500 * Math.random())
        this.locY = Math.floor(500 * Math.random())
        this.radius = 5
    }

    getRandomColor() {

        let r = Math.floor((Math.random() * 200) + 50)
        let g = Math.floor((Math.random() * 200) + 50)
        let b = Math.floor((Math.random() * 200) + 50)

        return `rgb(${r},${g},${b})`

    }
}

module.exports = Obj