const { validationResult } = require('express-validator/check');
const { auth, movement, session } = require('../service/services');
let passport = require('passport');

let postRegister = async (req, res) => {
  console.log(req.body); // username. password
  let results = validationResult(req);
  let errs = [];
  if (!results.isEmpty()) {
    errs = Object.values(results.mapped()).map(errObj => errObj.msg);
    console.log("Error post register");
    return res.status(400).send(errs);
  }

  try {
    let registerStatus = await auth.register(req.body);
    console.log("Post Register");
    if (registerStatus.error) {
      return res.status(400).send(registerStatus);
    }
    
    passport.authenticate('local', (err, user, info) => {
      req.logIn(user, err => {
        if (!err) {
          // console.log(req.session.cookie);
          console.log(user);
          return res.status(200).json({
            SERVER_RESPONSE: 1,
            message: `Đăng kí thành công. Xin chào ${req.user.username}`,
            token: req.session.passport.user.token,
            userid: `${req.user._id}`
          });   
        }
      });
    }) (req, res);

  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}

let getLogout = (req, res) => {
  req.logout();
  session.logout(req.params.token);
  return res.status(200).send('Logged out');
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
      if (!err) {
        // console.log(req.session.cookie);
        return res.status(200).json({
          SERVER_RESPONSE: 1,
          message: `Đăng nhập thành công. Xin chào ${req.user.username}`,
          token: req.session.passport.user.token,
          userid: `${req.user._id}`
        });   
      }
    });
  }) (req, res, next);
}

module.exports = {
  postRegister: postRegister,
  getLogout: getLogout,
  postLogin: postLogin
}
