'use strict';

module.exports = function(sequelize, DataTypes) {
    var Bank = sequelize.define("Bank", {
        bankID: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
        locationID: { type: DataTypes.INTEGER, allowNull: false }
    }, 
    {
        classMethods: {
            associate: function(models) {
                Bank.belongsTo(models.Location, {foreignKey: 'locationID'});
                Bank.hasMany(models.AnswersHourly);
            }
        }
    });

    return Bank;
};
