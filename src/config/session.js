let session = require('express-session');
let connectMongo = require('connect-mongo');
const { dbVals } = require('./app');

let store = new connectMongo(session);

let dbConnection = dbVals.dbConnection;
let dbHost = dbVals.dbHost;
let dbPort = dbVals.dbPort;
let dbName = dbVals.dbName;

let sessionStore = new store({
  url: 'mongodb+srv://ramen-manager:Hakuouki123@cluster-vid-d9htd.mongodb.net/VID?retryWrites=true&w=majority',
  autoReconnect: true
});

let configSession = app => {
  app.use(session({
    key: dbVals.ssKey,
    secret: dbVals.ssSecret,
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
  }));
}

module.exports = {
  configSession: configSession,
  sessionStore: sessionStore
}
