import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {router} from "./routes/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.use("/", (req: Request, res: Response) => {
  res.send("sosat");
});

app.listen(port, () =>
  console.log(`Server started on port ${port}`, new Date())
);