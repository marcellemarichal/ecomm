import { arrayOfUsers } from './createUserAccount.js'

export function changeUserNameUseCase(email, newName) {
    const nameChanged = arrayOfUsers.find(user => user.email === email)

    if (nameChanged === undefined) {
        return false
    }
    nameChanged.nome !== newName
    return true
}