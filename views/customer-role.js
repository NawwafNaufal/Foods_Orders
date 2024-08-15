const userRole = (role) => {
    return (req,res,next) => {
            const {result} = req
        if(!result.id_role !== id.role){
            res.status(301).send("Acces Forbident")
        }
        next()
    }
}

module.exports = {userRole}