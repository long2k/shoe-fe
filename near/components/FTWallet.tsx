import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Chip from "@mui/material/Chip";
import { useWalletSelector } from "@near/context/WalletContext";
import { getFtBalance } from "@near/interfaces";
import React from "react";
import BuyFtDialog from "./BuyFtDialog";
const FTWallet = () => {
    const { accountId, selector } = useWalletSelector();
    const [balance, setBalance] = React.useState<bigint>(BigInt(0));
    const [isBuyFtDialogOpen, setIsBuyDialogOpen] =
        React.useState<boolean>(false);

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
    });
    const handleClick = () => {
        setIsBuyDialogOpen(true);
    };

    return (
        <div>
            <Chip
                label={balance.toString()}
                variant="outlined"
                onDelete={handleClick}
                icon={<MonetizationOnOutlinedIcon />}
                deleteIcon={<AddCircleOutlineOutlinedIcon />}
            />
            <BuyFtDialog
                dialogOpen={isBuyFtDialogOpen}
                setDialogOpen={setIsBuyDialogOpen}
            />
        </div>
    );
};

export default FTWallet;
