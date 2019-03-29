const express = require('express');
require('dotenv').config();
const massive = require('massive');
const app = express();
const controller = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env


app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));