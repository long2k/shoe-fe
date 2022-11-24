// import { AccountView } from "near-api-js/lib/providers/provider";
// import { AppWallet } from "./wallet";
// /* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

// export const ftContract = {
//     wallet: AppWallet;
//     contractId: string;
//     constructor({
//         contractId,
//         walletToUse,
//     }: {
//         contractId: string;
//         walletToUse: AppWallet;
//     }) {
//         this.contractId = contractId;
//         this.wallet = walletToUse;
//     }

//     async getGreeting() {
//         return await this.wallet.viewMethod({
//             contractId: this.contractId,
//             method: "get_greeting",
//             args: {},
//         });
//     }

//     async setGreeting(greeting: string) {
//         return await this.wallet.callMethod({
//             contractId: this.contractId,
//             method: "set_greeting",
//             args: { message: greeting },
//         });
//     }
// }

// export type Account = AccountView & {
//     account_id: string;
// };
