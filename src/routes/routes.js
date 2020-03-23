let express = require('express');
const { home, auth, user, vehicle } = require('../controllers/controllers');
const { authValid } = require('../validations/validators');
let PassportLocal = require('../controllers/passportLocal');
let passport = require('passport');

PassportLocal.initPassportLocal(passport);
// PassportLocal.initModulePassportLocal(passport);

let router = express.Router();

let initRoutes = (app) => {
  router.get('/', authValid.checkLoggedIn, home.getHome);

  router.post('/register', authValid.register, auth.postRegister);

  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send(req.user);
  });

  router.get('/logout', authValid.checkLoggedIn, auth.getLogout);
  
  router.get('/get-info', user.getInfo);

  router.post('/post-module-id', passport.authenticate('local'), vehicle.postModuleId);

  app.use('/', router);
}

module.exports = initRoutes;
