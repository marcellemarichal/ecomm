import { addAdressUseCase } from '../src/use-case/addAdress.js'
import { createUserUseCase } from '../src/use-case/createUserAccount.js'
import { filterByUFUseCase } from '../src/use-case/filterByUF.js'

createUserUseCase('Josué Lima', 'josuelima@email.com', 'senhaDoJosue');
createUserUseCase('Fiona Silva', 'fionasilva@email.com', 'fiona1234');
createUserUseCase('Carlos Junior', 'carlosjr@email.com', 'carlos54321');
createUserUseCase('Julia Mendes', 'julia@mail.com', '123456ju');
createUserUseCase('Lana Machado', 'machlana@mail.com', '997lana');

const enderecoJulia = {
    logradouro: 'Rua Agatha Christie',
    numero: '300',
    complemento: 'casa',
    bairro: 'Sarandi',
    CEP: 95940300,
    cidade: 'Porto Alegre',
    UF: 'RS'
}

const enderecoCarlos = {
    logradouro: 'Rua Fernando Pessoa',
    numero: '400',
    complemento: 'apartamento',
    bairro: 'Vila Jardim',
    CEP: 35940300,
    cidade: 'Campinas',
    UF: 'SP'
}

const enderecoJosue = {
    logradouro: 'Av. Machado de Assis',
    numero: '2380',
    complemento: 'apartamento',
    bairro: 'Higienópolis',
    CEP: 11940300,
    cidade: 'São Paulo',
    UF: 'SP'
}

const enderecoFiona = {
    logradouro: 'Rua Clarice Lispector',
    numero: '285',
    complemento: 'casa',
    bairro: 'Olaria',
    CEP: 78940300,
    cidade: 'São Caetano',
    UF: 'SP'
}

const enderecoLana = {
    logradouro: 'Rua Mário Quintana',
    numero: '90',
    complemento: 'casa',
    bairro: 'Jardim do Sol',
    CEP: 66940300,
    cidade: 'Ouro Preto',
    UF: 'MG'
}

addAdressUseCase(enderecoJulia, 'julia@mail.com')
addAdressUseCase(enderecoCarlos, 'carlosjr@email.com')
addAdressUseCase(enderecoFiona, 'fionasilva@email.com')
addAdressUseCase(enderecoJosue, 'josuelima@email.com')
addAdressUseCase(enderecoLana, 'machlana@mail.com')


console.log(filterByUFUseCase('SP'))

