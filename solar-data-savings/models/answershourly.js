'use strict';

module.exports = function(sequelize, DataTypes) {
    var AnswersHourly = sequelize.define("AnswersHourly", {
        answershourlyID: { type: DataTypes.INTEGER, primaryKey: true },
        bankID: DataTypes.STRING,
        wattsperhour: DataTypes.INTEGER,
        answerdate: DataTypes.DATE,
        processdate: DataTypes.DATE
    });

    AnswersHourly.belongsTo(Bank, {foreignKey: 'bankID'})

    return AnswersHourly;
};
