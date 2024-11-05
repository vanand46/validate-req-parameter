const express = require("express");
const validateParmameter = require("./parameterValidator"); // Import the middleware

const app = express();

app.get("/user/:id", validateParmameter(/^\d+$/, "id"), (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

app.get(
  "/product/:sku",
  validateParmameter(/^[A-Z0-9-]+$/, "sku"),
  (req, res) => {
    res.send(`Product SKU is ${req.params.sku}`);
  }
);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
