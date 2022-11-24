import React, { useState } from "react";
import { useRouter } from "next/router";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import styles from "../../../styles/components/header.module.css";
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Logo from "../../../styles/images/ethereum.png";
import Image from "next/image";
import LoginWithNearBtn from "../../../near/components/LoginWithNearBtn";

const Header = () => {
    // handle setting for user
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // set user for displaying name
    const user = null;

    // set router
    const router = useRouter();
    // change tab
    const [tab, setTab] = useState<String>("/");
    const changeTab = (event: React.SyntheticEvent, newValue: String) => {
        setTab(newValue);
        router.push(newValue);
    };
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
                    <Tab label="Home" value="/" />
                    <Tab label="Transaction" value="/transaction" />
                </Tabs>
            </div>
            <div className={styles.headerRight}>
                <LoginWithNearBtn/>
            </div>
        </div>
    );
};

export default Header;
