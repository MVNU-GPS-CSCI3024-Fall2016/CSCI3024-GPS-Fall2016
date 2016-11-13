var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Location.findAll({
    attributes: ['locationName']
  }).then(function(locations) {
    res.render('index', { 
      title: 'Solar Data Savings',
      locations: locations
    });
  });
});

module.exports = router;
