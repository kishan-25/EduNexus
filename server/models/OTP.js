const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");


const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }
});

// a function -> to send emails
async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", otp);
        console.log("Email sent Successfully");
    }
    catch(error){
        console.log("error occured while sending mails: ",error);
        throw error;
    }
}

OTPSchema.pre("save", async function(next) {
    await sendVerificationEmail(this.email,this.otp);
    next(); // next method kya krta h : ye vale task krne ka bad aap next middleware ko chalu kr dena
})

module.exports = mongoose.model("OTP",OTPSchema);