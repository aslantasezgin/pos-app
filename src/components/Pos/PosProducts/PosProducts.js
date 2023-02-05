
import DataTable from 'react-data-table-component';
import './PosProducts.css'

const PosProducts = () => {



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
            selector: row => row.productName,
            sortable:true
        },
      
        {
            name:'PRICE',
            selector: row => row.productPrice,
            sortable:true
        },
        {
            name:'QTY',
            selector: row => row.qty,
            sortable:true
        },

        {
            name:'',
            selector: row => row.action,
            sortable:true
        },


    ];


    const Data = [
        {
            id:1,
            productName:"Limonata",
            productPrice:10,
            qty:1,
            action:<span className='pos-action' ><i class="fa-solid fa-trash"></i></span>
        },
        {
            id:2,
            productName:"Pizza",
            productPrice:80,
            qty:1,
            action:<span className='pos-action'><i class="fa-solid fa-trash"></i></span>

        },
        {
            id:2,
            productName:"Pizza",
            productPrice:80,
            qty:1,
            action:<span className='pos-action'><i class="fa-solid fa-trash"></i></span>

        },
        {
            id:2,
            productName:"Pizza",
            productPrice:80,
            qty:1,
            action:<span className='pos-action'><i class="fa-solid fa-trash"></i></span>

        },
        
    ]

    return(
        <div className="pos-products">
                   <DataTable    columns={columns} data={Data} customStyles={customStyles} />

        </div>
    )
}

export default PosProducts