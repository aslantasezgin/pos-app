
import TableActions from '../Global/TableActions/TableActions';
import './Products.css'
import DataTable from 'react-data-table-component';


const Products = () => {

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
    
    const data = [
        {
            id: 1,
            product:<img className='data-img' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></img>,
            productName:'Pizza',
            productCode: <span className='product-code'>300</span>,
            productPrice: '100',
            productCategory: 'Categorie 2',
            productCount: '1988',
            action: <TableActions></TableActions>
        },
        {
            id: 2,
            product:<img className='data-img' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></img>,
            productName:'Pizza',
            productCode: <span className='product-code'>300</span>,
            productPrice: '100',
            productCategory: 'Categorie 2',
            productCount: '1988',
            action: <TableActions></TableActions>
        },
        {
            id: 3,
            product:<img className='data-img' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></img>,
            productName:'Pizza',
            productCode: <span className='product-code'>300</span>,
            productPrice: '100',
            productCategory: 'Categorie 2',
            productCount: '1988',
            action: <TableActions></TableActions>
        },
        {
            id: 4,
            product:<img className='data-img' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></img>,
            productName:'Pizza',
            productCode: <span className='product-code'>300</span>,
            productPrice: '100',
            productCategory: 'Categorie 2',
            productCount: '1988',
            action: <TableActions></TableActions>
        },
        {
            id: 5,
            product:<img className='data-img' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></img>,
            productName:'Pizza',
            productCode: <span className='product-code'>300</span>,
            productPrice: '100',
            productCategory: 'Categorie 2',
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



export default Products