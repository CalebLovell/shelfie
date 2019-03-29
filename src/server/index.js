const express = require('express');
const app = express();
const controller = require('./controller')
const SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));