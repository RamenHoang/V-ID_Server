let MovementModel = require('../models/movementModel');
let VehicleModel = require('../models/vehicleModel');


let getNewestMovement = (hostId) => {
  return new Promise(async(resolve, reject) => {
    try {
      let vHost = await VehicleModel.getIdAndLengthByHostId(hostId);
      let newestMovement = await MovementModel.getNewest(vHost._id, vHost.movementDataLength - 1);
      console.log(newestMovement[0]);
      return resolve(newestMovement[0].movementData);
    } catch (error) {
      return reject(error);
    }
  });
}

let addNew = item => {
  return new Promise((resolve, reject) => {
    try {
      MovementModel.createNew(item);
      VehicleModel.increaseMovementData(item.hostId);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  getNewestMovement: getNewestMovement,
  addNew: addNew
}
