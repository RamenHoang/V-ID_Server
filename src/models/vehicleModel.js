let mongoose = require('mongoose');

let VehicleSchema = new mongoose.Schema({
  hostId: String,
  moduleId: { type: String, default: null },
  licensePlate: String,
  movementDataLength: {type: Number, default: 0},
  status: { type: Boolean, default: false }, // false is immoble, true is running
  updatedAt: { type: Number, default: Date.now }
});

VehicleSchema.statics = {
  createNew(vehicleItem) {
    return this.create(vehicleItem);
  },
  postModuleId(hostId, moduleId) {
    return this.findOneAndUpdate({
      'hostId': hostId
    }, {
      'moduleId': moduleId
    }).exec();
  },
  getIdAndLengthByHostId(hostId) {
    return this.findOne({
      hostId: hostId
    },{
      _id: 1,
      movementDataLength: 1
    }).exec();
  }, 
  increaseMovementData(id) {
    return this.findOneAndUpdate({
      _id: id
    }, {
      $inc: { 'movementDataLength': 1 }
    }).exec();
  }
}

module.exports = mongoose.model('vehicle', VehicleSchema);
