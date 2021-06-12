const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userRegistration = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bookings: [{
        booking: {
            type: Array,
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// Creating Tokens
userRegistration.methods.genetateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        res.status(401).redirect('/LogInSignUp');
        console.log(error);
    }
}

// Creating Password Hash
userRegistration.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 14);
    }
    next();
})


const Register = new mongoose.model("Register", userRegistration);


module.exports = Register;