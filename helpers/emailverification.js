const nodemailer = require("nodemailer");

async function emailverification(email, otp) {
    const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "pallabmridha409@gmail.com",
    pass: "mobrqukiklixcbnp",
  },
});
const info = await transporter.sendMail({
    from: '"pollob" <pallabmridha409@gmail.com>',
    to: email,
    subject: "OTP",
    text: "OTP Verification", 
    html: `<h1>Your OTP Is: ${otp}<h1/>`, 
  });

  console.log("Message sent:", info.messageId);
}

module.exports = emailverification