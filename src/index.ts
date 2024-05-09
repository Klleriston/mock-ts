import express from "express";
import { router } from "./router";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server listen on http://127.0.0.1:${PORT}`))