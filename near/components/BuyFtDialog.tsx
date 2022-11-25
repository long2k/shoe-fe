import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useWalletSelector } from "@near/context/WalletContext";
import { buyFt, getFtRate } from "@near/interfaces";
import { utils } from "near-api-js";
import { NumericFormat } from "react-number-format";

export default function BuyFtDialog({
    dialogOpen,
    setDialogOpen,
}: {
    dialogOpen: boolean;
    setDialogOpen: (v: boolean) => void;
}) {
    const { accountId, selector } = useWalletSelector();
    const handleClose = () => {
        setDialogOpen(false);
    };
    const [ftRate, setFtRate] = React.useState<string>("");
    const [nearAmount, setNearAmount] = React.useState<string>("0");
    const [isSummitButtonDisabled, setIsSummitButtonDisabled] =
        React.useState<boolean>(false);
    React.useEffect(() => {
        try {
            (async () => {
                const response = await getFtRate(selector);
                setFtRate(response.replaceAll('"', ""));
            })();
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleSubmit = () => {
        try {
            const yoctoNearAmount = utils.format.parseNearAmount(nearAmount);
            (async () => {
                if (accountId && yoctoNearAmount)
                    await buyFt(selector, accountId, yoctoNearAmount);
            })();
        } catch (error) {
            console.error(error);
        }
    };

    const tokenAmount = React.useMemo(() => {
        try {
            if (nearAmount && ftRate) {
                const result = (
                    BigInt(utils.format.parseNearAmount(nearAmount)!) /
                    BigInt(ftRate)
                ).toString();
                setIsSummitButtonDisabled(false);
                return result;
            }
        } catch (error) {
            setIsSummitButtonDisabled(true);
            console.error(error);
        }
    }, [ftRate, nearAmount]);

    const refundAmount = React.useMemo(() => {
        try {
            if (nearAmount && ftRate) {
                const result = utils.format.formatNearAmount(
                    (
                        BigInt(utils.format.parseNearAmount(nearAmount)!) %
                        BigInt(ftRate)
                    ).toString(),
                    24
                );
                setIsSummitButtonDisabled(false);
                return result;
            }
        } catch (error) {
            setIsSummitButtonDisabled(true);
            console.error(error);
        }
    }, [ftRate, nearAmount]);

    return (
        <div>
            <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle>Buy tokens</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Current token rate: 1 FT ={" "}
                        {utils.format.formatNearAmount(ftRate)} Ⓝ
                    </DialogContentText>
                    {tokenAmount && refundAmount && (
                        <DialogContentText>
                            You will get: {tokenAmount} FT and {refundAmount} Ⓝ
                        </DialogContentText>
                    )}
                    <DialogContentText>
                        {isSummitButtonDisabled && "Invalid amount of NEAR"}
                    </DialogContentText>
                    <NumericFormat
                        value={nearAmount}
                        customInput={TextField}
                        autoFocus
                        margin="dense"
                        id="amount"
                        label="Amount of NEAR"
                        fullWidth
                        variant="standard"
                        onChange={(event) => {
                            setNearAmount(event.target.value);
                        }}
                        allowNegative={false}
                        valueIsNumericString={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isSummitButtonDisabled}
                    >
                        Buy
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
