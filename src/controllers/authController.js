const { validationResult } = require('express-validator/check');
const { auth } = require('../service/services');

let postRegister = async (req, res) => {
  let results = validationResult(req);
  let errs = [];
  if (!results.isEmpty()) {
    errs = Object.values(results.mapped()).map(errObj => errObj.msg);
    return res.status(500).send(errs);
  }

  let status = await auth.register(req.body);
  return res.status(200).send(status);
}

let getLogout = (req, res) => {
  req.logout();
  return res.status(200).send('Loged out');
}

module.exports = {
  postRegister: postRegister,
  getLogout: getLogout
}
