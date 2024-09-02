const regisModels = require("../models/registerDb")


const regisControl =async (req,res) => {
    try {
        const {id,username,email,password,first_name,last_name} = req.body
        if(!id || !username || !email || !password || !first_name || !last_name ){
            return  res.status(400).send("Tidak Boleh Kosong")
        }
        const [result] = await regisModels.registerDB(id,username,email,password,first_name,last_name)
            res.status(201).json({
                data : result,
                message : "Data Berhasil Di Tambahkan"
            })   
    } catch (error) {
        res.status(500).json({
            message : `Terjadi Kesalahan ${error.message}`
        })
    }
}

module.exports = {regisControl}
