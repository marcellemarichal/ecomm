import bcryptjs from 'bcryptjs';

const sal = bcryptjs.genSaltSync(12)
const encriptarSenha = (senha) => bcryptjs.hashSync(senha, sal);

export default encriptarSenha;