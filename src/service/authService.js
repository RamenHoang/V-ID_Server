let UserModel = require('../models/userModel');
let VehicleModel = require('../models/vehicleModel');
let MovementModel = require('../models/movementModel');

let register = data => {
  // username
  // password
  // biensoxe
  return new Promise(async (resolve, reject) => {
    try {
      let existedUser = await UserModel.findByUsername(data.username);
      if (existedUser) {
        return reject('User is existed!');
      }
      
      let userItem = {
        username: data.username,
        password: data.password
      }
      // created!
      let newUser = await UserModel.createNew(userItem);


      let vehicleItem = {
        hostId: `${newUser._id}`,
        licensePlate: data.licensePlate,
        updatedAt: Date.now()
      }

      let newVehicle = await VehicleModel.createNew(vehicleItem);

      if (!!newUser && !!newVehicle) {
        resolve({
          SERVER_RESPONSE: 1,
          message: `Chào mừng ${newUser.username} đã đến với V-ID`
        })
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

module.exports = {
  register: register
}
