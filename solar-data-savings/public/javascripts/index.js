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
try {
    module.exports = index;
} catch(ex) {};