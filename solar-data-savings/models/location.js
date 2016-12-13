/**
 Model for Location table, allowing Sequelize to interact with Location. Contains all necessary class and instance methods for the program to correctly interact with Location.
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        locationID: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        locationName: { type: DataTypes.STRING, allowNull: false },
        initializationDate: DataTypes.DATE,
        latitude: DataTypes.DECIMAL(8, 6),
        longitude: DataTypes.DECIMAL(9, 6)
    }, 
    {
        classMethods: {
            /*
            * Model Associations
            */
            associate: function(models) {
                /* Table: BANK, Cardinality: 1:M */
                Location.hasMany(models.Bank, {foreignKey: 'locationID'});
            },
            /*
            * Query: Find All Locations
            * Fields: LocationID, LocationName, InitializationDate
            */
            findAllLocations: function() {
                return this.findAll({
                    attributes: ['locationID', 'locationName', 'initializationDate']
                });
            },
            /*
            * Query: Find initialization date by location ID
            * Fields: InitializationDate
            */
            findInitDateByID: function(locationID) {
                return this.findAll({
                    attributes: ['initializationDate'],
                    where: {
                        locationID: locationID
                    }
                });
            }
        },

        instanceMethods: {
            getLocationID: function() {
                return this.dataValues.locationID;
            },
            getLocationName: function() {
                return this.dataValues.locationName;
            },
            getInitDateString: function() {
                var initDate = new Date(this.dataValues.initializationDate);
                var initDateString = initDate.getDay() + '/' + (initDate.getMonth()+1) + '/' + initDate.getFullYear();
                return initDateString;
            }
        }
    });

    return Location;
};
