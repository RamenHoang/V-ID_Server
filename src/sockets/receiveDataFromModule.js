let receiveDataFromModule = io => {
  io.on('connection', socket => {

    console.log(socket.id);
    
    socket.on('send-data-to-server', data => {

      io.sockets.emit('Server-sent-gps-data', {
        name: "Hu hu"
      });

    });

    socket.on('hello', data => {
      console.log(data, socket.id);
    })
  })
}

module.exports = receiveDataFromModule;
