const express = require('express');
const path = require('path');
const sequelize = require('./db');
const router = require('./routes')
const cors = require("cors");
const errorHandler = require('./error/ErrorHandler')
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/', router)

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, function() {
            console.log('Express server listening on port ' + port)
            console.log('http://localhost:' + port)
        });
    } catch (e) {
        console.log(e)
    }
}

start()