import axios from 'axios'

export const instanceAxios = axios.create({
    baseURL: 'https://c13-08-n-php.fly.dev/api'
})

