let express = require('express');
const { home, auth, user, vehicle, movement, information } = require('../controllers/controllers');
const { suggestion } = require('../service/services');
const { authValid } = require('../validations/validators');

let router = express.Router();

let initRoutes = (app, passport) => {
  router.get('/', (req, res) => {
    res.render('index');
  });

  router.get('/map', home.getMap);

  router.get('/get_suggestion', suggestion.suggestStolenStatus);
  
  router.get('/get-latest-location', authValid.checkLoggedIn, home.getHome);

  router.post('/register', authValid.register, auth.postRegister);

  router.post('/login', auth.postLogin);

  router.get('/logout/:token', auth.getLogout);

  router.get('/get-info', user.getInfo);

  router.post('/post-module-id', vehicle.postModuleId);

  router.put('/put-new-location', movement.putNewLocation);

  router.put('/put-new-information', information.putNewInformation);

  router.get('/get-all-movements/:userId', authValid.checkLoggedIn, movement.getAllMovements);

  app.use('/', router);
}

module.exports = initRoutes;
