const express = require('express');
require('dotenv').config();
const massive = require('massive');
const app = express();
const controller = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB set!')
})

app.get('/api/inventory', controller.getAllProducts)
app.post('/api/product', controller.addProduct)

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`));