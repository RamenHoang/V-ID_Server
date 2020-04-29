let mongoose = require('mongoose');

let InformationModel = new mongoose.Schema({
  hostId: String,
  name: String,
  fixedDate_String: String,
  createdAt_String: { type: String, default: new Date().toString() },
  createdAt_Number: { type: Number, default: Date.now }
});

InformationModel.statics = {
  createNew(informationItem) {
    return this.create(informationItem);
  },
  findByNameAndHost(hostId, name) {
    return this.findOne({
      $and: [
        {'hostId': hostId},
        {'name': name}
      ]
    }).exec();
  },
  updateFixedDate(hostId, name, date) {
    return this.findOneAndUpdate({
      'hostId': hostId,
      'name': name
    }, {
      'fixedDate_String': date
    }).exec();
  }
}

module.exports = mongoose.model('information', InformationModel);