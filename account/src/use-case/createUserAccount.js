export const arrayOfUsers = [];

export function createUserUseCase(nome, email, senha) {
    
    //criar ID
    const userId = arrayOfUsers.length + 1;
    //criar data
    const date = {
        dateStyle: ('short')
    }

    const momentDate = new Date().toLocaleString('pt-br', date)

    arrayOfUsers.push(
        {
            id: userId,
            nome: nome,
            email: email,
            senha: senha,
            createdDate: momentDate

        }
    )
    // retornar objeto inteiro - 5 campos
    return arrayOfUsers;
}





