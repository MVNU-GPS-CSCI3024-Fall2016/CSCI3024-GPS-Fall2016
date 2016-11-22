var express = require('express');
var router = express.Router();
var models = require('../models');
var savingsController = require('../controllers/savings-controller.js')(models);

/* GET calculate solar data savings and reroute */
router.get('/', savingsController.getSavings);

module.exports = router;
