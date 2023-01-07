const express = require('express');
const app = express();
const route = require('./Routes/Route')
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/',route)

module.exports = app