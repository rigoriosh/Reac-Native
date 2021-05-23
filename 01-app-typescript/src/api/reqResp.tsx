import axios from "axios";

//https://reqres.in/api/users?page=2
export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api'
})