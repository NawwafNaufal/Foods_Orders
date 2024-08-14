const connection = require("mysql");

const db = connection.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"food_orders"
})

db.connect((err,result) => {
    if(err) throw err
    console.log("Connected")
})

module.exports = {db}