import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
    {
        id: {type: Number},
        nome: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},        
        status: {type: String, required: true, enum: ["ativa", "inativa"]}
    },
    {
        versionKey: false
    }
);

const Categoria = mongoose.model("categorias", categoriaSchema);


export default Categoria;