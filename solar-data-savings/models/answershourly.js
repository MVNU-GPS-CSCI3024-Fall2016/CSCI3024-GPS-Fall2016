'use strict';

module.exports = function(sequelize, DataTypes) {
    var AnswersHourly = sequelize.define("AnswersHourly", {
        answersHourlyID: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        bankID: { type: DataTypes.STRING, allowNull: false },
        wattsPerHour: { type: DataTypes.INTEGER, allowNull: false },
        answerQuantity: { type: DataTypes.INTEGER, allowNull: false },
        answerDate: DataTypes.DATE,
        processDate: DataTypes.DATE
    },
    {
        classMethods: {
            /*
            * Model Associations
            */
            associate: function(models) {
                /* Table: BANK, Cardinality: 1:1 */
                AnswersHourly.belongsTo(models.Bank, {foreignKey: 'bankID'});
            },
            /*
            * Query: Find Answers Hourly By Date
            * Fields: AnswersHourly.WattsPerHour, AnswersHourly.AnswerQuantity,
            *         Bank.BankID,
            *         Location.LocationName, Location.Latitude, Location.Longitude
            * Conditions: AnswersHourly.AnswerDate BETWEEN (startDate, endDate),
            *             Bank.LocationID = locationID
            */
            findAnswersHourlyByDate: function(models, params) {
                return this.findAll({
                    attributes: ['wattsPerHour', 'answerQuantity'],
                    where: {
                        answerDate: { $between: [params.startDate, params.endDate] }
                    },
                    include: [{
                        model: models.Bank,
                        attributes: ['bankID'],
                        where: {
                            locationID: params.locationID
                        },
                        include: [{
                            model: models.Location,
                            attributes: ['locationName', 'latitude', 'longitude'],
                            required: true
                        }]
                    }]
                });
            },

            validateParams: function(params) {
                var errArray = [];

                if(!this.isValidStartDate(initDate, params.startDate)) {
                    errArray.push('Start date must be on or after the earliest date of data collection indicated for the location');
                }
                if(!this.isValidDateRange(params.startDate, params.endDate)) {
                    errArray.push('Start date must preceed end date');
                }
                if(!this.isValidEndDate(params.endDate)) {
                    errArray.push('End date cannot be later than midnight of current date');
                }

                if(errArray.length > 0) {
                    throw errArray.join('\n');
                }
            },

            isValidStartDate: function(initDate, date) {
                return date >= initDate;
            },

            isValidDateRange: function(startDate, endDate) {
                return endDate > startDate;
            },

            isValidEndDate: function(endDate) {
                var date = new Date();
                date.setHours(0);
                return endDate <= date;
            }
        },

        instanceMethods: {
            getAnswerHourly: function() {
                var bank = this.dataValues.Bank.dataValues;
                var location = bank.Location.dataValues;
                var answerHourly = {
                    answerQuantity: this.dataValues.answerQuantity,
                    wattsPerHour: this.dataValues.wattsPerHour,
                    Bank: {
                        bankID: bank.bankID
                    },
                    Location: {
                        locationName: location.locationName,
                        latitude: location.latitude,
                        longitude: location.longitude
                    }
                };
                return answerHourly;
            },

            getAnswerQuantity: function() {
                var answerQuantity = this.dataValues.answerQuantity;
                return answerQuantity;
            }
        }
    });

    return AnswersHourly;
};
