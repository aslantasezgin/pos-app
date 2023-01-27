
import TableActions from '../Global/TableActions/TableActions';
import './ProductCategories.css'
import DataTable from 'react-data-table-component';
import { useMemo } from 'react';



const ProductCategories = (props) => {




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
            selector: row => row.productCategory,
            sortable:true
        },
        {
            name: 'PRODUCT COUNT',
            selector: row => row.productCount,
            sortable:true
        },
        {
            name: 'ACTION',
            selector: row => row.action,
            sortable:true
        },
    ];
    
    const data = [
        {
            id: 1,
            productCategory: 'Beetlejuice',
            productCount: '1988',
            action: <TableActions></TableActions>
        },
        {
            id: 2,
            productCategory: 'aeetlejuice',
            productCount: '1988',
            action: <TableActions></TableActions>


        },
    ]
    


return(
  
    
    <div>
       <DataTable    columns={columns} data={data} customStyles={customStyles} />
    </div>

)
}

export default ProductCategories