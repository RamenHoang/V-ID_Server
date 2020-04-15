let mongoose = require('mongoose');

let VehicleSchema = new mongoose.Schema({
  hostId: String,
  moduleId: { type: String, default: null },
  licensePlate: String,
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
  }
}

module.exports = mongoose.model('vehicle', VehicleSchema);
