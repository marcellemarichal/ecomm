import {createUserUseCase} from '../src/use-case/createUserAccount.js'

const pessoa1 = createUserUseCase('Josué Lima','josuelima@email.com','senhaDoJosue');
const pessoa2 = createUserUseCase('Fiona Silva','fionasilva@email.com','fiona1234');
const pessoa3 = createUserUseCase('Carlos Junior','carlosjr@email.com','carlos54321');

console.log(pessoa1);
console.log(pessoa2);
