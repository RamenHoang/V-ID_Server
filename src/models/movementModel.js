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
  getNewest(id, index) {
    return this.find({
      hostId: id
    }).skip(index).exec();
  }
}

module.exports = mongoose.model('movement', MovementSchema);
