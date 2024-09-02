const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config()

const authorize = (requiredRoles) => {
    return (req,res,next) => {
        const token = req.cookies.authToken;
        console.log(token)
        if(!token) {
            res.status(403).json({
                message : "Token tidak di temukan,akses di tolak"
            })
        } 
        jwt.verify(token,process.env.JWT_KEY,(err,decode) => {
            const {role} = decode
        if(!requiredRoles.includes(role)){
            res.status(301).send("Anda tidak di perbolehkan mengakses content ini")
        }
        req.user = decode
        next()
    })
}
}

module.exports = { authorize };



