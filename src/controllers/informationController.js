const { information } = require('../service/services');

module.exports.putNewInformation = async (req, res) => {
  try {
    
    let _information = [];
    req.body.information.split('"').map(function(item, index, srcArr) {
      let obj = {};
      if ((index + 1) % 8 === 0) {
        obj.date = item;
        obj.name = srcArr[index - 4];
        _information.push(obj);
      }
    });

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
