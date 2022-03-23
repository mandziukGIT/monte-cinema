import axios from 'axios';

const apiUrl = 'http://localhost:3000/';


const axiosClient = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
}) 

export const setAuthorizationToken = (token) => {
    axiosClient.defaults.headers.common['Authorization'] = token
}

export const removeAuthorizationToken = () => {
    delete axiosClient.defaults.headers.common['Authorization']
}

export default axiosClient