let mongoose = require('mongoose');
const {dbVals} = require('./app');

let connectDb = () => {
  return mongoose.connect(`${dbVals.dbConnection}://${dbVals.dbHost}:${dbVals.dbPort}/${dbVals.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
}

module.exports = connectDb;