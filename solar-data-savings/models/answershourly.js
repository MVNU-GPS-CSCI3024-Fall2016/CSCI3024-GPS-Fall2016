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
            findAnswersHourlyByDate: function(models, locationID, startDate, endDate) {
                return this.findAll({
                    attributes: ['wattsPerHour', 'answerQuantity'],
                    where: {
                        answerDate: { $between: [startDate, endDate] }
                    },
                    include: [{
                        model: models.Bank,
                        attributes: ['bankID'],
                        where: {
                            locationID: locationID
                        },
                        include: [{
                            model: models.Location,
                            attributes: ['locationName', 'latitude', 'longitude'],
                            required: true
                        }]
                    }]
                });
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
