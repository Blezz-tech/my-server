import express from "express";
import cors from "cors";
import { port } from "./config.js";
import { router } from "./routes/index.js";


const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () =>
  console.log(`Server started on port ${port}`, new Date())
);
