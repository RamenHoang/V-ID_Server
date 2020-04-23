let express = require('express');
const { home, auth, user, vehicle, movement } = require('../controllers/controllers');
const { authValid } = require('../validations/validators');
// PassportLocal.initModulePassportLocal(passport);

let router = express.Router();

let initRoutes = (app, passport) => {
  router.get('/', home.getHome);

  router.get('/get-lastest-location', authValid.checkLoggedIn, home.getHome);

  router.post('/register', authValid.register, auth.postRegister);

  router.post('/login', auth.postLogin);

  router.get('/logout', auth.getLogout);
  
  router.get('/get-info', user.getInfo);

  router.post('/post-module-id', vehicle.postModuleId);
  
  router.put('/put-new-location', movement.putNewLocation);

  app.use('/', router);
}

module.exports = initRoutes;
