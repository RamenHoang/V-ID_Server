let express = require('express');
const { home, auth } = require('../controllers/controllers');
const { authValid } = require('../validations/validators');
let initPassportLocal = require('../controllers/passportLocal');
let passport = require('passport');

initPassportLocal();

let router = express.Router();

let initRoutes = (app) => {
  router.get('/', authValid.checkLoggedIn, home.getHome);

  router.post('/register', authValid.register, auth.postRegister);

  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).send(req.user);
  });

  router.get('/logout', authValid.checkLoggedIn, auth.getLogout);
  
  app.use('/', router);
}

module.exports = initRoutes;
