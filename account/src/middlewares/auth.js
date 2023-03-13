import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from "passport-http-bearer"
import Usuario from '../models/Usuario.js'
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken"

async function verificaSenha(senha, hashSenha) {
    const senhaValida = await bcryptjs.compare(senha, hashSenha)
    if (!senhaValida) {
        throw new Error('Senha inválida');
    }
}

    const localStrategy = new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) => {
        try {
            const usuario = await Usuario.findOne({email: email});
            if (!usuario) {
                return done(null, false, {
                    message: `Não existe usuário com o email ${email}`
                })
            }

            const senhaValida = await verificaSenha(senha, usuario.hashSenha);
            if (!senhaValida) {
                return done(null, false, {message: 'Senha inválida'})
            }
            return done(null, usuario);

        } catch (error) {
            done(error)
        }
    })

   const bearerStrategy = new BearerStrategy(
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.CHAVE_JWT)
                const usuario = await Usuario.findById(payload.id)
                done(null, usuario);
            } catch (error) {
                done(error)
            }
        }
    )

passport.use(localStrategy);
passport.use(bearerStrategy);

export const authLocal = passport.authenticate("local", { session: false });
export const authBearer = passport.authenticate("bearer", { session: false });