const express = require('express')
const userSchema = require('../model/userSchema');
const emailvalidation = require('../helpers/emailvalidation');

const router = express.Router()


function signupControler(req, res) {
    const {firstName, lastName, email, password} = req.body;

    if (!firstName || !lastName) {
        return res.jeon({
            message: "Error:Fist Last Name requiered"
        })
    }
    if (!email) {
        return res.jeon({
            message: "Error: Email requiered"
        })
    }
    if (!password) {
        return res.jeon({
            message: "Error: Password requiered"
        })
    }
    if (!emailvalidation) {
        return res.jeon({
            message: "Error: Email Format Not Correct"
        })
    }



    const users = userSchema({
        firstName,
        lastName,
        email,
        password,
        
       
    })
    users.save()
    res.json({
        data: users
    })
}

module.exports=signupControler





