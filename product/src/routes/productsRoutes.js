import express from "express";
import productController from "../controllers/productsController.js";

const router = express.Router();

router
    .get("/api/products", productController.listarProdutos)
    .get("/api/products/:id", productController.listarProdutoPorID)
    .post("/api/admin/products", productController.cadastrarProduto)
    .put("/api/admin/products/:id", productController.atualizarProduto)
    .delete("/api/admin/products/:id", productController.excluirProduto)

export default router;