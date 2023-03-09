import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import usuarios from '../models/Usuario.js'
import bcryptjs from 'bcryptjs';

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
            done(error);
        }
    })
)

export { LocalStrategy }