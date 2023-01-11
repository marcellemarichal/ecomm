import {removeUserUseCase} from '../src/use-case/removeUserAccount.js'
import {createUserUseCase} from '../src/use-case/createUserAccount.js'
import {searchUserAccountByEmailUseCase} from '../src/use-case/searchUserAccountByEmail.js'

createUserUseCase('Josué Lima','josuelima@email.com','senhaDoJosue');
createUserUseCase('Fiona Silva','fionasilva@email.com','fiona1234');
createUserUseCase('Carlos Junior','carlosjr@email.com','carlos54321');
createUserUseCase('Julia Mendes','julia@mail.com','123456ju');

const removeCarlos = removeUserUseCase('carlosjr@email.com');
console.log('tentando remover correto', removeCarlos);

const removeNaoExiste = removeUserUseCase('ninguem@email.com');
console.log('email que não existe', removeNaoExiste);

const buscarRemovido = searchUserAccountByEmailUseCase('carlosjr@email.com');
console.log('testar se removeu', buscarRemovido)


