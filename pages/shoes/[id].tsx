import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react"
import productApi from '../../api/module/product.api'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Loading from '../../common/components/Loading'
import styles from '../../styles/components/detailshoe.module.css'

const DetailShoe = () => {
    const [product, setProduct] = useState({})
    const handleSetProduct = (obj: any) => setProduct({ ...obj })
    const router = useRouter()
    const id = router.query.id
    useEffect(() => {
        const callApi = async () => {
            try {
                if (id) {
                    const response = await productApi.getProductById(id)
                    handleSetProduct(response)
                }
            } catch (error) {
                console.log("Detail Shoe:", error)
            }
        };
        callApi()
    }, [id])
    const addCartHandler = () => {
        const selected = JSON.parse(localStorage.getItem('items'))
        if (!selected) {
            const storage = JSON.stringify([{ ...product, count: 1 }])
            localStorage.setItem('items', storage)
        } else {
            const checkItem = selected?.find((e: any) => e._id === id)
            console.log("checkItem:", checkItem)
            if (checkItem) {
                selected?.forEach(e => {
                    if (e._id === id) {
                        e.count += 1
                    }
                })
                const items = JSON.stringify([...selected])
                localStorage.setItem('items', items)
            } else {
                selected.push({ ...product, count: 1 })
                const items = JSON.stringify([...selected])
                localStorage.setItem('items', items)
            }

        }
        router.push('/cart')
    }
    return (
        <>
            {
                Object.keys(product).length ? (<Box sx={{ flexGrow: 1, paddingLeft: "35px", paddingRight: "35px" }}>
                    <Grid container spacing={5}>
                        <Grid item xs={5}>
                            <div>
                                <img src={product.img} alt="product" style={{ width: '100%', height: '80%' }} />
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <div className={styles.content}>
                                <h1 className={styles.product}>Sản Phẩm</h1>
                                <div className={styles.title}>{product?.name}</div>
                                <div>
                                    <p className={styles.textBase}>Mô tả:</p>
                                    <p>{product?.description}</p>
                                </div>
                                <div>
                                    <p className={styles.textBase}>Giá:</p>
                                    <p style={{ color: "red", fontWeight: "700", fontSize: "23px" }}>{product?.price}</p>
                                </div>
                                <div>
                                    <p className={styles.textBase} >Màu sắc</p>
                                    <img src={product.img} style={{ width: '40px' }} />
                                </div>
                            </div>
                            <Button
                                variant='contained'
                                sx={{ display: 'flex', margin: "0 auto" }}
                                onClick={addCartHandler}
                            >
                                Thêm vào giỏ Hàng
                            </Button>
                        </Grid>
                    </Grid>
                </Box>) : <Loading />
            }
        </>
    )
}

export default DetailShoe