import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import initializeDatabase from "./database/initializeDatabase";
import router from "./router/router";

dotenv.config();
initializeDatabase();

const app = express();
app.on("error", (err) => console.error("Server error:", err));

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Port: ${PORT}`));

export default app;
