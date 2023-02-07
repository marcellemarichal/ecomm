import express from "express";
import categoryController from "../controllers/categoriesController.js";

const router = express.Router();

router
    .get("/api/categories", categoryController.listarCategorias)
    .get("/api/categories/:id", categoryController.listarCategoriaPorID)
    .post("/api/admin/categories", categoryController.cadastrarCategoria)
    .put("/api/admin/categories/:id", categoryController.atualizarCategoria)
    .delete("/api/admin/categories/:id", categoryController.excluirCategoria)

export default router;