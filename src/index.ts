import express from "express";
import cors from "cors";
import { myDataSource, port } from "./config.js";
import { router } from "./routes/index.js";


myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () =>
    console.log(`Server started on port http://localhost:${port}`, new Date())
);
