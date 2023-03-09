import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import usuarios from '../models/Usuario.js'
import bcryptjs from 'bcryptjs';
import { Strategy as BearerStrategy } from "passport-http-bearer"
import jwt from "jsonwebtoken"


function verificaUsuario(usuario) {
    if (!usuario) {
        throw new Error('Não existe usuário com este email');
    }
}

async function verificaSenha(senha, hashSenha) {
    const senhaValida = await bcryptjs.compare(senha, hashSenha)
    if (!senhaValida) {
        throw new Error('Senha inválida');
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) => {
        try {
            const usuario = await usuarios.buscaPorEmail(email);
            verificaUsuario(usuario);
            await verificaSenha(senha, usuario.hashSenha);

            done(null, usuario.id);

        } catch (error) {
            done(error)
        }
    })
)

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.CHAVE_JWT)
                const usuario = await usuarios.buscaPorId(payload.id)
                done(null, usuario);
            } catch (error) {
                done(error)
            }
        }
    )
)

export { LocalStrategy, BearerStrategy }