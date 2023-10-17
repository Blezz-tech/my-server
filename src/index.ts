import express, { Express, Request, Response } from 'express';
const dotenv = require('dotenv');
const cors = require("cors");

const router = require("./routes/index");

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server started on port ${port}`, new Date())
    );
  } catch (e) {
    console.log(e);
  }
};

start();