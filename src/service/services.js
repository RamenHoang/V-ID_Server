let authService = require('./authService');
let userService = require('./userService');
let vehicleService = require('./vehicleService');

exports.user = userService;
exports.auth = authService;
exports.vehicle = vehicleService;
