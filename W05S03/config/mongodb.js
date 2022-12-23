const mongoose = require('mongoose')

async function connect() {
    await mongoose.connect('mongodb+srv://admin:U63ZcLzEaasn0tJO@cluster0.lt9no.mongodb.net/todoDB?retryWrites=true&w=majority')
    .then(()=> console.log("Database connected"))
    .catch((e) => console.error("Error connection to mongoDB", e))
}

module.exports = {connect}