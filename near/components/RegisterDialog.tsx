import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import RegisterBtn from "./RegisterBtn";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export default function RegisterDialog({
    dialogOpen,
    setDialogOpen,
}: {
    dialogOpen: boolean;
    setDialogOpen: (value: boolean) => void;
}) {
    const handleClose = () => {
        setDialogOpen(false);
    };
    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="account-registration"
                open={dialogOpen}
            >
                <BootstrapDialogTitle
                    id="account-registration"
                    onClose={handleClose}
                >
                    Your account is not registered
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Click below button to register with shop and token
                        contract. You will need 1 NEAR for depositing. Any over
                        deposited will be transferred back to your account
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <RegisterBtn />
                    {/* <Button autoFocus onClick={handleClose}>
                        Register Now!
                    </Button> */}
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
