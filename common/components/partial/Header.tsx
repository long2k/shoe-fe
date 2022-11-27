import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import LoginWithNearBtn from "@near/components/LoginWithNearBtn";
import RegisterBtn from "@near/components/RegisterBtn";
import { useWalletSelector } from "@near/context/WalletContext";
import { checkAccount } from "@near/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "@css/components/header.module.css";
import Logo from "@css/images/ethereum.png";
import AccountMenu from "./AccountMenu";
import RegisterDialog from "@near/components/RegisterDialog";
import FTWallet from "@near/components/FTWallet";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

const Header = () => {
    // handle setting for user
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // set user for displaying name
    // const user = null;

    // set router
    const router = useRouter();
    // change tab
    const [tab, setTab] = useState<string>("/");
    const changeTab = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
        router.push(newValue);
    };

    // near
    const [registerDialogOpen, setRegisterDialogOpen] =
        React.useState<boolean>(false);
    const { accountId, selector } = useWalletSelector();
    const [isRegistered, setIsRegistered] = React.useState<boolean>(false);
    // check account state
    React.useEffect(() => {
        try {
            (async () => {
                if (accountId) {
                    const response = await checkAccount(selector, accountId);
                    setIsRegistered(response.success);
                    setRegisterDialogOpen(!response.success);
                    console.log(response);
                }
            })();
        } catch (error) {
            console.log(error);
        }
    }, [accountId, selector]);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Picture of the author"
                        width={112}
                        height={60}
                    />
                </Link>
            </div>
            <div className="nav">
                <Tabs value={tab} onChange={changeTab} centered>
                    <Tab label="Trang Chủ" value="/" />
                    <Tab label="Giao Dịch" value="/transaction" />
                </Tabs>
            </div>
            <div className={styles.headerRight}>
                {!accountId && <LoginWithNearBtn />}
                {accountId && !isRegistered && (
                    <>
                        <RegisterBtn /> <AccountMenu />
                    </>
                )}
                {accountId && isRegistered && (
                    <>
                        <FTWallet />
                        <AccountMenu />
                    </>
                )}
                <Button variant="text" onClick={()=>{router.push('/cart')}}>
                    <AddShoppingCartIcon />
                </Button>
            </div>
            <RegisterDialog
                setDialogOpen={setRegisterDialogOpen}
                dialogOpen={registerDialogOpen}
            />
        </div>
    );
};

export default Header;
