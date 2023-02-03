import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema(
    {
        id: {type: Number},
        nome: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},        
        status: {type: String, required: true, enum: ["ATIVA", "INATIVA"]}
    }
);

const categorias = mongoose.model("categorias", categoriaSchema);

export default categorias;