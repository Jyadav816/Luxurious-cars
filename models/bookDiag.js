const mongoose = require("mongoose")
const bookLayout = new mongoose.Schema({
    car : {type : mongoose.Schema.Types.ObjectID, ref:'cars'},
    user : {type : mongoose.Schema.Types.ObjectID, ref:'users'},
    reserveSlot : {
        from : {type : String} ,
        to : {type : String}
    },
    priceperday : {type : Number},
    totalAmount : {type : Number},
    transId : {type : String}

},
    {timestamps:true}
)

const bookModel = mongoose.model('bookings', bookLayout)

module.exports = bookModel