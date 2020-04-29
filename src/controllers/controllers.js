let homeController = require('./homeController');
let authController = require('./authController');
let userController = require('./userController');
let vehicleController = require('./vehicleController');
let movementController = require('./movementController');
let informationController = require('./informationController');

exports.home = homeController;
exports.auth = authController;
exports.user = userController;
exports.vehicle = vehicleController;
exports.movement = movementController;
exports.information = informationController;
