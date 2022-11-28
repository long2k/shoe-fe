import React, { useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import Shoe from "../styles/images/shoes1.jpg";
import styles from "../styles/components/mainpage.module.css";
import "@near-wallet-selector/modal-ui/styles.css";
import productApi from "../api/module/product.api";
import { useRouter } from "next/router";
import { productSelector } from "@redux/slices/product.slice";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function Home() {
    const shoesRef = useRef<HTMLDivElement>();
    const router = useRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(productApi.getProduct());
    }, []);
    const products = useAppSelector(productSelector);
    const handleClick = (id: String) => {
        router.push(`/shoes/${id}`);
    };
    return (
        <div className={styles.base}>
            <div className={styles.container}>
                <Grid container spacing={3} sx={{ width: "1080px" }}>
                    {products?.map((item: any, idx: any) => (
                        <Grid
                            item
                            xs={3}
                            onClick={() => {
                                handleClick(item.id);
                            }}
                            key={idx}
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            <Image
                                src={item.img}
                                width="1000"
                                height="1000"
                                alt=""
                            />
                            <div>
                                <p>{item.name}</p>
                                <p className={styles.colorPrice}>
                                    {item.price} TOKEN
                                </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
