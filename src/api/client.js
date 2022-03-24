import axios from 'axios';
import store from "@/store"
import router from "@/router"

const apiUrl = 'http://localhost:3000/';


const axiosClient = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
}) 

axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        await store.dispatch("user/logout");
        router.push({ name: "login" });
      }
      return Promise.reject(error);
    }
  );
  

export const setAuthorizationHeader = (token) => {
    axiosClient.defaults.headers.common['Authorization'] = token
}

export const removeAuthorizationHeader = () => {
    delete axiosClient.defaults.headers.common['Authorization']
}

export default axiosClient