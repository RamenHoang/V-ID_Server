const { validationResult } = require('express-validator/check');
const { auth, movement } = require('../service/services');

let postRegister = async (req, res) => {
  let results = validationResult(req);
  let errs = [];
  if (!results.isEmpty()) {
    errs = Object.values(results.mapped()).map(errObj => errObj.msg);
    console.log("Error post register");
    return res.status(500).send(errs);
  }

  let registerStatus = await auth.register(req.body);
  console.log("Post Register");
  return res.status(200).send(registerStatus);
}

let getLogout = (req, res) => {
  req.logout();
  return res.status(200).send('Loged out');
}

module.exports = {
  postRegister: postRegister,
  getLogout: getLogout
}
