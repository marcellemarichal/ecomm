export const arrayOfUsers = [
    {
        id: 1,
        nome: 'João',
        email: 'joao@email.com',
        senha: 'senhadojoao',
        createdDate: '10/01/2023'
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@email.com',
        senha: 'mariasenha',
        createdDate: '10/01/2023'
    }
];

export const createUserUseCase = (nome, email, senha) => {
    
    //criar ID
    const userId = arrayOfUsers.length + 1;
    //criar data
    const date = {
        dateStyle: ('short')
    }

    const momentDate = new Date().toLocaleString('pt-br', date)

    const userNovo = {
        id: userId,
            nome: nome,
            email: email,
            senha: senha,
            createdDate: momentDate
    }

    arrayOfUsers.push(userNovo);
    // retornar objeto inteiro - 5 campos
    return arrayOfUsers;
}





