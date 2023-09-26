class PlayerData {

    constructor(playerName, settings) {

        this.name = playerName
        this.locX = Math.floor(settings.worldWidth * Math.random() + 10)
        this.locY = Math.floor(settings.worldHeight * Math.random() + 10)
        this.radius = settings.defaultGenericOrbsSize
        this.color = this.getRandomColor()
        this.score = 0
        this.orbsAbsorbed = 0

    }

    getRandomColor() {

        let r = Math.floor((Math.random() * 200) + 50)
        let g = Math.floor((Math.random() * 200) + 50)
        let b = Math.floor((Math.random() * 200) + 50)


        return `rgb(${r},${g},${b})`
    }

}