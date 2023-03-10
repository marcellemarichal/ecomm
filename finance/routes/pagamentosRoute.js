const { Router } = require('express')
const PagamentoController = require('../controllers/PaymentsController.js')
const authBearer = require('../middlewares/auth.js')

const router = Router()

router.get('/pagamentos/:id', authBearer, PagamentoController.detalhaUmPagamento)
router.post('/pagamentos', authBearer, PagamentoController.criaPagamento)
router.put('/pagamentos/:id', authBearer, PagamentoController.confirmaPagamento)

module.exports = router;