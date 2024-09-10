import axios from "axios"

export const apiClient = axios.create(
    {
        baseURL: 'https://api.trandtrader.com:8080',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)