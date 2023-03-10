import express from "express";
import orderController from "../controllers/ordersController.js";
import { authBearer } from "../middlewares/auth.js";

const router = express.Router();

router
    .get("/orders", authBearer, orderController.listarPedidos)
    .get("/orders/:id", authBearer, orderController.listarPedidoPorID)
    .post("/admin/orders", authBearer, orderController.cadastrarPedido)
    .put("/admin/orders/:id", authBearer, orderController.atualizarPedido)
    .delete("/admin/orders/:id", authBearer, orderController.excluirPedido)

export default router;