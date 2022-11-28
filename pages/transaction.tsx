import DataTable from "@components/partial/transaction/DataTable";
import { useWalletSelector } from "@near/context/WalletContext";
import { Transaction } from "@near/types";
import React from "react";
import transactionApi from "../api/module/transaction.api";
import style from "../styles/components/Transaction.module.css";
const Transaction = () => {
    const { accountId } = useWalletSelector();
    const [transactions, setTransactions] = React.useState<Transaction[]>([]);
    React.useEffect(() => {
        (async () => {
            if (accountId) {
                const data = (await transactionApi.getTransaction({
                    accountId,
                })) as any;
                if (data) setTransactions(data);
            }
        })();
    }, [accountId]);
    if (accountId)
        return (
            <div className={style.container}>
                <DataTable transactions={transactions} />
            </div>
        );
    return <div>Nothing to show here</div>;
};

export default Transaction;
