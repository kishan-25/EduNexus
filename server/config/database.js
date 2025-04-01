const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected Successfully");
    })
    .catch((err)=>{
        console.log("Connection failed");
        console.log(err);
        process.exit(1);
    })
}