var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET calculate solar data savings and reroute */
router.get('/', function(req, res, next) {
  var locationID = req.query.locationID;
  models.Bank.findAll({
    attributes: ['bankID'],
    include: [{ 
      model: models.Location,
      attributes: [],
      where: {locationID: locationID} 
    }]
  }).then(function(banks) {
    res.render('index', { 
      title: 'Solar Data Savings',
      banks: banks
    });
  });
});

module.exports = router;
