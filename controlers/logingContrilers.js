const emailvalidation = require("../helpers/emailvalidation")
const userSchema = require("../model/userSchema")



async function logingContrilers(req, res) {
    const { email, password } = req.body

    if (!email) {
        return res.json({
            error: "Email Is Requird"
        })
    }
    if (!password) {
        return res.json({
            error: "password Is Requird"
        })
    }
    if (!emailvalidation(email)) {
        return res.json({
            error: "Email Format Not Correct"
        })
    }

    const duplicateUser = await userSchema.findOne({ email })
    if (!duplicateUser) {
        return res.json({
            error: "Email Not Found In Database"
        })
    }
}

module.exports = logingContrilers