import axios from "axios"

export const apiClient = axios.create(
    {
        // baseURL: 'https://api.stopickr.com',
        // baseURL: 'http://localhost:8080',
        // baseURL: 'http://127.0.0.1:8000/',
        baseURL: 'https://ncih4cf9r3.execute-api.ap-northeast-2.amazonaws.com/production',
        headers: {
            'Content-Type': 'application/json'
        }
    }
)