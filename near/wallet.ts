// import { providers } from "near-api-js";
// // import "@near-wallet-selector/modal-ui/styles.css";
// // import LedgerIconUrl from '@near-wallet-selector/ledger/assets/ledger-icon.png';
// // import MyNearIconUrl from "@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png";
// // import NearIconUrl from "@near-wallet-selector/near-wallet/assets/near-wallet-icon.png";

// import { useSelector } from "react-redux";
// import {
//     accountIdSelector,
//     accountsSelector,
//     modalSelector,
//     selectorSelector,
//     walletSelector,
// } from "../redux/slices/wallet.slice";

// export const THREE_HUNDRED_TGAS = "300000000000000";
// export const NO_DEPOSIT = "0";

// // Wallet that simplifies using the wallet selector

// // Sign-in method
// export const useSignIn = () => {
//     const modal = useSelector(modalSelector);
//     return modal?.show();
// }

// // Sign-out method
// export async function useSignOut() {
//     try {
//         const wallet = await useSelector(walletSelector);
//         wallet?.signOut();
//     } catch (err) {
//         console.log(err);
//     }
// }

// export function useSwitchWallet() {
//     const modal = useSelector(modalSelector);
//     modal?.show();
// }

// export function useSwitchAccount() {
//     const accounts = useSelector(accountsSelector);
//     const accountId = useSelector(accountIdSelector);
//     const currentIndex = accounts.findIndex((x) => x.accountId === accountId);
//     const nextIndex = currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;
//     const nextAccountId = accounts[nextIndex].accountId;
//     const selector = useSelector(selectorSelector);
//     if (selector) {
//         selector.setActiveAccount(nextAccountId);
//         console.log("Switch to " + nextAccountId);
//     }
// }

// // Make a read-only call to retrieve information from the network
// export async function useViewMethod({
//     contractId,
//     method,
//     args = {},
// }: {
//     contractId: string;
//     method: string;
//     args: Object;
// }) {
//     const selector = useSelector(selectorSelector);
//     if (selector) {
//         const { network } = selector.options;
//         const provider = new providers.JsonRpcProvider({
//             url: network.nodeUrl,
//         });
//         let res: any = await provider.query({
//             request_type: "call_function",
//             account_id: contractId,
//             method_name: method,
//             args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
//             finality: "optimistic",
//         });
//         return JSON.parse(Buffer.from(res.result).toString());
//     }
// }

// // Call a method that changes the contract's state
// export async function useCallMethod({
//     contractId,
//     method,
//     args = {},
//     gas = THREE_HUNDRED_TGAS,
//     deposit = NO_DEPOSIT,
// }: {
//     contractId: string;
//     method: string;
//     args?: Object;
//     gas?: string;
//     deposit?: string;
// }) {
//     // Sign a transaction with the "FunctionCall" action
//     const wallet = await useSelector(walletSelector);
//     const accountId = useSelector(accountIdSelector);
//     if (wallet && accountId) {
//         return await wallet.signAndSendTransaction({
//             signerId: accountId,
//             receiverId: contractId,
//             actions: [
//                 {
//                     type: "FunctionCall",
//                     params: {
//                         methodName: method,
//                         args,
//                         gas,
//                         deposit,
//                     },
//                 },
//             ],
//         });
//     }
// }

// // Get transaction result from the network
// export async function useGetTransactionResult(txhash: string) {
//     const selector = useSelector(selectorSelector);
//     if (selector) {
//         const { network } = selector.options;
//         const provider = new providers.JsonRpcProvider({
//             url: network.nodeUrl,
//         });
//         // Retrieve transaction result from the network
//         const transaction = await provider.txStatus(txhash, "unused");
//         return providers.getTransactionLastResult(transaction);
//     }
// }
