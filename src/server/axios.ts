import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
    url: "https://andersondias.vercel.app/api",
});