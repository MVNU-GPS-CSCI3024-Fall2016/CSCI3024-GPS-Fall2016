/**
Javascripts relating to the savings UI.
 */

'use strict';

var Savings = function() {};

Savings.prototype.submitRequest = function() {
    var query = {};
    query.locationID = $('#locations option:selected').attr('value');
    query.kwhCost = $('#kwhCost').val();

    var initDate = new Date($('#locations option:selected').attr('data-init-date')),
        startDate = $('#startDate').val(),
        endDate = $('#endDate').val(),
        startTime = 0,
        endTime = 0;

    if ($('#dateTime').is(':checked')) {
        var startMeridian = $('#startTimeMeridian').val(),
            endMeridian = $('#endTimeMeridian').val();
        startTime = this.setMeridianTime(parseInt($('#startTime').val()), startMeridian);
        endTime = this.setMeridianTime(parseInt($('#endTime').val()), endMeridian);
    }

    try {
        query.startDateTime = new Date(startDate);
        query.startDateTime.setHours(startTime);
        query.endDateTime = new Date(endDate);
        query.endDateTime.setHours(endTime);
    } catch(ex) {
        this.showError(ex);
    }

    try {
        this.validateQuery(initDate, query);
        this.storeInputs();
        window.document.location = window.document.origin + '/savings?' + $.param(query);
    } catch(ex) {
        this.showError(ex);
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

    if(!this.isValidStartDate(initDate, query.startDateTime)) {
        errArray.push('Start date must be on or after the earliest date of data collection indicated for the location');
    }
    if(!this.isValidDateRange(query.startDateTime, query.endDateTime)) {
        errArray.push('Start date must preceed end date');
    }
    if(!this.isValidEndDate(query.endDateTime)) {
        errArray.push('End date cannot be later than midnight of current date');
    }
    if(!this.isValidKwhCost(query.kwhCost)) {
        errArray.push('Please enter a positive decimal value for the kWh Cost');
    }

    if(errArray.length > 0) {
        throw errArray.join('\n');
    }
}

// Start date after initialization date
Savings.prototype.isValidStartDate = function(initDate, startDate) {
    return startDate >= initDate;
}

// End date after start date
Savings.prototype.isValidDateRange = function(startDate, endDate) {
    return endDate > startDate;
}

// End date before current date
Savings.prototype.isValidEndDate = function(endDate) {
    var date = new Date();
    date.setHours(0);
    return endDate <= date;
}

// Valid entry for kWhCost
Savings.prototype.isValidKwhCost = function(kwhCost) {
    return kwhCost > 0 && isNaN(kwhCost) == false;
}

Savings.prototype.storeInputs = function() {
    sessionStorage.setItem('locations', $('#locations option:selected').val());
    sessionStorage.setItem('dateTime', $('input[name=dateTime]:checked').val());
    sessionStorage.setItem('startDate', $('#startDate').val());
    sessionStorage.setItem('endDate', $('#endDate').val());
    if ($('#dateTime').is(':checked')) {
        sessionStorage.setItem('startTime', $('#startTime').val());
        sessionStorage.setItem('startTimeMeridian', $('#startTimeMeridian').val());
        sessionStorage.setItem('endTime', $('#endTime').val());
        sessionStorage.setItem('endTimeMeridian', $('#endTimeMeridian').val());
    }
    sessionStorage.setItem('kwhCost', $('#kwhCost').val());
}

Savings.prototype.showError = function(message) {
    $('#error-message').empty();
    $('#error-message').text(message);
    $('#error-container').show();
}

var savings = new Savings();
try {
    module.exports = savings;
} catch(ex) {};