var express = require('express');
var router = express.Router();
var models = require('../models');
var indexController = require('../controllers/index-controller.js')(models);

router.use('/savings', require('./savings.js'));

/* GET home page with locations and their initial data collection dates */
router.get('/', indexController.getLocations);

module.exports = router;
