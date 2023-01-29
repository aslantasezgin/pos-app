
import TableActions from '../Global/TableActions/TableActions';
import DataTable from 'react-data-table-component';
import './Orders.css'

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
            name: 'ORDER',
            selector: row => row.order,
            sortable:true
        },
        {
            name: 'NAME',
            selector: row => row.orderProductName,
            sortable:true
        },

        {
            name:'CODE',
            selector: row => row.orderProductCode,
            sortable:true
        },
        {
            name:'PRICE',
            selector: row => row.orderProductPrice,
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
            order:<img className='data-img' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>,
            orderProductName:'Pizza',
            orderProductCode: <span className='product-code'>300</span>,
            orderProductPrice: '100',
            action: <TableActions></TableActions>
        },

        {
            id: 2,
            order:<img className='data-img' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>,
            orderProductName:'Pizza',
            orderProductCode: <span className='product-code'>300</span>,
            orderProductPrice: '100',
            action: <TableActions></TableActions>
        },

        {
            id: 3,
            order:<img className='data-img' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>,
            orderProductName:'Pizza',
            orderProductCode: <span className='product-code'>300</span>,
            orderProductPrice: '100',
            action: <TableActions></TableActions>
        },


        {
            id: 4,
            order:<img className='data-img' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>,
            orderProductName:'Pizza',
            orderProductCode: <span className='product-code'>300</span>,
            orderProductPrice: '100',
            action: <TableActions></TableActions>
        },


        {
            id: 5,
            order:<img className='data-img' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>,
            orderProductName:'Pizza',
            orderProductCode: <span className='product-code'>300</span>,
            orderProductPrice: '100',
            action: <TableActions></TableActions>
        },
    
    ]

   return(
    <div>

                           <DataTable    columns={columns} data={data} customStyles={customStyles} />

    </div>
   ) 
}

export default Orders