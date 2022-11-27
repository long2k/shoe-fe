import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useWalletSelector } from "@near/context/WalletContext";
import * as React from "react";

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Near
    const { selector, accountId, modal, accounts } = useWalletSelector();
    // Logout
    const handleLogout = async () => {
        try {
            const wallet = await selector.wallet();
            await wallet.signOut();
        } catch (error) {
            console.error(error);
        }
    };
    //Switch wallet
    const handleSwitchWallet = () => {
        modal.show();
    };
    //Switch account
    const handleSwitchAccount = () => {
        const currentIndex = accounts.findIndex(
            (x) => x.accountId === accountId
        );
        const nextIndex =
            currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;
        const nextAccountId = accounts[nextIndex].accountId;
        selector.setActiveAccount(nextAccountId);
        console.log("Switch to " + nextAccountId);
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>
                            {accountId?.split(".").reduce((name, string) => {
                                return name + string.charAt(0).toUpperCase();
                            }, "")}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem>
                    <Avatar /> {accountId}
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSwitchWallet}>
                    <ListItemIcon>
                        <ChangeCircleIcon fontSize="small" />
                    </ListItemIcon>
                    Switch Wallet
                </MenuItem>
                {accounts.length > 1 && (
                    <MenuItem onClick={handleSwitchAccount}>
                        <ListItemIcon>
                            <ChangeCircleIcon fontSize="small" />
                        </ListItemIcon>
                        Switch Account
                    </MenuItem>
                )}
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
