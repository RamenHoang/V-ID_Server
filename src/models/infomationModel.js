let mongoose = require('mongoose');

let InformationModel = new mongoose.Schema({
  hostId: String,
  name: String,
  fixedDate_String: String,
  fixedDate_Number: Number,
  createdAt_String: { type: String, default: new Date().toString() },
  createdAt_Number: { type: Number, default: Date.now }
});

InformationModel.statics = {
  createNew(informationItem) {
    return this.create(informationItem);
  }
}

module.exports = mongoose.model('information', InformationModel);