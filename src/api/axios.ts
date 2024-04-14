import axios from "axios";
const baseURL = process.env.BASE_URL
const publicAxios = axios.create({
    baseURL: baseURL
})

export default publicAxios;