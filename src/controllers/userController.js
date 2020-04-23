const { user } = require('../service/services');

let getInfo = async (req, res) => {
  try {
    console.log(req.query);
    let userId = await user.findUserIdByUsername(req.query.username);
    res.status(200).send(`${userId._id}`);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getInfo: getInfo
}
