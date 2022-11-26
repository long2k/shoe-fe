import { Button } from "@mui/material";
import { useWalletSelector } from "@near/context/WalletContext";
import { register } from "@near/interfaces";

const RegisterBtn = () => {
    const { selector, accountId } = useWalletSelector();
    const handleClick = async () => {
        try {
            if (accountId) await register(selector, accountId);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Button variant="contained" onClick={handleClick}>
            Register Now!
        </Button>
    );
};

export default RegisterBtn;
