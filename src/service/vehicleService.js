let VehicleModel = require('../models/vehicleModel');

let postModuleId = (hostId, moduleId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let putStatus = await VehicleModel.postModuleId(hostId, moduleId);
      resolve(!!putStatus);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  postModuleId: postModuleId
}
