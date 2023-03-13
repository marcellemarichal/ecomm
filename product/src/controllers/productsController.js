import Produto from "../models/Produto.js"

class ProductController {
    static listarProdutos = (req, res) => {
        Produto.find((err, produtos) => {
            res.status(200).json(produtos)
        })
    }

    static listarProdutoPorID = (req,res) => {
        const id = req.params.id;

        Produto.findById(id, (err, produtos) => {
            if(err){
                res.status(404).send({message: `${err.message} - ID do produto não localizado`})
            } else {
                res.status(200).send(produtos);
            }

        })

    }

    static cadastrarProduto = (req, res) => {
        let produto = new Produto(req.body);
        produto.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar produto`})
            } else { 
                res.status(201).send(produto.toJSON())
            }
        })
    } 

    static atualizarProduto = (req, res) => {
        const id = req.params.id;

        Produto.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Produto atualizado com sucesso'})
            }
        })
    }

    static excluirProduto = (req, res) => {
        const id = req.params.id;

        Produto.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(204).send({message: 'Produto removido com sucesso'})
            }
        })
    }
}

export default ProductController