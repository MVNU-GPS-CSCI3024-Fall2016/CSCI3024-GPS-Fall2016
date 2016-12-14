/**
 Model for Bank table, allowing Sequelize to interact with Bank. Contains all necessary class and instance methods for the program to correctly interact with Bank.
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
    var Bank = sequelize.define("Bank", {
        bankID: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
        locationID: { type: DataTypes.INTEGER, allowNull: false }
    }, 
    {
        classMethods: {
            /*
            * Model Associations
            */
            associate: function(models) {
                /* Table: Location, Cardinality: 1:1 */
                Bank.belongsTo(models.Location, {foreignKey: 'locationID'});
                /* Table: AnswersHourly, Cardinality: 1:M */
                Bank.hasMany(models.AnswersHourly, {foreignKey: 'bankID'});
            }
        }
    });

    return Bank;
};
