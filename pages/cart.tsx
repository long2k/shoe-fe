import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Loading from "../common/components/Loading";
import { createOrder } from "@near/interfaces";
import { useWalletSelector } from "@near/context/WalletContext";
import { Item } from "@near/types";

const Cart = () => {
    const { accountId, selector, walletBalance } = useWalletSelector();

    const [product, setProduct] = React.useState([]);
    React.useEffect(() => {
        let data = JSON.parse(localStorage.getItem("items")!);
        setProduct(data);
    }, []);

    const paymentHandle = async () => {
        let data = JSON.parse(localStorage.getItem("items")!);
        let totalPrice = 1;
        const items: Item[] = data.map((chunk: any): Item => {
            totalPrice += Number(chunk.price) * Number(chunk.count);
            return {
                product_id: chunk.id,
                quantity: Number(chunk.count),
                unit_price: String(chunk.price),
            };
        });
        console.log(walletBalance);

        if (accountId) {
            if (totalPrice <= Number(walletBalance)) {
                await createOrder(selector, accountId, items, "1");
            }
            alert("Not enough balance");
        } else alert("Plz login");
    };

    const deleteHandler = (id: string) => {
        let resetProducts = product?.filter((e) => e.id !== id);
        localStorage.setItem("items", JSON.stringify(resetProducts));
        setProduct(resetProducts);
    };
    return (
        <>
            {product ? (
                <div style={{ padding: "40px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sản Phẩm</TableCell>
                                    <TableCell align="right">Giá</TableCell>
                                    <TableCell align="right">
                                        Số Lượng
                                    </TableCell>
                                    <TableCell align="right">
                                        Tổng Tiền
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {product.map((row: any) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.count}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.count * row.price}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                onClick={() => {
                                                    deleteHandler(row.id);
                                                }}
                                            >
                                                <CloseIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Button
                        sx={{
                            margin: "0 auto",
                            display: "flex",
                            marginTop: "12px",
                            width: "250px",
                        }}
                        onClick={paymentHandle}
                    >
                        Thanh Toán
                    </Button>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Cart;
