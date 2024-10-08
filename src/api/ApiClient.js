import axios from "axios"

export const apiClient = axios.create(
    {
        // baseURL: 'https://api.stopickr.com',
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)