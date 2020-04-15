const { validationResult } = require('express-validator/check');
const { auth } = require('../service/services');
let passport = require('passport');

let postRegister = async (req, res) => {
  console.log(req.body);
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

let postLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (!user) {
      return res.status(400).json({
        SERVER_RESPONSE: 0,
        error: 'Tài khoản hoặc mật khẩu không chính xác'
      });
    } 
    
    req.logIn(user, err => {
      if (err)
        return next(err);
      if (!err)
        return res.status(200).json({
          SERVER_RESPONSE: 1,
          message: `Đăng nhập thành công. Xin chào ${req.user.username}`
        });   
    });
  }) (req, res, next);
}

module.exports = {
  postRegister: postRegister,
  getLogout: getLogout,
  postLogin: postLogin
}
