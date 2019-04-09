
// const app = require("express");

// // Use Handlebars to render the main index.html page with the restaurants in it.
// app.get("/", function(req, res) {
//     connection.query("SELECT rest_name FROM restaurants;", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       res.render("index", { restaurants: data });
//     });
//   });
  
//   // Register a restaurant
//   app.post("/register/confirmation", function(req, res) {
//     connection.query("INSERT INTO restaurants VALUES (?)", [req.body.plan], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       // Send back the ID of the new todo
//       res.json({ id: result.insertId });
//       console.log({ id: result.insertId });
//     });
//   });
  
//   // Update a restaurant
//   app.put("/register", function(req, res) {
//     connection.query("UPDATE restaurants SET rest_name = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
  
//     });
//   });
  
//   // Delete a restaurant
//   app.delete("/register/confirmation", function(req, res) {
//     connection.query("DELETE FROM restaurants WHERE id = ?", [req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.affectedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
  
//     });
//   });

//   // WE ALSO NEED TO DELETE ALL MENU ITEMS FROM THE MENUS 
//   // TABLE THAT CORRESPONDS TO THE RESTAURANT BEING DELETED