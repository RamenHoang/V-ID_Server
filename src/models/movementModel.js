let mongoose = require('mongoose');

let MovementSchema = new mongoose.Schema({
  hostId: String,
  movementData: [
    {
      lat: Number,
      lng: Number,
      speed: Number
    }
  ]
});

MovementSchema.statics = {
  createNew(movementItem) {
    return this.create(movementItem);
  },
  pushData(id, data) {
    return this.findByIdAndUpdate(id, {
      $push: {
        movementData: {
          $each: data
        }
      }
    });
  }
}

module.exports = mongoose.model('movementdata', MovementSchema);
