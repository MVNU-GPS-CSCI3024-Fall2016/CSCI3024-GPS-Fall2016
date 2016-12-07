'use strict';

module.exports = function(models) {
    var getSavings = function(req, res, next) {
        var locationID = req.query.locationID,
            startDate = req.query.startDateTime,
            endDate = req.query.endDateTime;
        models.AnswersHourly.findAnswersHourlyByDate(models, locationID, startDate, endDate)
        .then(function(answersHourly) {
            res.render('index', { 
                title: 'Solar Data Savings',
                answersHourly: answersHourly
            });
        });
    };
    return {
        getSavings: getSavings
    };
}