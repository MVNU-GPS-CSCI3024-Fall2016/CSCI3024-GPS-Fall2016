'use strict';

module.exports = function(sequelize, DataTypes) {
    var Bank = sequelize.define("Bank", {
        bankID: { type: DataTypes.STRING, primaryKey: true },
        locationID: { type: DataTypes.INTEGER, foreignKey: 'location.js' }
    });

    return Bank;
};
