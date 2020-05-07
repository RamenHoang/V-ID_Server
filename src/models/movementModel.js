let mongoose = require('mongoose');

let MovementSchema = new mongoose.Schema({
  hostId: String,
  movementData: {
    lat: { type: Number },
    lng: { type: Number },
    speed: { type: Number, default: 0 }
  },
  createdAt_String: { type: String, default: new Date().toString() },
  createdAt_Number: { type: Number, default: Date.now }
});

MovementSchema.statics = {
  createNew(movementItem) {
    return this.create(movementItem);
  },
  getNewest(hostId, index) {
    return this.find({
      hostId: hostId
    }).skip(index).exec();
  }, 
  getAllMovements(hostId) {
    return this.find({
      hostId: hostId
    }, {
      movementData: 1,
      _id: 0,
    }).exec()
  }
}

module.exports = mongoose.model('movement', MovementSchema);
