'use strict';

module.exports = function(sequelize, DataTypes) {
    var Bank = sequelize.define("Bank", {
        bankID: { type: DataTypes.STRING, primaryKey: true },
        locationID: DataTypes.INTEGER
    });

    Bank.belongsTo(Location, {foreignKey: 'locationID'})

    return Bank;
};
