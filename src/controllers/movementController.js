const { movement, vehicle } = require('../service/services');

let putNewLocation = async (req, res) => {
  try {
    let lat = req.body.lat;
    let lng = req.body.lng;
    let speed = req.body.speed;
    let hostId = req.query.hostId;

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

    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
}


module.exports = {
  putNewLocation: putNewLocation
}
