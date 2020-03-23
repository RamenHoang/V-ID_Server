let mongoose = require('mongoose');

let VehicleSchema = new mongoose.Schema({
  hostId: String,
  moduleId: { type: String, default: null },
  licensePlate: String,
  lastestSpeed: { type: Number, default: null },
  lastestLocation: {
    lat: { type: Number, default: 0 },
    lng: { type: Number, default: 0 }
  },
  updatedAt: { type: Number }
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
