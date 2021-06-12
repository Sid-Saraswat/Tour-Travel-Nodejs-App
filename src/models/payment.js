const mongoose = require("mongoose")

const coustomersBooking = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true,
    },
    expire: {
        type: String,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    }
    
})

const PaymentBooking = new mongoose.model("PaymentBooking", coustomersBooking);


module.exports = PaymentBooking;