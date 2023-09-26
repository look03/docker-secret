const sequelize = require('../db')
const {DataTypes} = require("sequelize");

const Text = sequelize.define('texts', {
    id: {type: DataTypes.STRING, primaryKey: true},
    text: {type: DataTypes.STRING}
})

module.exports = Text