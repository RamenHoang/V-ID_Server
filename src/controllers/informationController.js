const { information } = require('../service/services');

module.exports.putNewInformation = async (req, res) => {
  try {
    let _information = req.body.information;
    let userId = req.body.userId;

    let putStatus = await information.putNewInformation(_information, userId);

    if (!!putStatus) {
      return res.status(200).send(putStatus);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}
