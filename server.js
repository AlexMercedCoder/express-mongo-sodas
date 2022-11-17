//////////////////////////////////
// Dependencies
//////////////////////////////////
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const SodaRouter = require("./controllers/soda")


//////////////////////////////////
// Application Object
//////////////////////////////////
const app = express()


//////////////////////////////////
// Middleware
//////////////////////////////////
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))


//////////////////////////////////
// Routes and Routers
//////////////////////////////////
app.get("/", (req, res) => {
    res.send("Server is Working")
})

app.use("/soda", SodaRouter)



//////////////////////////////////
// Server Listener
//////////////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})