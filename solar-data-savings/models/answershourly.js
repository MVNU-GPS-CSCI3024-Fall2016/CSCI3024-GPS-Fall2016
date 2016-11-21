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
            associate: function(models) {
                AnswersHourly.belongsTo(models.Bank, {foreignKey: 'bankID'});
            }
        }
    });

    return AnswersHourly;
};
