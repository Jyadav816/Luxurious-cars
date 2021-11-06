const mongoose = require("mongoose")

function databaseConnection() {
    mongoose.connect('mongodb+srv://jay816:helloworld@cluster0.n2mtq.mongodb.net/Cars', {useUnifiedTopology: true, useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('MongoDB connection sucessful')
    } )

    connection.on('error', ()=>{
        console.log('MongoDB connection error')
    })
}

databaseConnection()

module.exports = mongoose