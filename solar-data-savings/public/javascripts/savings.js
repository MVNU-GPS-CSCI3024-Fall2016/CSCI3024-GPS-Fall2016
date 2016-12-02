function getAnswersHourlySavings(initDate) {
    var query = {};
    query.locationID = $('#locations option:selected').attr('value');
    query.kwh = $('#kwhCost').val();
    var startDate = $('#startDate').val(),
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
        validateQuery(query);
        window.document.location += JSON.stringify(query);
    } catch(ex) {

    }
}

function setMeridianTime(time, meridian) {
    if(meridian === 'PM') {
        time += 12;
    }
    return time;
}

function validateQuery(query) {
    var isValid = true;

    // if(isMinimumDate(query.startDateTime))
    if(isValidDateRange(query.startDateTime, query.endDateTime)) {

    }
}

function isValidDateRange(start, end) {
    return end > start;
}