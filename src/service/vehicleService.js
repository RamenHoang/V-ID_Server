let VehicleModel = require('../models/vehicleModel');

let putModuleId = (hostId, moduleId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let putStatus = await VehicleModel.putModuleId(hostId, moduleId);
      resolve(!!putStatus);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  putModuleId: putModuleId
}
