import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { keyStores } from "near-api-js";
import axiosClient from "../axiosConfig";

const userApi = {
    getUser: createAsyncThunk("userReducer/getUser", async (params) => {
        try {
            let url = "/user/me";
            const response = await axiosClient.post(url, { params });
            if (response) {
                console.log("response:", response);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }),
    signIn: createAsyncThunk("userReducer/signIn", async (params: any) => {
        try {
            let url = "/user/signin";
            const response = await axiosClient.post(url, { params });
            if (response) {
                console.log("response:", response);
            }
        } catch (error) {}
    }),
    adminAuthenticate: createAsyncThunk(
        "userReducer/adminAuthenticate",
        async (accountId: string) => {
            try {
                const keyStore = new keyStores.BrowserLocalStorageKeyStore();
                const key = await keyStore.getKey("testnet", accountId);
                const signature = key.sign(Buffer.from("admin"));
                const response = await axiosClient.post("/user/login",  {
                    publicKey: signature.publicKey.toString(),
                    signature: Array.from(signature.signature),
                });

                if (response) {
                    console.log("response:", response);
                }
            } catch (error) {
                console.log("error:", error);
            }
        }
    ),
    getRefund : async(accountId: String) => {
        try {
            let url = `/user/dailyreward/${accountId}`;
            const response = await axiosClient.get(url);
            console.log("response data:", response)
            if(response){
                return response
            }
        } catch (error) {
            console.log("error:", error)
            return  error.response.data.error
        }
    }
};

export default userApi;
