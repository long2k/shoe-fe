// import "./styles.css";
import React, { useState } from "react";
import { Wheel } from "../common/components/partial/wheel/Roulette";
import { makeStyles, Modal } from "@material-ui/core";
import { getRandomInt } from "../common/components/partial/wheel/utils";
import { useWalletSelector } from "@near/context/WalletContext";
import userApi from "../api/module/user.api";
import ButtonImg from "../styles/images/button.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "70%",
    border: "2px solid #f3eaea",
    padding: "16px 32px 24px",
    position: "absolute",
    fontSize: "30px",
    textAlign: "center",
    borderRadius: "17px",
    backgroundColor: "#fff",
    boxShadow: "2px 5px 12px #d9d9d9",
  },
  wheelContainer: {
    width: "20em",
    height: "20em",
    margin: "0 auto",
    marginTop: "5em",
    position: "relative",
  },
  button: {
    margin: "3em auto",
    display: "block",
    width: "10rem",
    cursor: "pointer",
  },
}));

export default function LuckyWheel() {
  const classes = useStyles();
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const { accountId } = useWalletSelector();
  const [error, setError] = useState(false);
  const [data, setData] = useState({ message: "" });
  const [errMessage, setErrMessage] = useState({ message: "" });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenError = () => {
    setError(true);
  };
  const handleCloseError = () => {
    setError(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClick = async () => {
    if (accountId) {
      const response = await userApi.getRefund(accountId);
      if (response.code && response.code === 400) {
        setErrMessage({ message: response.message });
        handleOpenError();
      } else {
        setData({ ...response });
        const newCouponNum = getRandomInt(1, 8);
        setCouponNum(newCouponNum);
        setMustSpin(true);
      }
    } else {
      setErrMessage({ message: "Please register to participate in the program." });
      handleOpenError();
    }
  };

  return (
    <div style={{ paddingBottom: "73px" }}>
      <div className={classes.wheelContainer}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={couponNum}
          onStopSpinning={() => {
            setMustSpin(false);
            handleOpen();
          }}
        />
      </div>
      <Image
        src={ButtonImg}
        className={classes.button}
        alt="button"
        onClick={() => onClick()}
      />
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div className={classes.paper}>
          <h4>Congratulation!</h4>
          <p>{data.message}</p>
        </div>
      </Modal>
      <Modal open={error} onClose={handleCloseError} className={classes.modal}>
        <div className={classes.paper}>
          <h4>Failed!</h4>
          <p>{errMessage.message}</p>
        </div>
      </Modal>
    </div>
  );
}
