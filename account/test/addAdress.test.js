import { addAdressUseCase } from '../src/use-case/addAdress.js'
import { createUserUseCase } from '../src/use-case/createUserAccount.js'

createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhaDoJosue');
createUserUseCase('Fiona Silva', 'fionasilva@email.com', 'fiona1234');
createUserUseCase('Carlos Junior', 'carlosjr@email.com', 'carlos54321');
createUserUseCase('Julia Mendes', 'julia@mail.com', '123456ju');

const enderecoJulia = {
    logradouro: 'Rua Tijuca',
    numero: '300',
    complemento: 'casa',
    bairro: 'Sarandi',
    CEP: 95940300,
    cidade: 'Porto Alegre',
    UF: 'RS'
}

const includingJuliasAddress = addAdressUseCase(enderecoJulia, 'julia@mail.com')
console.log('inserting right address', includingJuliasAddress)

const includingWrongAddress = addAdressUseCase('Rua dos Bobos n0', 'naoexisto@mail.com')
console.log('inserting wrong address', includingWrongAddress)