'use strict';

module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        locationID: { type: DataTypes.INTEGER, primaryKey: true },
        locationName: DataTypes.STRING,
        initializationDate: DataTypes.DATE,
        latitude: DataTypes.DECIMAL(8, 6),
        longitude: DataTypes.DECIMAL(9, 6)
    });

    return Location;
};
