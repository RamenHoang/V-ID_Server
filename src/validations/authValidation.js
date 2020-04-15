let {check} = require('express-validator/check');

let register = [
  check('username', 'Invalid Username. At least 5 characters')
    .isLength({min: 5}),
  check('password', 'Invalid Password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/),
  check('password_confirm', 'Not match')
    .custom((value, {req}) => {
      return value === req.body.password;
    })
];

let checkLoggedIn = (req, res, next) => {
  console.log(req);
  if (!req.isAuthenticated()) {
    return res.status(500).send('Not logged in');
  }
  next();
}

module.exports = {
  register: register,
  checkLoggedIn: checkLoggedIn
}
