const country = require("../models/countryDb")

const coutryControl =async (req,res) => {
    const {id,country_name} = req.body
        const result =await country.countryPostDb(id,country_name)
            res.status(201).json({
                data : id,country_name,
                message : "Data berhasil di tambahakan"
            })
}

const countryPutControl = async (req,res) => {
    const {id} = req.params
    const {country_name} = req.body
    console.log([country_name,id])
        const result = await country.countryPutDb(country_name,id)
            res.status(201).json({
                message : "Data Country Berhasil di Update"
            })

}

const countryGet = async (req,res) => {
    const [result] = await country.countryGetDb()
        res.status(200).json({
            data : result,
            message : "Data Country"
        })
}

module.exports = {coutryControl,countryGet,countryPutControl}