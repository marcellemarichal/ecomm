import mongoose from "mongoose";

const pedidosSchema = new mongoose.Schema(
    {
        id: {type: Number},
        dataPedido: {type: Date, default: Date.now},
        cliente: {type: String, required: true},
        entrega: {
            logradouro: {type: String, required: true},
            numero: {type: String, required: true},
            complemento: {type: String},
            bairro: {type: String},
            cep: {type: String, required: true, match: /^\d{8}$/},
            cidade: {type: String},
            uf: {type: String, enum: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]}
        },
        pedidos: {
            produtoId:{type: Number},
            quantidade: {type: Number, min: 1},
            valorTotalProduto: {type: Number},
            valorDesconto: {type: Number}
        },
    },
    {
        versionKey: false
    }
)

const pedidos = mongoose.model("pedidos", pedidosSchema)

export default pedidos;