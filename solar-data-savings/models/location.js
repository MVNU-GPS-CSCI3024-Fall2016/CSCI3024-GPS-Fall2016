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
        instanceMethods: {
            getLocationID: function() {
                return this.dataValues.locationID;
            },
            getLocationName: function() {
                return this.dataValues.locationName;
            }
        },
        classMethods: {
            associate: function(models) {
                Location.hasMany(models.Bank);
            }
        }
    });

    return Location;
};
