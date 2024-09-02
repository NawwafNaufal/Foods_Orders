const express = require("express");
const dotenv = require("dotenv").config()
const db = require("../config/conetion");
const {validationLogin} = require("../middleware/validateJwt")
const {authorize} = require("../middleware/validateRole")
const cookieParser =require("cookie-parser")

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser())

app.use("/Register",require("../routes/registerRoute"))
app.use("/Login",require("../routes/loginRoute"))

app.get("/customer", validationLogin, authorize(["R001"]),(req, res) => {
    res.send("Hello World");
});

app.use("/Country",require("../routes/country"))
app.use("/Addres",require("../routes/addres"))
app.use("/Menu",require("../routes/menuItemRoute"))


app.listen(PORT,() => {
    console.log("Connect In Port" + PORT)
})
