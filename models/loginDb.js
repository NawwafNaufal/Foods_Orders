const db = require("../config/conetion")

const loginDb =  (identifier) => {
    const query  = "SELECT * FROM customer WHERE username = ? OR email = ?"
        const value = [identifier,identifier]
        return db.execute(query,value)
}

module.exports = {loginDb}