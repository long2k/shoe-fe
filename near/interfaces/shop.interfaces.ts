import { WalletSelector } from "@near-wallet-selector/core";
import {
    ContractResponse,
    Item,
    OrderedItemsDto,
    Product,
    Transaction,
    TxId
} from "@near/types";
import { AccountView } from "near-api-js/lib/providers/provider";
import { callMethod, viewMethod } from ".";
import { ONE_NEAR, SHOP_CONTRACT, SHOP_METHOD } from "../constants";

export type Account = AccountView & {
    account_id: string;
};

export const getProduct = async (
    selector: WalletSelector,
    productId: string
): Promise<Product> => {
    return JSON.parse(
        await viewMethod({
            selector,
            contractId: SHOP_CONTRACT,
            method: SHOP_METHOD.CHECK_ACCOUNT,
            args: {
                product_id: productId,
            },
        })
    );
};

export const getAllProducts = async (
    selector: WalletSelector
): Promise<Product[]> => {
    return JSON.parse(
        await viewMethod({
            selector,
            contractId: SHOP_CONTRACT,
            method: SHOP_METHOD.GET_ALL_PRODUCTS,
        })
    );
};

export const register = async (selector: WalletSelector, accountId: string) => {
    return await callMethod({
        selector,
        accountId,
        contractId: SHOP_CONTRACT,
        method: SHOP_METHOD.REGISTER_CALL,
        deposit: ONE_NEAR,
    });
};

// export const buyTokenCall = async (
//     selector: WalletSelector,
//     accountId: string,
//     amount: string
// ) => {
//     return await callMethod({
//         selector,
//         accountId,
//         contractId: SHOP_CONTRACT,
//         method: SHOP_METHOD.BUY_TOKEN_CALL,
//         deposit: amount,
//     });
// };

export const createOrder = async (
    selector: WalletSelector,
    accountId: string,
    items: Item[],
    shippingPrice: string
) => {
    return await callMethod({
        selector,
        accountId,
        contractId: SHOP_CONTRACT,
        method: SHOP_METHOD.CREATE_ORDER_CALL,
        args: {
            items,
            shipping_price: shippingPrice,
        } as OrderedItemsDto,
        deposit: "1",
    });
};

export const cancelOrder = async (
    selector: WalletSelector,
    accountId: string,
    txId: string
) => {
    return await callMethod({
        selector,
        accountId,
        contractId: SHOP_CONTRACT,
        method: SHOP_METHOD.CANCEL_ORDER_CALL,
        args: {
            tx_id: txId,
        } as TxId,
        deposit: "1",
    });
};

export const completeOrder = async (
    selector: WalletSelector,
    accountId: string,
    txId: string
) => {
    return await callMethod({
        selector,
        accountId,
        contractId: SHOP_CONTRACT,
        method: SHOP_METHOD.CONFIRM_COMPLETE,
        args: {
            tx_id: txId,
        } as TxId,
        deposit: "1",
    });
};

export const getTransactions = async (
    selector: WalletSelector,
    accountId: string
): Promise<Transaction[]> => {
    return JSON.parse(
        await viewMethod({
            selector,
            contractId: SHOP_CONTRACT,
            method: SHOP_METHOD.GET_TRANSACTIONS,
            args: {
                account_id: accountId,
            },
        })
    );
};

export const checkAccount = async (
    selector: WalletSelector,
    accountId: string
): Promise<ContractResponse> => {
    return JSON.parse(
        await viewMethod({
            selector,
            contractId: SHOP_CONTRACT,
            method: SHOP_METHOD.CHECK_ACCOUNT,
            args: {
                account_id: accountId,
            },
        })
    );
};
