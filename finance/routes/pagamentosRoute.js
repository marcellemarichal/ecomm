const { Router } = require('express')
const PagamentoController = require('../controllers/PaymentsController.js')

const router = Router()

router.get('/pagamentos/:id', PagamentoController.detalhaUmPagamento)
router.post('/pagamentos', PagamentoController.criaPagamento)
router.put('/pagamentos/:id', PagamentoController.confirmaPagamento)

module.exports = router;