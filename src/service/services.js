let authService = require('./authService');
let userService = require('./userService');
let vehicleService = require('./vehicleService');
let movementService = require('./movementService');

exports.user = userService;
exports.auth = authService;
exports.vehicle = vehicleService;
exports.movement = movementService;
