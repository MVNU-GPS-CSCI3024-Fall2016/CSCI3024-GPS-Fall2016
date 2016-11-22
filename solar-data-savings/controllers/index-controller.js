'use strict';

module.exports = function (models) {
    var getLocations = function (req, res, next) {
        models.Location.findAll({
            attributes: ['locationID', 'locationName', 'initializationDate']
        }).then(function (locations) {
            res.render('index', {
                title: 'Solar Data Savings',
                locations: locations
            });
        });
    };
    return {
        getLocations: getLocations
    };
}
