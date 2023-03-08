import bcryptjs from 'bcryptjs';

const encriptarSenha = (senha) => {
    const sal = bcryptjs.genSaltSync()
    const hash = bcryptjs.hashSync(senha, sal)

    return hash
}

export default encriptarSenha;