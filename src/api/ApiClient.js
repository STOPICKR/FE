import axios from "axios"

export const apiClient = axios.create(
    {
        baseURL: 'https://api.trandtrader.com',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)