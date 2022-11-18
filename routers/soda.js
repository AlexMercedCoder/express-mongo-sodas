const express = require("express");
const controller = require("../controllers/soda");

// CREATE THE ROUTER
const router = express.Router();


// routes

// SEED ROUTE
router.get("/seed", controller.seed);

// INDUCES
// INDEX ROUTE - GET - LIST ALL SODAS
router.get("/", controller.index);

// NEW ROUTE - GET - GET THE NEW FORM
router.get("/new", controller.new);

// DESTROY ROUTE - DELETE - DELETES ONE SODA
router.delete("/:id", controller.destroy);

// UPDATE ROUTE - PUT - UPDATES ONE SODA
router.put("/:id", controller.update);

// CREATE ROUTE - POST - CREATES A SODA
router.post("/", controller.create);

// EDIT ROUTE - GET - GET THE EDIT FORM
router.get("/:id/edit", controller.edit);

// SHOW ROUTE - GET - GETS ONE SODA
router.get("/:id", controller.show);

// export the routes, which will be registered in server.js
module.exports = router;
