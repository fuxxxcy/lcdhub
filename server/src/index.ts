import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/test", async (req, res) => {
    try {
        const result = "All works";
        res.json(result);
    } catch (error) {
        console.error('Помилка отримання працівників:', error);
        res.status(500).send('Помилка сервера');
    }
});

const port = 4000;
app.listen(port, () => {
    console.log(`listening port ${port}`);
});