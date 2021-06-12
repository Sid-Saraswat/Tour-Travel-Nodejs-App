const mongoose = require("mongoose")


const useSubscribe = new mongoose.Schema({
    email: {
        type: String,
    }
})

const Subscribe = new mongoose.model("Subscribe", useSubscribe);


module.exports = Subscribe;