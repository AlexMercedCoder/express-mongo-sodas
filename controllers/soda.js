const express = require("express")
const { append } = require("express/lib/response")
const Soda = require("../models/soda")

// CREATE THE ROUTER
const router = express.Router()

// routes

// SEED ROUTE
router.get("/seed", async (req, res) => {
    await Soda.remove({})
    const sodas = await Soda.create([
        {name: "Orange", color: "Orange", readyToSell: true},
        {name: "Cola", color: "Black", readyToSell: true},
        {name: "Root Beer", color: "Brown", readyToSell: true},
    ])
    res.json(sodas)
})

// export the routes
module.exports = router