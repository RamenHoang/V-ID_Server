const { movement, vehicle } = require('../service/services');

exports.putNewLocation = async (hostId, lat, lng, speed) => {
  try {
    let vHost = await vehicle.getIdAndLengthByHostId(hostId);

    let newLocationItem = {
      hostId: `${vHost._id}`,
      movementData: {
        lat: lat,
        lng: lng,
        speed: speed
      }
    }

    movement.addNew(newLocationItem);
  } catch (error) {
    console.log(error);
  }
}
