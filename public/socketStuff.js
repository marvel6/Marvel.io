

const socket = io('http://localhost:8000')


const init = async () => {

   const socketObs = await socket.emitWithAck('init', {
      playName: player.name
   })

   orbs = socketObs

   console.log(orbs)

   draw()
}


socket.on('initReturn', (data) => {



})