const mongoose = require("./connection")

// SODA SCHEMA - Definition/Shape of the Data Type
const sodaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: String,
    readyToSell: Boolean
}, {timestamps: true})

// SODA Model - Interface with the database for sodas
const Soda = mongoose.model("Soda", sodaSchema)

// Export the Soda Model
module.exports = Soda