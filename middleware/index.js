// a function for registering our middleware to clean up server.js

const morgan = require("morgan")
const methodOverride = require("method-override")
const express = require("express")


function middleware (app){
    app.use(morgan("dev"))
    app.use(methodOverride("_method"))
    app.use(express.urlencoded({extended: true}))
    app.use("/static", express.static("public"))
}

module.exports = middleware