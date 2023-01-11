import { arrayOfUsers } from './createUserAccount.js'

export function removeUserUseCase(email) {
    const index = arrayOfUsers.findIndex(user => user.email === email)

    if (index === -1) {
       return false
    } else {
        arrayOfUsers.splice(index, 1);
        return true
    }
}

export {arrayOfUsers}