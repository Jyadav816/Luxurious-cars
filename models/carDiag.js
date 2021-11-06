const mongoose = require("mongoose")
const carLayout = new mongoose.Schema({
    image : {type : String, required : true},
    carName : {type : String, required : true},
    carBrand : {type : String, required : true},
    pricePerDay : {type : Number, required : true}
})
const car = mongoose.model('cars', carLayout)

module.exports = car