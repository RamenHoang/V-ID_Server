let express = require('express');
let initRoutes = require('./routes/routes');
let bodyParser = require('body-parser');
const connectDb = require('./config/connectDb');
const configSession = require('./config/session');
let passport = require('passport');

let app = express();

let hostname = '192.168.1.5';
let port = '9080';

connectDb();

configSession(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

initRoutes(app);


app.listen(port, hostname, () => {
  console.log(`Hello Ramen. Server on ${hostname}:${port}/`);
})
