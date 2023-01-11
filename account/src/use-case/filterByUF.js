import { arrayOfUsers } from './createUserAccount.js'

export function filterByUFUseCase(local) {
    const residentsSP = arrayOfUsers.filter(searchUF => searchUF.address.UF === local)

    if (residentsSP.length < 0) {
        return `Não há usuários deste local`
    }
    return residentsSP
}
