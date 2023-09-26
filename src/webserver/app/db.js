require("dotenv").config();
const env = "development";
const config = require("./config/config.js")[env];
const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    host: config.host,
    dialect: config.dialect,
    pool: {
      max: 10,
      min: 0,
      acquire: 3000,
      idle: 10000,
    },
  },
);
