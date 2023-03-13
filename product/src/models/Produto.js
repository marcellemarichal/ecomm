import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: Number},
        produto: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},
        descricao: {type: String, required: true},
        slug: {type: String, match: /^[a-zA-Z\d-]+$/},
        preco_unitario: {type: Number, min: 0.01},
        quantidade_em_estoque: {type: Number, min: 1, max: 10000},
        id_categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categorias', match: /^[\da-z]{24}$/}
    },
    {
        versionKey: false
    }
)

const produtos = mongoose.model("products", produtoSchema);

export default produtos;