// This file is for defining utility functions to be used in different parts of the app


// ERROR HANDLER FOR ASYNC/AWAIT CALLS
function errorHandler(error, res) {
    res.json(error);
  }

module.exports = {
    errorHandler
}