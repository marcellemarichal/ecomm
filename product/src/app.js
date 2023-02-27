import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const swaggerDoc = require('../swagger/product.json');

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.json())

routes(app);

export default app