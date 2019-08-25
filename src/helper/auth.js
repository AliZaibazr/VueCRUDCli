import Axios from "axios";
// import { Promise } from "q"
export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('localhost:8000/api/auth/login', credentials)
        .then ((response)=> {
            res(response.data)
        })
        .catch((err)=> {
            rej("Wrong Email or password")
        })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user")

    if(!userStr)
    {
        return null
    }
    return JSON.parse(userStr)
}