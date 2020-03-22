let UserModal = require('../models/userModel');

let findUserIdByUsername = username => {
  return new Promise(async (resolve, reject) => {
    try {
      let userId = await UserModal.findUserIdByUsername(username);
      resolve(userId);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

module.exports = {
  findUserIdByUsername: findUserIdByUsername
}
