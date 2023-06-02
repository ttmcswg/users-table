import axios from "axios";

export const usersAPI = {
    getUsersList() {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data)
    },
}