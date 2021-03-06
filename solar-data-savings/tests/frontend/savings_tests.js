/**
Unit tests for validation logic on the initial input values
 */

'use strict';

var assert = require('assert');
var savings = require('../../public/javascripts/savings.js');

describe('Savings Validations', function() {
    describe('Start Date after Init Date', function() {
        it('Should be valid if start date on init date', function() {
            var initDate = new Date(),
                startDate = new Date();
            assert.equal(savings.isValidStartDate(initDate, startDate), true);
        });
        it('Should be invalid if start date before init date', function() {
            var initDate = new Date(),
                startDate = new Date();
            startDate.setDate(initDate.getDate()-1);
            assert.equal(savings.isValidStartDate(initDate, startDate), false);
        });
    });

    describe('End date after start date', function() {
        it('Should be valid if end date after start date', function() {
            var startDate = new Date(),
                endDate = new Date();
            endDate.setDate(startDate.getDate()+1);
            assert.equal(savings.isValidDateRange(startDate, endDate), true);
        });
        it('Should be invalid if end date on start date', function() {
            var startDate = new Date(),
                endDate = new Date();
            assert.equal(savings.isValidDateRange(startDate, endDate), false);
        });
    });

    describe('End date before current date', function() {
        it('Should be valid if end date equals current date', function() {
            var endDate = new Date();
            endDate.setHours(0);
            assert.equal(savings.isValidEndDate(endDate), true);
        });
        it('Should be invalid if end date is greater than current date', function() {
            var endDate = new Date();
            endDate.setDate(endDate.getDate()+10);
            assert.equal(savings.isValidEndDate(endDate), false);
        });
    });

    describe('kwhCost is a valid number', function() {
        it('Should be valid if kwhCost is a valid number', function() {
            var kwhCost = 1;
            assert.equal(savings.isValidKwhCost(kwhCost), true);
        });
        it('Should be invalid if kwhCost is equal to or less than 0', function () {
            var kwhCost = 0;
            assert.equal(savings.isValidKwhCost(kwhCost), false);
        });
        it('Should be invalid if kwhCost is not a number', function () {
            var kwhCost = 'monkeys';
            assert.equal(savings.isValidKwhCost(kwhCost), false);
        });
    });
});