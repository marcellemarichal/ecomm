import encriptarSenha from "../helpers/passwordEncrypt.js"
import usuarios from "../models/Usuario.js"
import jwt from "jsonwebtoken"

function criaTokenJWT(usuario) {
    const payload = {
        id: usuario.id
    }
    const token = jwt.sign(payload, process.env.CHAVE_JWT);
    return token;  
}

class userController {
    static login = (req, res) => {
        const token = criaTokenJWT(req.user);
        res.set('Authorization', token);
        res.status(204).send();
    }

    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            if(err){
                res.status(404).send({message: `${err.message} - Lista de usuários não localizada`})
            } else {
                res.status(200).json(usuarios);
            }
        })
    }

    static listarUsuarioPorID = (req,res) => {
        const id = req.params.id;

        usuarios.findById(id, (err, usuarios) => {
            if(err){
                res.status(404).send({message: `${err.message} - ID do usuario não localizado`})
            } else {
                res.status(200).send(usuarios);
            }

        })

    }

    static cadastrarUsuario = (req, res) => {
        const hashSenha = encriptarSenha(req.body.senha)
        req.body.senha = hashSenha

        let usuario = new usuarios(req.body);
        usuario.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar usuario`})
            } else { 
                res.status(201).send(usuario.toJSON())
            }
        })
    } 

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Usuario atualizado com sucesso'})
            }
        })
    }

    static excluirUsuario = (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Usuario removido com sucesso'})
            }
        })
    }
}

export default userController