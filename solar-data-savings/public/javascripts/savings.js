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
    if(!this.isValidDateRange1(query.startDateTime, query.endDateTime)) {
        errArray.push('Start date must not be after end date.');
    }
    if(!this.isValidDateRange2(query.endDateTime)) {
        errArray.push('End date cannot be later than current date.');
    }
    if(this.isValidDateRange3(query.endDateTime)) {
        errArray.push('You must search for different days or use the Date & Time search option.');
    }

    if(errArray.length > 0) {
        throw errArray.join('\n');
    }
}

// Start date before initDate
Savings.prototype.isInitDate = function(initDate, date) {
    return date >= initDate;
}

// End date before start date
Savings.prototype.isValidDateRange1 = function(start, end) {
    return end >= start;
}

// End date after current date
Savings.prototype.isValidDateRange2 = function(end) {
    var d = new Date();
    return d > end;
}

// End date equals start date while search date only is selected
Savings.prototype.isValidDateRange3 = function(start, end) {
    return (($('#date').attr('checked', 'true')) && (start == end));
}

var savings = new Savings();
try {
    module.exports = savings;
} catch(ex) {};