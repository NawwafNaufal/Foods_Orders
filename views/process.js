// const jwt = require("jsonwebtoken")

// const JWT = process.env.JWT_KEY
// const jwtokenauth = (req,res,next) => {
//     const header = req.headers ['authorization']
//     const token = header && header.split(" ")[1];

//     if(!token){
//         return res.status(500).json({
//             data : token,
//             message : "Token Di Butuhkan"
//         })
//     }

//     jwt.verify(token,JWT,(err,result) => {
//         if(err){
//             return res.status(500).send("Token Tidak Valid")
//         }
//         req.result = result
//         next()
//     })
// }

// module.exports = {jwtokenauth}