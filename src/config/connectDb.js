let mongoose = require('mongoose');
const { dbVals } = require('./app');

let connectDb = () => {
  // return mongoose.connect(`${dbVals.dbConnection}://${dbVals.dbHost}:${dbVals.dbPort}/${dbVals.dbName}`, 
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false
  // });
  return mongoose.connect('mongodb+srv://ramen:Ramen1999@cluster0-ox4sy.mongodb.net/test?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
}

module.exports = connectDb;