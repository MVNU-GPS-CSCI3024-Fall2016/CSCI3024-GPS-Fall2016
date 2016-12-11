var assert = require('assert');
var savings = require('../../public/javascripts/savings.js');

describe('Savings Validations', function() {
    describe('Start Date before Init Date', function() {
        it('Should be valid if start date on init date', function() {
            var initDate = new Date(),
                startDate = new Date();
            assert.equal(savings.isInitDate(initDate, startDate), true);
        });
        it('Should be invalid if start date before init date', function() {
            var initDate = new Date(),
                startDate = new Date();
            startDate.setDate(initDate.getDate()-1);
        });
    });

    describe('End date before start date', function() {
        it('Should be valid if end date on start date', function() {
            var startDate = new Date(),
                endDate = new Date();
            assert.equal(savings.isValidDateRange1(startDate, endDate), true);
        });
        it('Should be invalid if end date before start date', function() {
            var startDate = new Date(),
                endDate = new Date();
            endDate.setDate(startDate.getDate()-1);
        });
    });

    describe('End date after current date', function() {
        it('Should be valid if end date before current date', function() {
            
        })
    })
});