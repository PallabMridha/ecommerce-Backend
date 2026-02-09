const express = require('express')
const userSchema = require('../model/userSchema');
const emailvalidation = require('../helpers/emailvalidation');
const bcrypt = require('bcrypt');
const router = express.Router()
const crypto = require('crypto');
const emailverification = require('../helpers/emailverification');


async function signupControler(req, res) {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName) {
        return res.json({
            message: "Error:Fist Last Name requiered"
        })
    }
    if (!email) {
        return res.json({
            message: "Error: Email requiered"
        })
    }
    if (!password) {
        return res.json({
            message: "Error: Password requiered"
        })
    }
    if (!emailvalidation(email)) {
        return res.json({
            message: "Error: Email Format Not Correct"
        })
    }

    const duplicateEmail = await userSchema.findOne({ email })
    console.log(duplicateEmail);

    if (duplicateEmail) {
        return res.json({
            message:"Duplicat Email"
        })
    }

    const otp = crypto.randomInt(100000, 999999).toString()   
    const expireOtp = new Date(Date.now() + 10 * 60 * 1000)
    console.log(expireOtp);
    

    bcrypt.hash(password, 10, function (err, hash) {
         const users = userSchema({
        firstName,
        lastName,
        email,
        password: hash,
        otp,
        expireOtp,


    })
    emailverification(email, otp)
    users.save()
    res.json({
        messege:"data send"
    })
    });


   
}

module.exports = signupControler





