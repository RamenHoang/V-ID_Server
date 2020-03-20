let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.statics = {
  createNew(userItem) {
    return this.create(userItem);
  },
  findByUsername(username) {
    return this.findOne({ 'username': username }).exec();
  },
  findUserById(id) {
    return this.findById(id).exec();
  }
}

UserSchema.methods = {
  comparePassword(password) {
    return password === this.password;
  }
}

module.exports = mongoose.model('user', UserSchema);
