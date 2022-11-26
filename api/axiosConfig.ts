import axios, { AxiosRequestConfig } from 'axios'
import { apiConfig } from './apiConfig'

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use(request => {
    console.log("request:", request)
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (err) => {
    throw err;
})

export default axiosClient