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