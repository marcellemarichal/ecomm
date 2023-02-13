const { Router } = require('express')
const PagamentoController = require('../controllers/PaymentsController.js')

const router = Router()

router.get('/admin/pagamentos/:id', PagamentoController.detalhaUmPagamento)
router.post('/admin/pagamentos', PagamentoController.criaPagamento)
router.put('/admin/pagamentos/:id', PagamentoController.confirmaPagamento)

module.exports = router;