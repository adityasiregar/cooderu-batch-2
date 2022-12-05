const express = require('express')
const app = express()
const routes = require('./routers')

app.use(express.json())
app.use('/', routes)

console.log("App running on port 3000")

app.listen(3000);