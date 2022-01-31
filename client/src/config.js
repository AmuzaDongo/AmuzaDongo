import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://dongoamuza.herokuapp.com/api/"
})