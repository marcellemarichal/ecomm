import express from "express";
import productController from "../controllers/productsController.js";
import { authBearer } from "../middlewares/auth.js";

const router = express.Router();

router
    .get("/api/products", productController.listarProdutos)
    .get("/api/products/:id", productController.listarProdutoPorID)
    .post("/api/admin/products", authBearer, productController.cadastrarProduto)
    .put("/api/admin/products/:id", authBearer, productController.atualizarProduto)
    .delete("/api/admin/products/:id", authBearer, productController.excluirProduto)

export default router;