// THIS FILE IS THE CONTROLLER FILE
// IN MANY FRAMEWORKS CONTROLLERS ARE OBJECTS WITH METHODS
// THAT ARE LATER PLUGGED INTO ROUTES


const {Soda} = require("../../models"); // the soda model for updating database
const {errorHandler} = require("../../utils") // errorHandler utility function





// CONTROLLER OBJECT WITH ALL THE CONTOLLER METHODS
const controller = {

  // SEED ROUTE - for resetting the database
  seed: async (req, res) => {
  await Soda.remove({}).catch((error) => errorHandler(error, res));
  const sodas = await Soda.create([
    { name: "Orange", color: "Orange", readyToSell: true },
    { name: "Cola", color: "Black", readyToSell: true },
    { name: "Root Beer", color: "Brown", readyToSell: true },
  ]).catch((error) => errorHandler(error, res));
  res.json(sodas);
  },

  // INDUCES
  // INDEX ROUTE - GET - LIST ALL SODAS
  index: async (req, res) => {
  const sodas = await Soda.find({}).catch((error) => errorHandler(error, res));
  res.render("soda/index.ejs", { sodas });
  },

  // NEW ROUTE - GET - GET THE NEW FORM
  new: (req, res) => {
  res.render("soda/new.ejs");
  },

  // DESTROY ROUTE - DELETE - DELETES ONE SODA
  destroy: async (req, res) => {
  await Soda.findByIdAndRemove(req.params.id).catch((error) =>
    errorHandler(error, res)
  );
  res.redirect("/soda");
  },

  // UPDATE ROUTE - PUT - UPDATES ONE SODA
  update: async (req, res) => {
  // make sure readyToSell is true or false
  req.body.readyToSell = Boolean(req.body.readyToSell);

  // update the soda
  await Soda.findByIdAndUpdate(req.params.id, req.body);

  // redirect to index
  res.redirect("/soda");
  },

  // CREATE ROUTE - POST - CREATES A SODA
  create: async (req, res) => {
  // make sure readyToSell is true or false
  req.body.readyToSell = Boolean(req.body.readyToSell);

  // create the soda
  await Soda.create(req.body).catch((error) => errorHandler(error, res));

  // redirect to index
  res.redirect("/soda");
  },

  // EDIT ROUTE - GET - GET THE EDIT FORM
  edit: async (req, res) => {
  const soda = await Soda.findById(req.params.id).catch((error) =>
    errorHandler(error, res)
  );
  res.render("soda/edit.ejs", { soda });
  },

  // SHOW ROUTE - GET - GETS ONE SODA
  show: async (req, res) => {
  const soda = await Soda.findById(req.params.id).catch((error) =>
    errorHandler(error, res)
  );
  res.render("soda/show.ejs", { soda });
  }


}



// export the controller
module.exports = controller;
