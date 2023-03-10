import pedidos from '../models/orders.js'

class orderController {
    static listarPedidos = (req, res) => {
        pedidos.find((err, pedidos) => {
            res.status(200).json(pedidos)
        })
    }

    static listarPedidoPorID = (req,res) => {
        const id = req.params.id;

        pedidos.findById(id, (err, pedidos) => {
            if(err){
                res.status(400).send({message: `${err.message} - ID do pedido não localizado`})
            } else {
                res.status(200).send(pedidos);
            }

        })

    }

    static cadastrarPedido = (req, res) => {
        let pedido = new pedidos(req.body);
        pedido.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar pedido`})
            } else { 
                res.status(201).send(pedido.toJSON())
            }
        })
    } 

    static atualizarPedido = (req, res) => {
        const id = req.params.id;

        pedidos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Pedido atualizado com sucesso'})
            }
        })
    }

    static excluirPedido = (req, res) => {
        const id = req.params.id;

        pedidos.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Pedido removido com sucesso'})
            }
        })
    }
}

export default orderController