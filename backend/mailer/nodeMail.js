const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOption = {
        from: process.env.EMAIL_USER,
        to,
        subject, 
        text
    };

    try {
        await transporter.sendMail(mailOption);
        console.log("Mail sent to", to);
    } catch (error) {
        console.error("Error sending mail:", error);
        throw error;
    }
};

module.exports = sendMail;