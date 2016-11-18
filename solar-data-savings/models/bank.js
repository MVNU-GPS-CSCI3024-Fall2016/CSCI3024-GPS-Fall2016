'use strict';

module.exports = function(sequelize, DataTypes) {
    var Bank = sequelize.define("Bank", {
        BankID: { type: DataTypes.STRING, primaryKey: true },
        locationID: DataTypes.INTEGER, foreignKey: 'location.js'
    });

    return Bank;
};
