import express from "express";
import cors from "cors";

import { port } from "./settings.js";
import { createDB } from "./services/createDB.js";

import { router } from "./routes/index.js";

createDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () =>
  console.log(`Server started on port ${port}`, new Date())
);
