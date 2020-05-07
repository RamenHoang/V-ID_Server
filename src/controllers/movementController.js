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

let getAllMovements = async (req, res) => {
  try {
    // 1. Get vehicle's id from userId
    let vHost = await vehicle.getIdAndLengthByHostId(req.params.userId);

    // 2. Call service
    // vHost is existed?
    // YES =>
    if (vHost !== undefined) {

      // 2.1 Get all movements
      let allMovements = await movement.getAllMovements(`${vHost._id}`);

      // 2.2 Check if allMovements is valid
      if (allMovements !== undefined) {
        if (allMovements.length > 0) {
          // VALID => response all movements to client
          return res.status(200).send({
            SERVER_RESPONSE: 1,
            message: allMovements 
          });
        } else {
          // VALID but don't include any data
          return res.status(400).send({
            SERVER_RESPONSE: 0,
            error: 'Xe của bạn chưa có dữ liệu đường đi!'
          });
        }
      } else {

        // INVALID => response error to client
        return res.status(400).send({
          SERVER_RESPONSE: 0,
          error: 'Xe của bạn chưa có dữ liệu đường đi!'
        });
      }
    }

    // NO =>
    return res.status(400).send({
      SERVER_RESPONSE: 0,
      error: 'Có gì đó không ổn, có phải bạn chưa kích hoạt thiết bị V-ID? :D'
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      SERVER_RESPONSE: 0,
      error: 'Đã có lỗi xảy ra!'
    })
  }
}

module.exports = {
  putNewLocation: putNewLocation,
  getAllMovements: getAllMovements
}
