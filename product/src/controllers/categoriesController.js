import categorias from "../models/Categoria.js"

class categoryController {
    static listarCategorias = (req, res) => {
        categorias.find((err, categorias) => {
            res.status(200).json(categorias)
        })
    }

    static listarCategoriaPorID = (req,res) => {
        const id = req.params.id;

        categorias.findById(id, (err, categorias) => {
            if(err){
                res.status(400).send({message: `${err.message} - ID da categoria não localizado`})
            } else {
                res.status(200).send(categorias);
            }

        })

    }

    static cadastrarCategoria = (req, res) => {
        let categoria = new categorias(req.body);
        categoria.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar categoria`})
            } else { 
                res.status(201).send(categoria.toJSON())
            }
        })
    } 

    static atualizarCategoria = (req, res) => {
        const id = req.params.id;

        categorias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Categoria atualizada com sucesso'})
            }
        })
    }

    static excluirCategoria = (req, res) => {
        const id = req.params.id;

        categorias.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Categoria removida com sucesso'})
            }
        })
    }
}

export default categoryController