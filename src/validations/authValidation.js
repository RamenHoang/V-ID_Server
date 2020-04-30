let { check } = require('express-validator/check');
let SessionModel = require('../models/sessionModel');

let register = [
  check('username', 'Invalid Username. At least 5 characters')
    .isLength({ min: 5 }),
  check('password', 'Invalid Password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/),
  check('password_confirm', 'Not match')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
];

let checkLoggedIn = async (req, res, next) => {
  if (req.query.token) {
    let status = await SessionModel.findByToken(req.query.token);
    if (!!status) {
      console.log('Logged in');
      res.status(200);
      return next();
    }
  }
  console.log("Not log in");
  return res.status(500).send({
    SERVER_RESPONSE: 0,
    error: "Not logged in"
  });
}

module.exports = {
  register: register,
  checkLoggedIn: checkLoggedIn
}
