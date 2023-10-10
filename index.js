require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const path = require("path");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
// pug
// app.set('view engine', 'pug');
//ejs
// app.set('view engine', 'ejs');

app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.use("/", router);

// pug
app.get("/main", (req, res, next) => {
  res.render(
    "main",
    {
      layout: false,
    },
    {
      title: "Products",
      message: "Products List",
      products: products,
    }
  );
});

// ejs
app.get("/ejs", (req, res, next) => {
  res.render("main", {
    title: "Products",
    message: "Products List",
    products: products,
  });
});

//hbs
app.get("/hbs", (req, res, next) => {
  res.render("main.hbs", {
    title: "Products",
    message: "Products List",
    products: products,
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.stack);
});

app.use(errorHandler); // Обработка ошибок, последний Middleware

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server started on port ${PORT}`, new Date())
    );
  } catch (e) {
    console.log(e);
  }
};

start();
