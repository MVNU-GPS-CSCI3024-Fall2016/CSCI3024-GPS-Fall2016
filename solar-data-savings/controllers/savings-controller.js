'use strict';

module.exports = function(models) {
    var getSavings = function(req, res, next) {
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
    };
    return {
        getSavings: getSavings
    };
}