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
            findAnswersHourlySumByBankID: function(models, params) {
                return this.findAll({
                    attributes: [
                        [sequelize.fn('SUM', sequelize.col('wattsPerHour')), 'wphSum'],
                        [sequelize.fn('SUM', sequelize.col('answerQuantity')), 'aqSum'],
                        [sequelize.fn('COUNT', sequelize.col('answerQuantity')), 'aqCount']
                    ],
                    where: {
                        answerDate: { $between: [params.startDate, params.endDate] }
                    },
                    group: ['Bank.bankID'],
                    include: [{
                        model: models.Bank,
                        attributes: ['bankID'],
                        where: {
                            locationID: params.locationID
                        },
                        include: [{
                            model: models.Location,
                            attributes: ['locationName'],
                            required: true
                        }]
                    }]
                });
            },

            validateParams: function(params) {
                var errArray = [];

                if(!this.isValidStartDate(params.initDate, params.startDate)) {
                    errArray.push('Start date must be on or after the earliest date of data collection indicated for the location');
                }
                if(!this.isValidDateRange(params.startDate, params.endDate)) {
                    errArray.push('Start date must preceed end date');
                }
                if(!this.isValidEndDate(params.endDate)) {
                    errArray.push('End date cannot be later than midnight of current date');
                }
                if(!this.isValidKwhCost(query.kwhCost)) {
                    errArray.push('Please enter a positive decimal value for the kWh Cost');
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
            },

            isValidKwhCost: function(kwhCost) {
                return kwhCost > 0 && isNaN(kwhCost) == false;
            },

            getTotalSavings: function(kwhCost, answersHourlySums) {
                var savings = 0;
                answersHourlySums.forEach(function(data) {
                    savings += (data.dataValues.wphSum / 1000) * kwhCost;
                });
                return savings.toFixed(2);
            },

            getAnswerPercentage: function(answersHourlySums) {
                var answerPercentage = 0;
                answersHourlySums.forEach(function(data) {
                    answerPercentage += (data.dataValues.aqSum / data.dataValues.aqCount) / 60;
                });
                answerPercentage = Math.round((answerPercentage / answersHourlySums.length) * 100);
                return answerPercentage;
            }
        },

        instanceMethods: {
            getBankSavings: function(kwhCost) {
                return ((this.dataValues.wphSum / 1000) * kwhCost).toFixed(2);
            },

            getBankID: function() {
                var bank = this.dataValues.Bank;
                return bank.dataValues.bankID;
            }
        }
    });

    return AnswersHourly;
};
