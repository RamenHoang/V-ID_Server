let InformationModel = require('../models/informationModel');
let VehicleModel = require('../models/vehicleModel');


let putNewInformation = (theInformation, theUserId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let vHost = await VehicleModel.getIdAndLengthByHostId(theUserId);
      let hostId = `${vHost._id}`;

      let putInformationResult = theInformation.map(async information => {
        let informationByNameAndHostId = await InformationModel.findByNameAndHost(hostId, information.name);

        if (informationByNameAndHostId) {
          return InformationModel.updateFixedDate(hostId, information.name, information.date);
        }

        let informationItem = {
          hostId: hostId,
          name: information.name,
          fixedDate_String: information.date
        }

        return InformationModel.createNew(informationItem);
      });

      putInformationResult = Promise.all(putInformationResult);

      resolve(putInformationResult);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  putNewInformation: putNewInformation
}
