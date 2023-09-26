class Orb {

    constructor(settings) {
        this.color = this.getRandomColor();
        this.locX = Math.floor(Math.random() * settings.worldWidth);
        this.locY = Math.floor(Math.random() * settings.worldHeight);
        this.radius = settings.defaultGenericOrbsSize;
    }

    getRandomColor() {

        let r = Math.floor((Math.random() * 200) + 50)
        let g = Math.floor((Math.random() * 200) + 50)
        let b = Math.floor((Math.random() * 200) + 50)


        return `rgb(${r},${g},${b})`
    }

}


module.exports = Orb