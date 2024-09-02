const express = require("express")
const routes = express.Router()
const {postAddress,getAddress,putAddress,deleteAdsress} = require("../controller/addresControl")

routes.route("/").get(getAddress).post(postAddress)
routes.route("/:id").put(putAddress).delete(deleteAdsress)

module.exports  = routes