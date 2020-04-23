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

let getIdAndLengthByHostId = hostId => {
  return new Promise(async (resovle, reject) => {
    try {
      let vhost = await VehicleModel.getIdAndLengthByHostId(hostId);
      resovle(vhost);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  postModuleId: postModuleId,
  getIdAndLengthByHostId: getIdAndLengthByHostId
}
