let receiveDataFromModule = io => {
  io.on('connection', socket => {
    socket.on('send-data-to-server', data => {
      console.log(data);
    });
  })
}

module.exports = receiveDataFromModule;
