import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: Number},
        nome: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},
        descricao: {type: String, required: true},
        slug: {type: String, match: /^[a-zA-Z\d-]+$/},
        preço_unitario: {type: Number, min: 0.01},
        quantidade_em_estoque: {type: Number, min: 1, max: 10000},
        id_categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categorias', match: /^[\da-z]{24}$/}
    },
    {
        versionKey: false
    }
)

const Produto = mongoose.model("produtos", produtoSchema)

export default Produto;