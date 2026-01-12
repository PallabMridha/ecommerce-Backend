const express = require('express')
const dbcanation = require('./Database/dbCanation')
const route = require('./route')
const app = express()
const port = 3000
require('dotenv').config()

route.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})
dbcanation()

app.use(route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

