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
let configViewEngine = require('./config/viewEngine');

let hostname = 'localhost';
let port = '9080';

let initSockets = require('./sockets/index');
let initPassportLocal = require('./config/passportLocal');

let app = express();

let server = http.createServer(app);
let io = socketio(server);

connectDb();

session.configSession(app);

configViewEngine(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({
  strict: false
}));

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

initPassportLocal(passport);
initRoutes(app, passport);

app.get('/alarm', (req, res) => {
  io.sockets.emit('Server-suggest-is-stolen', {
    status: 1
  });
  console.log("GET");
  return res.status(200).send('OK');
});


app.post("/data", (req, res) => {
  console.log(req.body);
  return res.status(200).send("POST: OK");
})

// configSocketIo(io, cookieParser, session.sessionStore);

initSockets(io);

// server.listen(port, hostname, () => {
//   console.log(`Hello Ramen. Server on ${hostname}:${port}/`);
// });

server.listen(process.env.PORT, () => {
	console.log(`Hello Ramen, I'm running at ${process.env.PORT}/`);
});
