let express = require('express');
const { home, auth, user, vehicle } = require('../controllers/controllers');
const { authValid } = require('../validations/validators');
// PassportLocal.initModulePassportLocal(passport);

let router = express.Router();

let initRoutes = (app, passport) => {
  router.get('/', authValid.checkLoggedIn, home.getHome);

  router.post('/register', authValid.register, auth.postRegister);

  router.post('/login', auth.postLogin);

  router.get('/logout', authValid.checkLoggedIn, auth.getLogout);
  
  router.get('/get-info', user.getInfo);

  app.use('/', router);
}

module.exports = initRoutes;
