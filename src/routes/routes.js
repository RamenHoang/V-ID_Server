let express = require('express');
const { home, auth, user, vehicle, movement } = require('../controllers/controllers');
const { authValid } = require('../validations/validators');

let router = express.Router();

let initRoutes = (app, passport) => {
  router.get('/', (req, res) => {
    res.status(200).send("Everything is ok");
  });

  router.get('/get-lastest-location', authValid.checkLoggedIn, home.getHome);

  router.post('/register', authValid.register, auth.postRegister);

  router.post('/login', auth.postLogin);

  router.get('/logout/:token', auth.getLogout);
  
  router.get('/get-info', user.getInfo);

  router.post('/post-module-id', vehicle.postModuleId);
  
  router.put('/put-new-location', movement.putNewLocation);

  app.use('/', router);
}

module.exports = initRoutes;
