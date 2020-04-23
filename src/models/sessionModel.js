let mongoose = require('mongoose');

let SessionSchema = new mongoose.Schema();

SessionSchema.statics = {
  findByToken(token) {
    return this.findOne({
      'session': {$regex: `.*${token}.*`}
    }).exec();
  },
  logout(token) {
    return this.findOneAndRemove({
      'session': {$regex: `.*${token}.*`}
    }).exec();
  }
}


module.exports = mongoose.model('session', SessionSchema);