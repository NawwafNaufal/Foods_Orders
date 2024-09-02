const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

const validationLogin = (req,res,next) => {
    const header = req.headers ["authorization"]
        const tokenFromHeader = header && header.split(" ")[1]
        const tokenFromCookie = req.cookies.authToken
        
        const get = tokenFromHeader || tokenFromCookie

        jwt.sign(get,process.env.JWT_KEY,(err,result) => {
                req.result = result
                    next()
        })
}

module.exports = {validationLogin}