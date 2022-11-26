
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button'
import Loading from '../common/components/Loading'

const cart = () => {
  let data = JSON.parse(localStorage?.getItem('items'))
  const [product, setProduct] = React.useState([])
  React.useEffect(() => {
   
      setProduct(data)
  
  }, [])
  const paymentHandle = () => {
    console.log("ok")
  }
  const deleteHandler = (id: String) => {
    let resetProducts = product?.filter(e => e._id !== id)
    localStorage.setItem('items', JSON.stringify(resetProducts))
    setProduct(data)
  }
  return (
    <>
      {
        product ? (
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sản Phẩm</TableCell>
                    <TableCell align="right">Giá</TableCell>
                    <TableCell align="right">Số Lượng</TableCell>
                    <TableCell align="right">Tổng</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product.map((row: any) => (
                    <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.count}</TableCell>
                      <TableCell align="right">{row.count * row.price}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => { deleteHandler(row._id) }}>
                          <CloseIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={paymentHandle}>Thanh Toán</Button>
          </div>
        ) : <Loading />

      }
    </>

  );
}

export default cart