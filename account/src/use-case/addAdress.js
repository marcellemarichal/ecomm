import { arrayOfUsers } from './createUserAccount.js'

export function addAdressUseCase(endereco, email) {
    const user = arrayOfUsers.find(user => user.email === email)
    const index = arrayOfUsers.findIndex(user => user.email === email)

    if (!user) {
        return false
    }
    const userWithAddress = { ...user, address: endereco }
    arrayOfUsers.splice(index, 1)
    arrayOfUsers.push(userWithAddress)

    return true
}