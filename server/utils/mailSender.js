const nodemailer = require("nodemailer");

// email , title and body de doge to otp send ho jayga us particular mail id ko 
const mailSender = async (email, title, body) => {
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from: "StudyNotion || CideHelp - by Babbar",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = mailSender;