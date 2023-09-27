

const socket = io('http://localhost:8000')


const init = async () => {

   //the init function is called cuz the user clicked and event

   const socketObs = await socket.emitWithAck('init', {
      playName: player.name
   })

   orbs = socketObs

   console.log(orbs)

   draw()
}


socket.on('tick', (playersData) => {

   console.log(playersData)

})