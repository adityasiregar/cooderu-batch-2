const express = require('express')
const app = express()
const routes = require('./routers')
const mongo = require('./config/mongodb')
app.use(express.json())
mongo.connect()

app.use('/', routes)

console.log("App running on port 3000")

app.listen(3000);