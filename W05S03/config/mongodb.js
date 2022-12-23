const mongoose = require('mongoose')

async function connect() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.lt9no.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> console.log("Database connected"))
    .catch((e) => console.error("Error connection to mongoDB", e))
}

module.exports = {connect}