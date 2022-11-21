import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../axiosConfig"


const userApi = {
    getUser: createAsyncThunk('userReducer/getUser', async (params) => {
        try {
            let url = '/user/me'
            const response = await axiosClient.post(url, { params })
            if (response) {
                console.log("response:", response)
            }
        } catch (error) {
            console.log("Error:", error)
        }

    }),
    signIn: createAsyncThunk('userReducer/signIn', async (params: any) => {
        try {
            let url = '/user/signin'
            const response = await axiosClient.post(url, { params });
            if (response) {
                console.log('response:', response)
            }
        } catch (error) {
            console.log("error:", error)
        }
    })
}

export default userApi