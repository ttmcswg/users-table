import axios from "axios"

export const usersAPI = {
    getUsersList() {
        return axios.get('http://localhost:3001/users/').then(response => response.data)
    },
    patchUserById(id, obj) {
        return axios.patch(`http://localhost:3001/users/${id}`, {
            firstName: obj.firstName,
            lastName: obj.lastName,
            birthday: obj.birthday
        })
    },
}