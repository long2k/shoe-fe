import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosClient from "../axiosConfig"


const userApi = {
    getUser: createAsyncThunk('userReducer/getUser', async (params: any) => {

    })
}

export default userApi