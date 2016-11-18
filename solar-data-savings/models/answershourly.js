'use strict';

module.exports = function(sequelize, DataTypes) {
    var AnswersHourly = sequelize.define("AnswersHourly", {
        answershourlyID: { type: DataTypes.INTEGER, primaryKey: true },
        bankID: { type: DataTypes.STRING, foreignKey: 'bank.js' },
        wattsperhour: DataTypes.INTEGER,
        answerdate: DataTypes.DATE,
        processdate: DataTypes.DATE
    });

    return AnswersHourly;
};
