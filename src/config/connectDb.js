let mongoose = require('mongoose');
const { dbVals } = require('./app');

let connectDb = () => {
  return mongoose.connect('mongodb+srv://ramen-manager:Hakuouki123@cluster-vid-d9htd.mongodb.net/VID?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
}

module.exports = connectDb;