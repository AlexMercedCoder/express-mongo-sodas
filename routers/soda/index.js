const express = require("express");
const controllers = require("../../controllers");

// CREATE THE ROUTER
const router = express.Router();


// routes

// SEED ROUTE
router.get("/seed", controllers.soda.seed);

// INDUCES
// INDEX ROUTE - GET - LIST ALL SODAS
router.get("/", controllers.soda.index);

// NEW ROUTE - GET - GET THE NEW FORM
router.get("/new", controllers.soda.new);

// DESTROY ROUTE - DELETE - DELETES ONE SODA
router.delete("/:id", controllers.soda.destroy);

// UPDATE ROUTE - PUT - UPDATES ONE SODA
router.put("/:id", controllers.soda.update);

// CREATE ROUTE - POST - CREATES A SODA
router.post("/", controllers.soda.create);

// EDIT ROUTE - GET - GET THE EDIT FORM
router.get("/:id/edit", controllers.soda.edit);

// SHOW ROUTE - GET - GETS ONE SODA
router.get("/:id", controllers.soda.show);

// export the routes, which will be registered in server.js
module.exports = router;
