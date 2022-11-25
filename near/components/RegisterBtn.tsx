import { Button } from "@mui/material";
import { useWalletSelector } from "@near/context/WalletContext";
import { register } from "@near/interfaces";
import React from "react";

const RegisterBtn = () => {
    const { selector, accountId } = useWalletSelector();
    const handleClick = () => {
        if (accountId) register(selector, accountId);
    };
    return (
        <Button variant="contained" onClick={handleClick}>
            Register Now!
        </Button>
    );
};

export default RegisterBtn;
