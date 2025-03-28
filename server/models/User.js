const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        enum: ["Admin", "Student", "Instructor"],
        required: true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: true
    },
    courses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Course",
        default: []
    },
    image: {
        type: String,
        required: true
    },
    courseProgress: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "CourseProgress",
        default: []
    },
    approved: {
        type: Boolean,
        default: true
    },
    // Added fields for password reset functionality
    token: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
});

module.exports = mongoose.model("User", userSchema);