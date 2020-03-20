let session = require('express-session');
let connectMongo = require('connect-mongo');
const { dbVals } = require('./app');

let store = new connectMongo(session);

let dbConnection = dbVals.dbConnection;
let dbHost = dbVals.dbHost;
let dbPort = dbVals.dbPort;
let dbName = dbVals.dbName;

let sessionStore = new store({
  url: `${dbConnection}://${dbHost}:${dbPort}/${dbName}`,
  autoReconnect: true
});

let configSession = app => {
  app.use(session({
    key: 'express.sid',
    secret: 'secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 15 // 2 weeks
    }
  }));
}

module.exports = configSession;
