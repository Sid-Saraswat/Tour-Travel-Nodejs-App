const mongoose = require("mongoose")


const promocodeRegistration = new mongoose.Schema({
    promocode:{
        type:String,
        unique:true,
        required:true
    },
    codevalue:{
        type:Number,
        required:true
    }
})

const PromoCode = new mongoose.model("PromoCode", promocodeRegistration);


module.exports = PromoCode;