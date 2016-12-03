var assert = require('assert');
var savings = require('../../public/javascripts/savings.js');

describe('Savings Validations', function() {
    describe('Start Date against Init Date', function() {
        it('Should be valid if on init date', function() {
            var initDate = new Date(),
                startDate = new Date();
            assert.equal(savings.isInitDate(initDate, startDate), true);
        });
        // it('Should be invalid if before init date', function() {
        //     var initDate = new Date(),
        //         startDate = new Date();
        //     startDate.setDate(initDate.getDate()-1);
        // });
    });
});