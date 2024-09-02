const express = require("express");
const routes = express.Router()
const loginControl = require("../controller/loginControl")

routes.route("/").post(loginControl)


module.exports = routes