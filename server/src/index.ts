import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { getFullProject, getProjects } from "./queries/get";
import { postAuthDiscord, postUser } from "./queries/post";
import { driver } from "./driver/Neo4j.connect";

const originLink = "http://localhost:3000";

const app = express();
const corsOptions: cors.CorsOptions = {
    origin: originLink
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/auth/discord", async (req, res) => await postAuthDiscord(req, res));
app.post("/user", async (req, res) => await postUser(req, res));

app.get("/projects", async (req, res) => await getProjects(req, res));
app.get("/project/:id", async (req, res) => await getFullProject(req, res));

process.on('beforeExit', () => {
    driver.close();
});

const port = 4000;
app.listen(port, () => {
    console.log(`listening https://localhost:${port}`);
});