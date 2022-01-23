import axios, { Axios } from "axios";

export const httpClient = axios.create({
    baseURL: "http://localhost:8080/api"
})