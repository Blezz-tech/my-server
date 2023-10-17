/* 
require("dotenv").config();

// Библиотеки
const express = require("express");
const cors = require("cors");

const router = require("./routes/index");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

//app.use("/static", express.static(path.resolve(__dirname, "static")));

app.use("/", router);

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
*/

const express = require("express");


const app = express();
const port = 5000;

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(port, () => console.log(`Running on port ${port}`));