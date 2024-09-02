const db = require("../config/conetion")

const roleDb = (req,res) => {
    return (req,res,next) => {
        const {result} = req
            if(result.id_role !== role){
                res.status(301).json({
                    message : "Forbidden"
                })
            }
    }
}