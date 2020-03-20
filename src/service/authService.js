let UserModel = require('../models/userModel');
let VehicleModel = require('../models/vehicleModel');

let register = data => {
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
      let newUser = await UserModel.createNew(userItem);

      let vehicleItem = {
        hostId: `${newUser._id}`,
        licensePlate: data.licensePlate,
        updatedAt: Date.now()
      }

      let newVehicle = await VehicleModel.createNew(vehicleItem);

      resolve({
        user: newUser,
        vehicle: newVehicle
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

module.exports = {
  register: register
}
