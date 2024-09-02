const express = require("express");
const routes = express.Router()
const {regisControl} = require("../controller/registerControl")

routes.route("/").post(regisControl)

module.exports = routes