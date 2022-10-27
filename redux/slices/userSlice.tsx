import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { AppStore } from "../store";
import { HYDRATE } from "next-redux-wrapper"

export interface AuthState {
    authenState: boolean
}

const initialState: AuthState = {
    authenState: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthSate(state, action) {
            state.authenState = action.payload
        },
        // extraReducers: {
            // [HYDRATE] : (state: any, action : any) => {
            //     return {
            //         ...state,
            //         ...action.payload.auth
            //     }
            // }
        // }
    }
})

// export const { setAuthState } = authSlice.actions

// export const selectAuthState = (state: AppStore) => state.auth.authState

export default authSlice.reducer