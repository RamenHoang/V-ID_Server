let passportSocketIo = require('passport.socketio');
const { dbVals } = require('./app');

let configSocketIo = (io, cookieParser, sessionStore) => {
  io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: dbVals.ssKey,
    secret: dbVals.ssSecret,
    store: sessionStore,
    success: (data, accept) => {
      console.log('Success');
      console.log(data.user);
      console.log('--------------------')
      if (!data.user.logged_in) {
        return accept('Invalid User', false);
      }
      return accept(null, true);
    },
    fail: (data, message, error, accept) => {
      console.log('Fail');
      console.log(data.user);
      console.log('--------------------')
      console.log('Failed connection to socket.io', message);
      return accept(new Error(message), false);
    }
  }));
}

module.exports = configSocketIo;
