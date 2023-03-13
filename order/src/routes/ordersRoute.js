import express from "express";
import OrderController from "../controllers/ordersController.js";
import { authBearer } from "../middlewares/auth.js";

const router = express.Router();

router
    .get("/orders", authBearer, OrderController.listarPedidos)
    .get("/orders/:id", authBearer, OrderController.listarPedidoPorID)
    .post("/admin/orders", authBearer, OrderController.cadastrarPedido)
    .put("/admin/orders/:id", authBearer, OrderController.atualizarPedido)
    .delete("/admin/orders/:id", authBearer, OrderController.excluirPedido)

export default router;