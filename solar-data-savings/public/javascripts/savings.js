var Savings = function() {};

Savings.prototype.submitRequest = function() {
    var query = {};
    query.locationID = $('#locations option:selected').attr('value');
    query.kwh = $('#kwhCost').val();
    var initDate = new Date($('#locations option:selected').attr('data-init-date')),
        startDate = $('#startDate').val(),
        endDate = $('#endDate').val(),
        startTime = 0,
        endTime = 0;

    if ($('#dateTime').attr('checked', 'true')) {
        var startMeridian = $('#startTimeMeridian').val(),
            endMeridian = $('#endTimeMeridian').val();
        startTime = this.setMeridianTime($('#startTime').val(), startMeridian);
        endTime = this.setMeridianTime($('#endTime').val(), endMeridian);
    }

    try {
        query.startDateTime = new Date(startDate);
        query.startDateTime.setHours(startTime);
        query.endDateTime = new Date(endDate);
        query.endDateTime.setHours(endTime);
    } catch(ex) {
        console.log(ex);
    }
    try {
        this.validateQuery(initDate, query);
        window.document.location += JSON.stringify(query);
    } catch(ex) {
        $('#error-message').empty();
        $('#error-message').text(ex);
        $('#error-container').show();
    }
}

Savings.prototype.setMeridianTime = function(time, meridian) {
    if(meridian === 'PM') {
        time += 12;
    }
    return time;
}

Savings.prototype.validateQuery = function(initDate, query) {
    var errArray = [];

    if(!this.isInitDate(initDate, query.startDateTime)) {
        errArray.push('Start date must be on or after the earliest date of data collection indicated for the location');
    }
    if(!this.isValidDateRange(query.startDateTime, query.endDateTime)) {

    }

    if(errArray.length > 0) {
        throw errArray.join('\n');
    }
}

Savings.prototype.isInitDate = function(initDate, date) {
    return date >= initDate;
}

Savings.prototype.isValidDateRange = function(start, end) {
    return end > start;
}

var savings = new Savings();
try {
    module.exports = savings;
} catch(ex) {};