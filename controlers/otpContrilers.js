const userSchema = require("../model/userSchema")
const crypto = require('crypto');


async function otpContrilers (req, res) {
    const {email, otp} = req.body
    const user = await userSchema.findOne({email})

    if (!user) {
        return res.status(400).json({
            message:"User Not Found"
        })
    }
    if (user.isverifide) {
       return res.json({
            message:"User Is Verifide"
        }) 
    }
    if (user.otp !== otp || user.expireOtp < Date.now()) {
         return res.status(400).json({
            message:"Invalide otp"
        }) 
    }
    user.isverifide = true
    user.otp = undefined
    user.expireOtp = undefined
    await user.save()
    res.status(200).json({
            message:"Email Verification Done"
        }) 
}

async function resendOtpControlar(req, res) {
     const {email} = req.body
     const resendOtpuser = await userSchema.findOne({email})
     if (!resendOtpuser) {
        return res.json ({message:"Email Not Found"})
     }
   
    const otp = crypto.randomInt(100000, 999999).toString()   
    const expireOtp = new Date(Date.now() + 10 * 60 * 1000)
    resendOtpuser.otp= otp,
    resendOtpuser.expireOtp= expireOtp,
    await resendOtpuser.save()
    res.status(200).json({
            message:"Resend Otp Send Successfully"
        }) 
}

module.exports= { otpContrilers,  resendOtpControlar }