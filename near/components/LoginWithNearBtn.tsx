import Button from "@mui/material/Button";
import { useWalletSelector } from "@near/context/WalletContext";

const LoginWithNearBtn = () => {
    const { modal } = useWalletSelector();
    const handleSignIn = () => {
        modal.show();
    };

    return (
        <Button variant="contained" onClick={handleSignIn}>
            Login with NEAR
        </Button>
    );
};

export default LoginWithNearBtn;
