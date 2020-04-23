let receiveDataFromModule = io => {
  io.on('connection', socket => {

    console.log(socket.id);
    
    socket.on('send-data-to-server', data => {
      console.log(data);

      io.sockets.emit('Server-sent-gps-data', {
        lat: data.gps[0],
        lng: data.gps[1]
      });

    });
  })
}

module.exports = receiveDataFromModule;
