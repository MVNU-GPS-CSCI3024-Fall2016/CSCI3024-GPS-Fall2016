function getAnswersHourlySavings() {
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
        startTime = setMeridianTime($('#startTime').val(), startMeridian);
        endTime = setMeridianTime($('#endTime').val(), endMeridian);
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
        validateQuery(initDate, query);
        window.document.location += JSON.stringify(query);
    } catch(ex) {
        $('#error-message').empty();
        $('#error-message').text(ex);
        $('#error-container').show();
    }
}

function setMeridianTime(time, meridian) {
    if(meridian === 'PM') {
        time += 12;
    }
    return time;
}

function validateQuery(initDate, query) {
    var errArray = [];

    if(!isInitDate(initDate, query.startDateTime)) {
        errArray.push('Start date must be on or after the earliest date of data collection indicated for the location');
    }
    if(isValidDateRange(query.startDateTime, query.endDateTime)) {

    }

    if(errArray.length > 0) {
        throw errArray.join('\n');
    }
}

function isInitDate(initDate, date) {
    return date >= initDate;
}

function isValidDateRange(start, end) {
    return end > start;
}

function closeError() {
    $('#error-container').hide();
}