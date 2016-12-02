function displayTimepickers(isDateTime) {
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

function updateInitDateMessage() {
    var thisOption = $('#locations option:selected').attr('data-init-date');
    $('#init-date-message').text('*Earliest date of data collection for location: ' + thisOption);
}