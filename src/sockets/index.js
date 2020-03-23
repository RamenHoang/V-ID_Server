let receiveDataFromModule = require('./receiveDataFromModule');

let initSockets = io => {
  receiveDataFromModule(io);
}

module.exports = initSockets;
