const { Pagamentos } = require ('../models')

class PagamentoController {
    static async detalhaUmPagamento(req, res) {
        const { id: idParams } = req.params
        try {
            const { id, preco, nomeCartao, numeroCartao, vencimentoCartao, status, createdAt, updatedAt } = await Pagamentos.findOne({
                where: {
                    id: Number(idParams)
                }
            })
            return res.status(200).json({ id, preco, nomeCartao, numeroCartao, vencimentoCartao, status, createdAt, updatedAt })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPagamento(req, res) {
        const novoPagamento = { ...req.body, status: 'CRIADO' }
        try {
            const { id } = await Pagamentos.create(novoPagamento)
            const objetoResposta = {
                id,
                status: novoPagamento.status,
                links: [
                    {
                        rel: 'self',
                        method: 'GET',
                        href: `http://finance:3000/admin/pagamentos/${id}`
                    },
                    {
                        rel: 'activate',
                        method: 'PUT',
                        href: `http://finance:3000/admin/pagamentos/${id}/confirmar`
                    },
                    {
                        rel: 'cancel',
                        method: 'PUT',
                        href: `http://finance:3000/admin/pagamentos/${id}/cancelar`
                    },
                ]
            };
            return res.status(201).set('location', `/admin/pagamentos/${id}`).json({ objetoResposta })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async confirmaPagamento(req, res) {
        const { id } = req.params
        const novoStatus = req.body
        try {
            if (novoStatus.status === 'CONFIRMADO' || novoStatus.status === 'CANCELADO') {
                await Pagamentos.update(novoStatus, {
                    where: {
                        id: Number(id)
                    }
                })
                const pagamentoConfirmado = await Pagamentos.findOne({
                    where: {
                        id: Number(id)
                    }
                })
                return res.status(200).json(pagamentoConfirmado)
            } else {
                return res.status(406).json('Esta ação não é permitida')
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PagamentoController