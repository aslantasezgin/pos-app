import TableActions from '../Global/TableActions/TableActions';
import DataTable from 'react-data-table-component';



const Users = () => {




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
            name: 'NAME',
            selector: row => row.userName,
            sortable:true
        },

        {
            name:'USERNAME',
            selector: row => row.userUserName,
            sortable:true
        },
        {
            name:'EMAIL',
            selector: row => row.userEmail,
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
            userName:'Sezgin',
            userUserName: <span className='product-code'>aslantasezgin</span>,
            userEmail: 'aslantasezginn@gmail.com',
            action: <TableActions></TableActions>
        },

        {
            id: 1,
            userName:'Sezgin',
            userUserName: <span className='product-code'>aslantasezgin</span>,
            userEmail: 'aslantasezginn@gmail.com',
            action: <TableActions></TableActions>
        },

        {
            id: 1,
            userName:'Sezgin',
            userUserName: <span className='product-code'>aslantasezgin</span>,
            userEmail: 'aslantasezginn@gmail.com',
            action: <TableActions></TableActions>
        },


        {
            id: 1,
            userName:'Sezgin',
            userUserName: <span className='product-code'>aslantasezgin</span>,
            userEmail: 'aslantasezginn@gmail.com',
            action: <TableActions></TableActions>
        },


        {
            id: 1,
            userName:'Sezgin',
            userUserName: <span className='product-code'>aslantasezgin</span>,
            userEmail: 'aslantasezginn@gmail.com',
            action: <TableActions></TableActions>
        },

        {
            id: 1,
            userName:'Sezgin',
            userUserName: <span className='product-code'>aslantasezgin</span>,
            userEmail: 'aslantasezginn@gmail.com',
            action: <TableActions></TableActions>
        },

    
    ]

   return(
    <div>

                           <DataTable    columns={columns} data={data} customStyles={customStyles} />

    </div>
   ) 
}


export default Users