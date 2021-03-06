/**
Sequelize setup - creates the Sequelize object to allow interaction with the database.
 */

'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(path.join(__dirname, '../build.config.js'))[env];
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  // Construct sequelize object for database connection
  var sequelize = new Sequelize(config.database, config.username, config.password, {
      port: config.port,
      host: config.host,
      // COMMENT THE LOGGING IN PRODUCTION
      // logging: console.log,
      define: {
        freezeTableName: true,
        timestamps: false
    }
  });
}
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;