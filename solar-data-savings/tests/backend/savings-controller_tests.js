'use strict';

var assert = require('chai')('assert');
var models = require('../../models');

describe('Savings Controller', function() {
    describe('getSavings', function() {
        it('returns the model', function() {
            var savingsMock = {
                bank:models.bank
            };
            savingsMock.bank.find = function(search, callback) {
                callback(null, {
                    bankID: '',
                    locationID: ''
                });
            };
            var savingsController = require('../../controllers/savings-controller.js')(savingsMock);

            var req =  {
                query: {
                    locationID: ''
                }
            };

            var res = {
                send: function(data) {
                    assert.equal('', data.body);
                    done();
                }
            }

            savingsController.getSavings(req, res);
        });
    });
});