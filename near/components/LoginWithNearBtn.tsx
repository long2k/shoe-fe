import Button from "@mui/material/Button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, signIn } from "../../redux/slices/wallet.slice";

const LoginWithNearBtn: React.FC = () => {
    const modal = useSelector(modalSelector);
    const dispatch = useDispatch();
    const handleSignIn = () => {
        dispatch(signIn())
        console.log(modal);
        modal?.show();
    };

    return (
        <Button variant="contained" onClick={handleSignIn}>
            Login with NEAR
        </Button>
    );
};

export default LoginWithNearBtn;
