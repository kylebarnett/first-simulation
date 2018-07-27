const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const invCtrl = require('./controller')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(err => {
  console.log('there is an error', err)
})

app.get('/api/inventory', invCtrl.getInventory)
app.post('/api/product', invCtrl.addProduct)

const port = 7007
app.listen(port, () => {
  console.log('Yer doing great, Harry', port)
})