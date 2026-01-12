const express = require('express')
const router = express.Router()

const apirouter = require("./api")
router.use("/api/v1", apirouter)

module.exports=router