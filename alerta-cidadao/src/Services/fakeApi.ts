import axios from 'axios';

export const baseURL = axios.create({
    baseURL: "https://fake-api-alerta-cidadao.onrender.com",
    timeout: 5000,
})
