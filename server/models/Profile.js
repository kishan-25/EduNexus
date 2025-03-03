const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
        default: null
    },
    dateOfBirth: {
        type: String,
        default: null
    },
    about: {
        type: String,
        trim: true,
        default: null
    },
    contactNumber: {
        type: String,  // Changed from Number to String
        trim: true,
        default: null
    }
});

module.exports = mongoose.model("Profile", profileSchema);