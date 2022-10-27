import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { authSlice } from "./slices/userSlice";

const createStore = () => 
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer
        },
        devTools: true
    });

export type AppStore = ReturnType<typeof createStore>;

export type AppState = ReturnType<AppStore["getState"]>

export type AppThunk<ReturnType = void > = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>

export const wrapper = createWrapper<AppStore>(createStore)