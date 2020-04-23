const SessionModel = require('../models/sessionModel');

module.exports = {
  logout: (token) => {
    SessionModel.logout(token);
  }
}
