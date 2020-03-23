const { vehicle } = require('../service/services');

let postModuleId = async (req, res) => {
  try {
    let putStatus = await vehicle.postModuleId(req.body.hostId, req.body.moduleId);
    res.status(200).send(putStatus);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  postModuleId: postModuleId
}
