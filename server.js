//////////////////////////////////
// Dependencies
//////////////////////////////////
require("dotenv").config()
const express = require("express")
const SodaRouter = require("./routers/soda")
const middleware = require("./middleware")


//////////////////////////////////
// Application Object
//////////////////////////////////
const app = express()


//////////////////////////////////
// Middleware
//////////////////////////////////
middleware(app) // calls function to register all global middleware


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
