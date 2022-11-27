import axios from "axios";
import queryString from "query-string";
import { apiConfig } from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: {
        encode: (params) => queryString.stringify(params, { arrayFormat: "bracket" }),
    },
});

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
