import express from "express";
import ProductController from "../controllers/productsController.js";
import { authBearer } from "../middlewares/auth.js";

const router = express.Router();

router
    .get("/api/products", ProductController.listarProdutos)
    .get("/api/products/:id", ProductController.listarProdutoPorID)
    .post("/api/admin/products", authBearer, ProductController.cadastrarProduto)
    .put("/api/admin/products/:id", authBearer, ProductController.atualizarProduto)
    .delete("/api/admin/products/:id", authBearer, ProductController.excluirProduto)

export default router;