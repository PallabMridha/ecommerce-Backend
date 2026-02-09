const express = require('express')
const signupControler = require('../../controlers/signupControlers')
const {otpContrilers, resendOtpControlar} = require('../../controlers/otpContrilers')
const logingContrilers = require('../../controlers/logingContrilers')
const router = express.Router()

router.post("/signup", signupControler)
router.post("/otpverify", otpContrilers)
router.post("/resendotp", resendOtpControlar)
router.post("/loging", logingContrilers)

module.exports=router