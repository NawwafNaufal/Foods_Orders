const db = require("../config/conetion")

const countryPostDb = (id,country) => {
    const query = "INSERT INTO country (id,country_name) VALUES (?,?)"
    const value = [id,country]
        return db.execute(query,value)
}

const countryGetDb = () => {
    const query = "SELECT * FROM country"
        return db.execute(query)
}

const countryPutDb = (country_name,id) => {
    const queryDb = "UPDATE country SET country_name = ? WHERE id = ?"
        const value = [country_name,id]
            return db.execute(queryDb,value)
}





module.exports = {countryPostDb,countryGetDb,countryPutDb}