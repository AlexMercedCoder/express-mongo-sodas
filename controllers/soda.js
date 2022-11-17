const express = require("express");
const { append } = require("express/lib/response");
const Soda = require("../models/soda");

// CREATE THE ROUTER
const router = express.Router();

// ERROR HANDLER
function errorHandler(error, res) {
  res.json(error);
}

// routes

// SEED ROUTE
router.get("/seed", async (req, res) => {
  await Soda.remove({}).catch((error) => errorHandler(error, res));
  const sodas = await Soda.create([
    { name: "Orange", color: "Orange", readyToSell: true },
    { name: "Cola", color: "Black", readyToSell: true },
    { name: "Root Beer", color: "Brown", readyToSell: true },
  ]).catch((error) => errorHandler(error, res));
  res.json(sodas);
});

// INDUCES
// INDEX ROUTE - GET - LIST ALL SODAS
router.get("/", async (req, res) => {
    const sodas = await Soda.find({}).catch((error) => errorHandler(error, res))
    res.render("soda/index.ejs", {sodas})
});

// NEW ROUTE - GET - GET THE NEW FORM
router.get("/new", (req, res) => {
    res.render("soda/new.ejs")
})

// DESTROY ROUTE - DELETE - DELETES ONE SODA
router.delete("/:id", async (req, res) => {
    await Soda.findByIdAndRemove(req.params.id)
    res.redirect("/soda")
})

// UPDATE ROUTE - PUT - UPDATES ONE SODA

// CREATE ROUTE - POST - CREATES A SODA
router.post("/", async (req, res) => {

    // make sure readyToSell is true or false
    req.body.readyToSell = Boolean(req.body.readyToSell)

    // create the soda
    await Soda.create(req.body).catch((error) => errorHandler(error, res))

    // redirect to index
    res.redirect("/soda")
})

// EDIT ROUTE - GET - GET THE EDIT FORM

// SHOW ROUTE - GET - GETS ONE SODA
router.get("/:id", async (req, res) => {
    const soda = await Soda.findById(req.params.id)
    res.render("soda/show.ejs", {soda})
})

// export the routes
module.exports = router;
