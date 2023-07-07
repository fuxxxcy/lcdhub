import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getFullProject, getProjects } from "./queries/get";
import { driver } from "./driver/Neo4j.connect";

const app = express();
const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/projects", async (req, res) => await getProjects(req, res));
app.get("/project/:id", async (req, res) => await getFullProject(req, res));

process.on('beforeExit', () => {
    driver.close();
});

const port = 4000;
app.listen(port, () => {
    console.log(`listening port ${port}`);
});