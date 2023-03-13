const express = require ("express");
const PagamentoController = require ("../controllers/PaymentsController.js");

const router = express.Router();

router
    .get('/pagamentos/:id', PagamentoController.detalhaUmPagamento)
    .post('/pagamentos', PagamentoController.criaPagamento)
    .put('/pagamentos/:id', PagamentoController.confirmaPagamento)

module.exports = router;