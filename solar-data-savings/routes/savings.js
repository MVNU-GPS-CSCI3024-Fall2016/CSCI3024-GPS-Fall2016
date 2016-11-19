var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET calculate solar data savings and reroute */
router.get('/', function(req, res, next) {
  req.param('locationID');
  models.Bank.findAll({
    attributes: ['bankID'],
    include: [{
        model: models.Location,
        where: { locationID: Sequelize.col('bank.locationID') }
    }]
  }).then(function(banks) {
    res.render('index', { 
      title: 'Solar Data Savings',
      banks: banks
    });
  });
});

module.exports = router;
