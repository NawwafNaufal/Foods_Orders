const addressDb = require("../models/addressDb")

const postAddress = async (req,res) => {
        const {id,
        unit_number,
        street_number,
        address_line1,
        city,
        postal_code,    
        country_id} = req.body

            const [result] = await addressDb.postAddresDb(id,unit_number,street_number,address_line1,city,postal_code,country_id)
            res.status(201).json({
                data : result,
                message : "Data Addres berhasil di tambahkan"
            })
}

const getAddress = async (req,res) => {
    const [result] = await addressDb.addressGetDb()
        res.send(result)
}

const putAddress = async (req,res) => {
    const {id} = req.params
    const { unit_number,
        street_number,
        address_line1,
        city,
        postal_code,
        country_id,
        } = req.body
            const result = await addressDb.addresPutDb( unit_number,street_number,address_line1,city,postal_code,country_id,id)
                res.status(200).json({
                data :unit_number,
                street_number,
                address_line1,
                city,
                postal_code,
                country_id,
                message : "Update Berhasil"
            })
        
}

const deleteAdsress =async (req,res) => {
    const {id} = req.params
    const result = await addressDb.addersDeleteDb(id)
        res.status(200).json({
            message : `Data NO ${id} Berhasil Di Hapus`         
        })
}



module.exports = {postAddress,getAddress,putAddress,deleteAdsress}