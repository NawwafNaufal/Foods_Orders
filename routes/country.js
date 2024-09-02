const express = require("express")
const routes = express.Router()
const {coutryControl,countryGet,countryPutControl} = require("../controller/countryControl")

routes.route("/").post(coutryControl).get(countryGet)
routes.route("/:id").put(countryPutControl)

module.exports = routes