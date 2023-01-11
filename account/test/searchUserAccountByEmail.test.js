import {searchUserAccountByEmailUseCase} from '../src/use-case/searchUserAccountByEmail.js'
import {createUserUseCase} from '../src/use-case/createUserAccount.js'

createUserUseCase('Carlos Junior','carlosjr@email.com','carlos54321');
createUserUseCase('Josué Lima','josuelima@email.com','senhaDoJosue');
createUserUseCase('Fiona Silva','fionasilva@email.com','fiona1234');

const buscaJosue = searchUserAccountByEmailUseCase('josuelima@email.com')
const buscaJoaninha = searchUserAccountByEmailUseCase('joaninha@email.com')

console.log('buscando o Josue =>',buscaJosue)
console.log('buscando a Joaninha =>',buscaJoaninha)
