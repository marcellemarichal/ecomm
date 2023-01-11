import {changeUserNameUseCase} from '../src/use-case/changeUserName.js'
import {createUserUseCase} from '../src/use-case/createUserAccount.js'

createUserUseCase('Josué Lima','josuelima@email.com','senhaDoJosue');
createUserUseCase('Fiona Silva','fionasilva@email.com','fiona1234');
createUserUseCase('Carlos Junior','carlosjr@email.com','carlos54321');
createUserUseCase('Julia Mendes','julia@mail.com','123456ju');

const changeCarlos = changeUserNameUseCase('carlosjr@email.com','Carlos Martins Júnior')
console.log('alterando Carlos',changeCarlos)
const changeAnyone = changeUserNameUseCase('anyone@email.com','Zé Ninguém')
console.log('alterando quem não existe',changeAnyone)