import { WalletSelector } from "@near-wallet-selector/core";
import { callMethod, viewMethod } from ".";
import { FT_CONTRACT, FT_METHOD } from "../constants";

export const getFtBalance = async (
    selector: WalletSelector,
    accountId: string
): Promise<string> => {
    return await viewMethod({
        selector,
        contractId: FT_CONTRACT,
        method: FT_METHOD.FT_BALANCE_OF,
        args: {
            account_id: accountId,
        },
    });
};

export const buyFt = async (
    selector: WalletSelector,
    accountId: string,
    amount: string
) => {
    return await callMethod({
        selector,
        accountId,
        contractId: FT_CONTRACT,
        method: FT_METHOD.BUY_FT,
        deposit: amount,
    });
};

export const getFtRate = async (selector: WalletSelector): Promise<string> => {
    return await viewMethod({
        selector,
        contractId: FT_CONTRACT,
        method: FT_METHOD.FT_RATE,
    });
};
