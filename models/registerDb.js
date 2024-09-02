const db = require("../config/conetion");
const bcrypt = require("bcrypt")


const registerDB = async (id,username,email,password,first_name,last_name) => {
    const queryDB = " INSERT INTO customer (id,username,email,password,first_name,last_name) VALUES (?,?,?,?,?,?)"
        const hash  = await bcrypt.hash(password,10)
            const value = [id,username,email,hash,first_name,last_name]

    return db.execute(queryDB,value)
}


module.exports = {registerDB}