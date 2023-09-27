

const socket = io('http://localhost:8000')


const init = () => {

   socket.emit('init', {
      playName: player.name
   })

   console.log(orbs)

   draw()
}


socket.on('initReturn', (data) => {

   orbs = data.orbs

})