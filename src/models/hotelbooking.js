const mongoose = require("mongoose")

const coustomersBooking = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    datetime: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    bringingPet: {
        type: String
    },
    needToPickUp: {
        type: String
    },
    suggestion: {
        type: String
    }

})

const HotelBooking = new mongoose.model("HotelBooking", coustomersBooking);


module.exports = HotelBooking;