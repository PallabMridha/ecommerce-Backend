const express = require('express')
const signupControler = require('../../controlers/signupControlers')
const router = express.Router()

router.post("/signup", signupControler)

module.exports=router