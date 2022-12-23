const express = require('express')
const app = express()
const routes = require('./routers')
const mongo = require('./config/mongodb')
app.use(express.json())
app.use('/', routes)

mongo.connect()

console.log("App running on port 3000")

app.listen(3000);