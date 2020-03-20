let mongoose = require('mongoose');

let VehicleSchema = new mongoose.Schema({
  hostId: String,
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
  }
}

module.exports = mongoose.model('vehicle', VehicleSchema);
