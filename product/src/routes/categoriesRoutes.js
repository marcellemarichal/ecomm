import express from "express";
import CategoryController from "../controllers/categoriesController.js";
import { authBearer } from "../middlewares/auth.js";

const router = express.Router();

router
    .get("/api/categories", CategoryController.listarCategorias)
    .get("/api/categories/:id", CategoryController.listarCategoriaPorID)
    .post("/api/admin/categories", authBearer, CategoryController.cadastrarCategoria)
    .put("/api/admin/categories/:id", authBearer, CategoryController.atualizarCategoria)
    .delete("/api/admin/categories/:id", authBearer, CategoryController.excluirCategoria)

export default router;