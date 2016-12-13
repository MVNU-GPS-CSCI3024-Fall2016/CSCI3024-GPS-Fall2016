/**
Javascripts relating to the initial UI.
 */

'use strict';

var Index = function() {};

Index.prototype.displayTimepickers = function(isDateTime) {
    if (isDateTime) {
        $('.time-container').each(function() {
            $(this).show();
        });
        $('.timepicker').removeAttr('disabled');
    } else {
        $('.time-container').each(function() {
            $(this).hide();
        });
        $('.timepicker').attr('disabled', 'disabled');
    }
}

Index.prototype.updateInitDateMessage = function() {
    var thisOption = $('#locations option:selected').attr('data-init-date');
    $('#init-date-message').text('*Earliest date of data collection for location: ' + thisOption);
}

Index.prototype.closeError = function() {
    $('#error-container').hide();
}

var index = new Index();

$(document).ready(function() {
    if(sessionStorage.length > 0) {
        $('#locations').val(parseInt(sessionStorage.locations)).change();
        $('#startDate').val(sessionStorage.startDate);
        $('#endDate').val(sessionStorage.endDate);
        if(sessionStorage.dateTime === 'datetime') {
            $('#dateTime').attr('checked', true);
            index.displayTimepickers(true);
            $('#startTime').val(sessionStorage.startTime);
            $('#startTimeMeridian').val(sessionStorage.startTimeMeridian);
            $('#endTime').val(sessionStorage.endTime);
            $('#endTimeMeridian').val(sessionStorage.endTimeMeridian);
        } else {
            $('#date').attr('checked', true);
        }
        $('#kwhCost').val(sessionStorage.kwhCost);
    }
});

try {
    module.exports = index;
} catch(ex) {};