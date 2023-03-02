import express from "express";
import PagamentoController from "../controllers/PaymentsController.js";

const router = express.Router();

router
    .get('/pagamentos/:id', PagamentoController.detalhaUmPagamento)
    .post('/pagamentos', PagamentoController.criaPagamento)
    .put('/pagamentos/:id', PagamentoController.confirmaPagamento)

export default router;