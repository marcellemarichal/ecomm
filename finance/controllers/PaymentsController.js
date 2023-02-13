const {Pagamentos} = require('../models')

class PagamentoController {
    static async detalhaUmPagamento(req, res){
        const { id:idParams } = req.params
        try {
            const {id, preco, nomeCartao, numeroCartao, vencimentoCartao, status, createdAt, updatedAt} = await Pagamentos.findOne( { 
                where: { 
                  id: Number(idParams)
                }
              })
            return res.status(200).json({id, preco, nomeCartao, numeroCartao, vencimentoCartao, status, createdAt, updatedAt})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPagamento(req, res){
        const novoPagamento = {...req.body, status: 'CRIADO'}
        try {
            const {id, status} = await Pagamentos.create(novoPagamento)
            return res.status(201).set('location',`/admin/pagamentos/${id}`).json({ id, status})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PagamentoController