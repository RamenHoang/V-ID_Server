const { movement } = require('../service/services');

let getHome = async (req, res) => {
  try {
    let hostId = req.query.userid;
    let newestMovement = await movement.getNewestMovement(hostId);

    if (newestMovement === null) {
      return res.status(200).send({
        SERVER_RESPONSE: 0,
        message: `Chào mừng bạn đã sử dụng V-ID`,
        movementData: newestMovement
      });
    }

    return res.status(200).send({
      SERVER_RESPONSE: 1,
      message: `Chào mừng bạn đã sử dụng V-ID`,
      movementData: newestMovement
    });
  } catch (error) {
    console.log('Error at getNewestMovement', error);
    return res.status(500).send(error);
  }
}

let getMap = async (req, res) => {
  let hostId = '5eaf9bfc9bc3b70017fbe21c';
  let newestMovement = await movement.getNewestMovement(hostId);

  // console.log(newestMovement);

  let newData = {
    lat: newestMovement.lat,
    lng: newestMovement.lng
  }

  return res.render('map', newData);
}

module.exports = {
  getHome: getHome,
  getMap: getMap
}
