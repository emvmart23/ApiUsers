import express, { Application } from "express";
import { ConnectDatabase } from "./db/database";
import bodyParser from "body-parser";
import cors from "cors";
import { defaultRoute } from "./routes/routes";

const app: Application = express();
ConnectDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", defaultRoute);

const PORT = process.env.Port || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
