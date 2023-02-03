
import TableActions from '../Global/TableActions/TableActions';
import './Products.css'
import DataTable from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Products = () => {


    const {productList} = useSelector(state => state.product)
    console.log(productList)
    const [productData, setProductData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
    setProductData(productList)   
    },[productList] )

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
                fontSize:'15px',
                
              
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                fontSize:"14px",
                color:'#6C77A1',
    
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    
    const columns = [
        {
            name: 'PRODUCT',
            selector: row => row.product,
            sortable:true
        },
        {
            name: 'NAME',
            selector: row => row.productName,
            sortable:true
        },
        {
            name:'CODE',
            selector: row => row.productCode,
            sortable:true
        },
        {
            name:'PRICE',
            selector: row => row.productPrice,
            sortable:true
        },
        {
            name:'CATEGORIES',
            selector: row => row.productCategory,
            sortable:true
        },
        {
            name: 'ACTION',
            selector: row => row.action,
            sortable:true
        },
    ];



    return(
        <div>
                   <DataTable    columns={columns} data={productData} customStyles={customStyles} />
                <ToastContainer></ToastContainer>
        </div>
    )

}



export default Products