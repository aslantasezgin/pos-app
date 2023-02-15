
import TableActions from '../Global/TableActions/TableActions';
import DataTable from 'react-data-table-component';
import './Orders.css'
import { useSelector } from 'react-redux';

const Orders = () => {

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
            name: 'PERSONAL NAME',
            selector: row => row.personalName,
            sortable:true
        },

        {
            name:'AMOUNT',
            selector: row => row.totalAmount,
            sortable:true
        },
        {
            name:'PRICE',
            selector: row => row.total,
            sortable:true
        },
        {
            name: 'ACTION',
            selector: row => row.action,
            sortable:true
        },
    ];
    
    const {orderList} = useSelector(state => state.order)

   return(
    <div>

                           <DataTable    columns={columns} data={orderList} customStyles={customStyles} />

    </div>
   ) 
}

export default Orders