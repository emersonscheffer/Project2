// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customer.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reg.html"));
  });

  app.get("/register/confirmation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/regconfirmation.html"));
  });

  app.get("/register/confirmation/add-menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add-menu.html"));
  });

  app.get("/:restaurant", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/kitchen-menu.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customer.html"));
  });
};
