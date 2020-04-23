const { movement } = require('../service/services');

let getHome = async (req, res) => {
  try {
    let hostId = req.query.userid;
    let newestMovement = await movement.getNewestMovement(hostId);
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

module.exports = {
  getHome: getHome
}
