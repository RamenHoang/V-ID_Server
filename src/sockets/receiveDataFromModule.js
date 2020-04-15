let receiveDataFromModule = io => {
  io.on('connection', socket => {
    socket.on('send-data-to-server', data => {
      console.log(data, typeof data);
      // io.sockets.connected[socket.id].emit('response-from-server', 'Received!');
    });
  })
}

module.exports = receiveDataFromModule;
