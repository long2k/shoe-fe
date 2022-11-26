import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../axiosConfig"


const productApi = {
    getProduct: createAsyncThunk('productReducer/getProduct', async () => {
        try {
            let url = '/product/'
            const response = await axiosClient.get(url)
            if (response) {
                console.log("response:", response)
                return response
            }
        } catch (error) {
            console.log("Error:", error)
        }

    }),

    getProductById: async (id: any) => {
        try {
            let url = `/product/${id}`
            console.log("url:", url)
            const response = await axiosClient.get(url)
            if (response) {
                console.log("response:", response)
                return response
            }
        } catch (error) {
            console.log("Error:", error)
        }

    }
}

export default productApi