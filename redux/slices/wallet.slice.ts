import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { map, distinctUntilChanged } from "rxjs";
import {
    AccountState,
    setupWalletSelector,
    WalletSelector,
} from "@near-wallet-selector/core";
import { createSlice } from "@reduxjs/toolkit";
import {
    setupModal,
    WalletSelectorModal,
} from "@near-wallet-selector/modal-ui";
import { setupDefaultWallets } from "@near-wallet-selector/default-wallets";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

declare global {
    interface Window {
        selector: WalletSelector;
        modal: WalletSelectorModal;
    }
}

interface WalletSelectorState {
    selector: WalletSelector | null;
    modal: WalletSelectorModal | null;
    accounts: AccountState[];
    accountId: string | null;
}

const initialState: WalletSelectorState = {
    selector: null,
    modal: null,
    accounts: [],
    accountId: null,
};

// export function useSignIn() {
//     const modal = useSelector(modalSelector);
//     modal?.show();
// }

export const initialize = createAsyncThunk("wallet/initialize", async () => {
    try {
        const selector = await setupWalletSelector({
            network: "testnet",
            debug: true,
            modules: [...(await setupDefaultWallets()), setupMyNearWallet()],
        });
        return selector;
    } catch (e) {
        console.log(e);
    }
    // const modal = setupModal(selector, {
    //     contractId: process.env.SHOP_CONTRACT_ID as string,
    // });
    // const state = selector.store.getState();
});

const walletSlice = createSlice({
    name: "walletSelector",
    initialState,
    reducers: {
        signIn(state) {
            console.log(state.modal);
            state.modal?.show();
        },
        setAccountId(state) {
            state.accountId =
                state.accounts.find((account) => account.active)?.accountId ||
                null;
        },
        setAccounts(state) {
            const selector = state.selector;
            const subscription = selector?.store.observable
                .pipe(
                    map((s) => s.accounts),
                    distinctUntilChanged()
                )
                .subscribe((nextAccounts) => {
                    console.log("Accounts update", nextAccounts);
                    state.accounts = nextAccounts;
                });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(initialize.fulfilled, (state, action) => {
            const selector = action.payload;
            if (selector) {
                const modal = setupModal(selector, {
                    contractId: process.env.SHOP_CONTRACT_ID as string,
                });
                state.accounts = selector.store.getState().accounts;

                window.selector = selector;
                window.modal = modal;

                state.selector = selector;
                state.modal = modal;
            }
            return state;
        });
        builder.addCase(initialize.rejected, (state, action) => {
            state = initialState;
        });
    },
});

export const walletSelector = (state: WalletSelectorState) =>
    state.selector?.wallet();
export const selectorSelector = (state: WalletSelectorState) => state.selector;
export const modalSelector = (state: WalletSelectorState) => state.modal;
export const accountsSelector = (state: WalletSelectorState) => state.accounts;
export const accountIdSelector = (state: WalletSelectorState) =>
    state.accountId;
export const { setAccountId, setAccounts, signIn } = walletSlice.actions;
export default walletSlice.reducer;
