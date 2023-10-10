const express = require("express");

const app = express(); // it's working
const product = ["Apple", "Pen", "Computer"];

app.get("/", (req, res, next) => {
  res.send("Its working");
});

app.get("/products", (req, res, next) => {
  res.send(product);
});

app.listen(5000, () => {
  console.log("Its started", new Date());
});
