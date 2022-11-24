import {
    Action,
    configureStore,
    // getDefaultMiddleware,
    ThunkAction,
} from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import walletSlice from "./slices/wallet.slice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        wallet: walletSlice,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
