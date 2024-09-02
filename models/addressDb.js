const db = require("../config/conetion")

const postAddresDb =async (
    id,
    unit_number,
    street_number,
    address_line1,
    city,
    postal_code,
    country_id
) => {
    const query = "INSERT INTO address (id,unit_number,street_number,address_line1,city,postal_code,country_id) VALUES (?,?,?,?,?,?,?)"
    const value = [id,unit_number,street_number,address_line1,city,postal_code,country_id]
    return db.execute(query,value)
}

const addressGetDb = () => {
    const query ="SELECT * FROM address JOIN country ON (address.country_id = country.id)"
        return db.execute(query)
}

const addresPutDb = (
    unit_number,
    street_number,
    address_line1,
    city,
    postal_code,
    country_id,id) => {
        const query  = "UPDATE address SET unit_number = ?,street_number = ?,address_line1 = ? ,city =?,postal_code = ?,country_id = ? WHERE id = ?"
        const value = [ unit_number,street_number,address_line1,city,postal_code,country_id,id]
            return db.execute(query,value)
}

const addersDeleteDb = (id) => {
    const query = "DELETE FROM address WHERE id = ?"
        return db.execute(query,[id])
}


module.exports = {postAddresDb,addressGetDb,addresPutDb,addersDeleteDb}