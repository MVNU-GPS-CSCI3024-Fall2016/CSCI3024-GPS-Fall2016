'use strict';

module.exports = function(sequelize, DataTypes) {
    var AnswersHourly = sequelize.define("AnswersHourly", {
        answersHourlyID: { type: DataTypes.INTEGER, primaryKey: true },
        bankID: DataTypes.STRING,
        wattsPerHour: DataTypes.INTEGER,
        answerQuantity: DataTypes.INTEGER,
        answerDate: DataTypes.DATE,
        processDate: DataTypes.DATE
    });

    return AnswersHourly;
};
