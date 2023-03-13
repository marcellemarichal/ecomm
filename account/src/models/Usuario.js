import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true, match: /^[^\d.,][^.,]{3,}/},  
        email: {type: String, match: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, required: true},
        senha: {type: String, match: /^(?=.*[$*&@#])(?=.*\d)(?=.*[aA-zZ])[0-9a-zA-Z$*&@#]{8,}$/, required: true},
        cpf: {type: String, match: /^\d{11}$/},
        telefone: {type: String, match: /^\d{10,13}$/},
        endereco: {
            rua: {type: String, required: true},
            numero: {type: String, required: true},
            complemento: {type: String},
            cep: {type: String, match: /^\d{8}$/},
            cidade: {type: String, required: true},      
            UF: {type: String, required: true, enum: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]}
        }
    }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;