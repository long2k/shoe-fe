import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Transaction } from "@near/types";
import style from "@css/components/DataTable.module.css";
import { TX_STATUS } from "@near/constants";
function Row(props: { row: ReturnType<() => Transaction> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="center">{row.totalPrice}</TableCell>
                <TableCell align="center">
                    {
                        Object.keys(TX_STATUS)[
                            Object.values(TX_STATUS).indexOf(row.status)
                        ]
                    }
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Items
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">
                                            Product ID
                                        </TableCell>
                                        <TableCell align="center">
                                            Quantity
                                        </TableCell>
                                        <TableCell align="center">
                                            Unit price
                                        </TableCell>
                                        <TableCell align="center">
                                            Price
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell
                                                align="center"
                                                component="th"
                                                scope="row"
                                            >
                                                {item.id}
                                            </TableCell>
                                            <TableCell align="center">
                                                {item.data.quantity}
                                            </TableCell>
                                            <TableCell align="center">
                                                {item.data.unitPrice}
                                            </TableCell>
                                            <TableCell align="center">
                                                {Math.round(
                                                    Number(
                                                        item.data.unitPrice
                                                    ) *
                                                        Number(
                                                            item.data.quantity
                                                        ) *
                                                        100
                                                ) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center">
                                            Shipping price:
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.shippingPrice}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center">
                                            Total price:
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.totalPrice}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function DataTable(data: { transactions: Transaction[] }) {
    return (
        <TableContainer className={style.table} component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="center">Transaction ID</TableCell>
                        <TableCell align="center">Total Price</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.transactions.map((row, index) => (
                        <Row key={index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
