import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonDelete from '../../components/button_delete'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../components/loading'
import axios from 'axios'
import Alert from '../../components/alert_error';
import DialogEditProduct from '../dialog_edit_product'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function SimpleTable(props) {
    const classes = useStyles();
    let products = useSelector(state => state.product)
    const checkGetData = useSelector(state => state.checkGetProduct)
    const dispatch = useDispatch()
    let productsToShow = products
    if (props.selectedCategory) {
        productsToShow = products.filter(product => {
            return product.category === props.selectedCategory
        })
    }

    if (props.search) {
        productsToShow = productsToShow.filter(product => {
            return product.name.toLowerCase().indexOf(props.search.toLowerCase()) > -1
        })
    }

    function deleteProduct(id, name) {
        return () => {
            if (window.confirm(`Bạn có chắc chắn muốn xóa ${name} không ?`)) {
                axios({
                    method: "DELETE",
                    url: "/api/product/" + id,
                    headers: {
                        "Authorization": window.localStorage.getItem("token")
                    }
                }).then(res => {
                    dispatch({ type: "DELETE_PRODUCT_AT_PRODUCT", data: res.data._id })
                    dispatch({ type: "DELETE_PRODUCT", data: res.data })
                })
            }
        }
    }
    if (!checkGetData) {
        return <div className="flex"><Loading /></div>
    }
    return (
        <div>
            { productsToShow.length > 0 ?
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Stt</TableCell>
                                <TableCell align="left">Tên sản phẩm</TableCell>
                                <TableCell align="left">Ảnh</TableCell>
                                <TableCell align="left">Giá</TableCell>
                                <TableCell align="left">Sửa</TableCell>
                                <TableCell align="left">Xóa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productsToShow.map((product, key) => (
                                <TableRow key={key}>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell align="left" component="th" scope="row">
                                        {product.name}
                                    </TableCell>
                                    <TableCell align="left"><img alt="img" src={product.img[0]} height="100px" /></TableCell>
                                    <TableCell align="left">{product.price}</TableCell>
                                    <TableCell align="left"><DialogEditProduct product={product} /></TableCell>
                                    <TableCell align="left"><ButtonDelete onClick={deleteProduct(product._id, product.name)} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <div><Alert content={"Không tìm thấy sản phẩm!"} /></div>}
        </div>
    );
}