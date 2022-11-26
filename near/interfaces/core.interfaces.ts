import { WalletSelector } from "@near-wallet-selector/core";
import { providers } from "near-api-js";
import { NO_DEPOSIT, THREE_HUNDRED_TGAS } from "../constants";

export const viewMethod = async ({
    selector,
    contractId,
    method,
    args = {},
}: {
    selector: WalletSelector;
    contractId: string;
    method: string;
    args?: Object;
}) => {
    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({
        url: network.nodeUrl,
    });
    let res: any = await provider.query({
        request_type: "call_function",
        account_id: contractId,
        method_name: method,
        args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
        finality: "optimistic",
    });
    return Buffer.from(res.result).toString();
};

export const callMethod = async ({
    selector,
    accountId,
    contractId,
    method,
    args = {},
    gas = THREE_HUNDRED_TGAS,
    deposit = NO_DEPOSIT,
}: {
    selector: WalletSelector;
    accountId: string;
    contractId: string;
    method: string;
    args?: Object;
    gas?: string;
    deposit?: string;
}) => {
    const wallet = await selector.wallet();
    // Sign a transaction with the "FunctionCall" action
    return await wallet.signAndSendTransaction({
        signerId: accountId,
        receiverId: contractId,
        actions: [
            {
                type: "FunctionCall",
                params: {
                    methodName: method,
                    args,
                    gas,
                    deposit,
                },
            },
        ],
    });
};

export const useGetTransactionResult = async (
    selector: WalletSelector,
    txhash: string
) => {
    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({
        url: network.nodeUrl,
    });
    // Retrieve transaction result from the network
    const transaction = await provider.txStatus(txhash, "unused");
    return providers.getTransactionLastResult(transaction);
};
