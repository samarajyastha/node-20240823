import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  // JSON => JavaScript Object Notation
  res.json({
    appName: "nodejs-20240823",
    version: "1.0.0",
    port: PORT,
  });
});

// app.get("/about", (req, res) => {
//   res.send("about page");
// });

// app.get("/products", (req, res) => {
//   res.send("hello");
// });

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});

// HTTP Methods
/** CRUD
 * Read = GET /products
 * Write (Create) = POST /products
 * Update = PUT /products/:id
 * Delete = DELETE /products/:id
 */

// MVC => Model, View, Controller
