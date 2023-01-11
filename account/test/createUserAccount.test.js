import { createUserUseCase } from '../src/use-case/createUserAccount.js'

const criandoJosue = createUserUseCase('Josué Lima','josuelima@email.com','senhaDoJosue');
const criandoFiona = createUserUseCase('Fiona Silva','fionasilva@email.com','fiona1234');
const criandoCarlos = createUserUseCase('Carlos Junior','carlosjr@email.com','carlos54321');
const criandoJulia = createUserUseCase('Julia Mendes','julia@mail.com','123456ju');

console.log(criandoJosue);
console.log(criandoFiona);
console.log(criandoCarlos);
console.log(criandoJulia);

