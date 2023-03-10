import express from "express";
import categoryController from "../controllers/categoriesController.js";
import { authBearer } from "../middlewares/auth.js";

const router = express.Router();

router
    .get("/api/categories", categoryController.listarCategorias)
    .get("/api/categories/:id", categoryController.listarCategoriaPorID)
    .post("/api/admin/categories", authBearer, categoryController.cadastrarCategoria)
    .put("/api/admin/categories/:id", authBearer, categoryController.atualizarCategoria)
    .delete("/api/admin/categories/:id", authBearer, categoryController.excluirCategoria)

export default router;