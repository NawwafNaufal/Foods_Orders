const db = require("../config/conetion")

const menuPostDb = (id,restaurant_id,item_name,price) => {
    const query = "INSERT INTO menu_item (id,restaurant_id,item_name,price) VALUES (?,?,?,?)"
        const value = [id,restaurant_id,item_name,price]
            return db.execute(query,value)
}

module.exports = {menuPostDb}