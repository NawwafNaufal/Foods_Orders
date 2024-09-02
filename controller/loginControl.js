const { loginDb } = require("../models/loginDb");
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const bcrypt = require("bcrypt");
const dotenv = require("dotenv")

const loginControl = async (req, res) => {
    const {username,email,password} = req.body
        const validation = username || email
            if(!validation || !password){
                return res.status(400).json({
                    message : "Kolom Tidak boleh kosong"
                })
            }
            const [result] = await loginDb(validation)
                if(result.length > 0){
                    const user = result[0]
                    console.log(user)
                    if(!user.password){
                        return res.status(401).send("Kata sandi tidak valid")
                    }

                    const jwtTime = 60 * 60 * 1

                    const payload = {
                        username : user.username,
                        email : user.email,
                        firstName : user.first_name,
                        lastName : user.last_name,
                        role : user.id_role
                    }
                    const match = await bcrypt.compare(password,user.password)
                    const token = await jwt.sign(payload,process.env.JWT_KEY,{expiresIn : jwtTime})
                    res.cookie('authToken',token,{
                        httpOnly : true,
                        secure : process.env.NODE_ENV,
                        maxAge : 360000
                    })
                    if(match){
                        return res.status(200).json({
                            token : token,
                            message : "Login Berhasil"
                        })
                    }else{
                        return res.send("Kata Sandi Salah")
                    }
                }else{
                    return res.send("Email atau username salah")
                }
}

module.exports = loginControl;
