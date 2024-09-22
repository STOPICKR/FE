import axios from "axios"

export const apiClient = axios.create(
    {
        baseURL: 'https://api.stopickr.com',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)