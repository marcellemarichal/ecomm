import {arrayOfUsers} from './createUserAccount.js'

export function searchUserAccountByEmailUseCase(email) {
    const userFound = arrayOfUsers.find(user => user.email === email);
  
    if (userFound) {
        return `O usuário que utiliza este e-mail é ${userFound.nome}.`
    } else {
        return `Usuário não encontrado`
    }
}