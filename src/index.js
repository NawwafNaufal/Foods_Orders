const express = require("express");
const bcrypt = require("bcrypt")
const {db} = require("/AMD/Food_Orders/database/conn")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
// const {jwtokenauth} = require ("/AMD/Food_Orders/views/process")
const {userRole} = require("/AMD/Food_Orders/views/customer-role")


dotenv.config()
const app = express();
app.use(express.json())
const PORT = process.env.PORT;
const JWT = process.env.JWT_KEY


const jwtokenauth = (req,res,next) => {
    const header = req.headers ['authorization']
    const token = header && header.split(" ")[1];

    if(!token){
        return res.status(500).json({
            data : token,
            message : "Token Di Butuhkan"
        })
    }

    jwt.verify(token,JWT,(err,result) => {
        if(err){
            return res.status(500).send("Token Tidak Valid")
        }
        req.result = result
        next()
    })
}


app.get("/test",jwtokenauth,userRole('R004'),(req,res) => {
    res.send("Hello World")
})

app.post("/Register",async (req,res) => {
    const {id,email,password,first_name,last_name} = req.body
    const query = "INSERT INTO customer (id,email,password,first_name,last_name) VALUES (?,?,?,?,?)"

    if(!id || !email || !password || !first_name || !last_name ){
        return res.send("Tidak Boleh Kosong")
    }

    const hash =await bcrypt.hash(password,10)
    const value = [id,email,hash,first_name,last_name]
    db.query(query,value,(err,result) => {
        if(err) throw err  
        return res.send("Data Telah di tambahkan silahkan login kembali")
    })
    })

app.post("/Login",async(req,res) => {
    const {email,password} = req.body
    const query = "SELECT * FROM customer WHERE email = ?"

    db.query(query,email,async(err,result) => {
        if(err){
            return res.status(500)
        }if(result.length === 0){
            return res.send("Email dan kata sandi salah")
        }
        const user = result[0]
        const payload = {
            id : user.id,
            email : user.email,
            first_name : user.first_name,
            last_name : user.last_name,
            id_role : user.id_role
        }
        console.log(user)
        const time = 60 * 60 * 1
        const token = jwt.sign(payload,JWT,{expiresIn : time})
        console.log("Iini adalah TOken" + token)
            let comp =await bcrypt.compare(password,user.password)
            if(comp){
                console.log("Login Berhasil")    
                return res.status(200).json({
                    token: token,
                });         
            }
            else{
                return res.status(401).send("Password Salah");
            }
        })
})

app.listen(PORT,() => {
    console.log("Listening in " + PORT)
})

