import axios from "axios";

export const api = axios.create({
    baseURL: "https://andersondias.vercel.app/api",
});