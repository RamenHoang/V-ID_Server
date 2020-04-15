let express = require('express');
let initRoutes = require('./routes/routes');
let bodyParser = require('body-parser');
const connectDb = require('./config/connectDb');
const session = require('./config/session');
let passport = require('passport');
let socketio = require('socket.io');
let cookieParser = require('cookie-parser');
let configSocketIo = require('./config/socketio');
let http = require('http');
let initSockets = require('./sockets/index');
let initPassportLocal = require('./config/passportLocal');

let app = express();

let hostname = '192.168.1.7';
let port = '9080';

let server = http.createServer(app);
let io = socketio(server);

connectDb();

session.configSession(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

initPassportLocal(passport);
initRoutes(app, passport);

// configSocketIo(io, cookieParser, session.sessionStore);

initSockets(io);

server.listen(port, hostname, () => {
  console.log(`Hello Ramen. Server on ${hostname}:${port}/`);
});
