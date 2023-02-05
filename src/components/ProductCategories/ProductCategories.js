
import TableActions from '../Global/TableActions/TableActions';
import './ProductCategories.css'
import DataTable from 'react-data-table-component';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';



const ProductCategories = (props) => {


    const {categoryList} = useSelector(state => state.productCategory)
    console.log(categoryList)
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
    setCategoryData(categoryList)
    }, [categoryList])


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
            name: 'PRODUCT CATEGORY',
            selector: row => row.productCategoryName,
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
       <DataTable    columns={columns} data={categoryData} customStyles={customStyles} />
      <ToastContainer/>
    </div>

)
}

export default ProductCategories