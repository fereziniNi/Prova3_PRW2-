import 'dotenv/config';
import express from "express";
import routes from './routes/index.js';
import connectDatabase from "./config/database_config.js";

const app = express();

await connectDatabase();

app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});