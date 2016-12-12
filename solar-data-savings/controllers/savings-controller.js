'use strict';

module.exports = function(models) {
    var getSavings = function(req, res, next) {
        var params = {};
        try {
            params.locationID = parseInt(req.query.locationID);
            params.startDate = new Date(req.query.startDateTime);
            params.endDate = new Date(req.query.endDateTime);
            params.kwhCost = parseFloat(req.query.kwhCost);
        } catch(ex) {
            console.log(ex);
        }

        models.Location.findInitDateByID(params.locationID)
        .then(function(initDate) {
            if(initDate != null) {
                params.initDate = initDate;
                try {
                    models.AnswersHourly.validateParams(params)
                } catch(ex) {
                    console.log(ex);
                }
                models.AnswersHourly.findAnswersHourlyByDate(models, params)
                .then(function(answersHourly) {
                    models.Location.findAllLocations().then(function (locations) {
                        res.render('savings', {
                            title: 'Solar Data Savings',
                            locations: locations,
                            answersHourly: answersHourly
                        });
                    });                    
                });
            } else {
                return next(new Error('Invalid Location'));
            }
        });
    };
    return {
        getSavings: getSavings
    };
}