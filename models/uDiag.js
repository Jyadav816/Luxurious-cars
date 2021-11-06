const mongoose = require("mongoose");

const uLayout = new mongoose.Schema({
     username : {type:String , required: true},
     password : {type:String , required: true}
})

const uDiag = mongoose.model('users' , uLayout)

module.exports = uDiag










/*const mongoose = require("mongoose")
const uLayout = new mongoose.Schema({
    username : {type : String, required : true},
    password : {type : String, required : true},
})

const uDiag = mongoose.model('users', uLayout)
module.exports = uDiag*/