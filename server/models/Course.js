const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
        trim:true
    },
    courseDescription:{
        type:String,
        required:true
    },
    Instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    WhatYouWillLearn:{
       type:String,
    },
    courseContent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    },
    ratingAndReviews: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    },
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
    tag: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    },
    studentsEnrolled: [{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }]
})

exports.module = mongoose.model("Courses",courseSchema);