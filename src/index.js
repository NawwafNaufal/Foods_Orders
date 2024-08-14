const express = require("express");
const bcrypt = require("bcrypt")
const {db} = require("/AMD/Food_Orders/database/conn")
const dotenv = require("dotenv")



dotenv.config()
const app = express();
app.use(express.json())
const PORT = process.env.PORT;

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.post("/Register",async (req,res) => {
    const {id,email,password,first_name,last_name} = req.body
    const query = "INSERT INTO customer (id,email,password,first_name,last_name) VALUES (?,?,?,?,?)"

    if(!id || !email || !password || !first_name || !last_name){
        return res.send("Tidak Boleh Kosong")
    }

    const hash =await bcrypt.hash(password,10)
    const value = [id,email,hash,first_name,last_name]

    db.query(query,value,(err,result) => {
        if(err) {
            return res.status(500)
        }
        res.send("Data Telah di tambahkan silahkan login kembali")
    })
})

app.post("/Login",async(req,res) => {
    const {email,password} = req.body
    const query = "SELECT * FROM customer WHERE email = ?"

    db.query(query,email,async(err,result) => {
        if(err){
            return res.status(500)
        }if(result.length === 0){
            res.send("Email dan kata sandi salah")
        }
        const user = result[0]
        console.log(user)
            let comp =await bcrypt.compare(password,user.password)
            console.log("Kata sandi Database =", user.password);
            console.log("Kata Sandi yang di masukkan user =", password);
            
            if(comp){
                res.send("Login Berhasil")
        }
        else{
            res.send("Password Salah")
        }
    })
})

app.listen(PORT,() => {
    console.log("Listening in " + PORT)
})

