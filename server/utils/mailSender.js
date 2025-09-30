import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Divyansh Gupta - Test Mail" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
    return null; // return null or throw error so caller can handle it
  }
};

export default mailSender;
