import Chip from "@mui/material/Chip";
import { useWalletSelector } from "@near/context/WalletContext";
import { getFtBalance } from "@near/interfaces";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
const FTWallet = () => {
    const { accountId, selector } = useWalletSelector();
    const [balance, setBalance] = React.useState<bigint>(BigInt(0));
    React.useEffect(() => {
        try {
            (async () => {
                if (accountId) {
                    const response = await getFtBalance(selector, accountId);
                    setBalance(BigInt(response.replaceAll('"', "")));
                }
            })();
        } catch (e) {
            console.log(e);
        }
    }, []);
    const handleClick = () => {};
    return (
        <div>
            <Chip
                label={balance.toString()}
                variant="outlined"
                onDelete={handleClick}
                icon={<MonetizationOnOutlinedIcon />}
                deleteIcon={<AddCircleOutlineOutlinedIcon />}
            />
        </div>
    );
};

export default FTWallet;
