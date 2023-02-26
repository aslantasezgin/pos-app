import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import './PosBasket.css'
import { ToastContainer, toast } from 'react-toastify';

const PosBasket = () => {
    
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
            selector: row => row.name,
            sortable:true
        },
      
        {
            name:'PRICE',
            selector: row => row.price,
            sortable:true
        },
        {
            name:'QTY',
            selector: row => row.amount,
            sortable:true
        },

        {
            name:'',
            selector: row => row.action,
            sortable:true
        },


    ];


    const {basketList} = useSelector(state => state.basket)
    console.log(basketList)

    const [data, setData] = useState([])

    useEffect(() => {
    setData(basketList)
    }, [basketList])
 

    return(
        <div className="pos-products">
                   <DataTable    columns={columns} data={data} customStyles={customStyles} />
                   <ToastContainer></ToastContainer>
        </div>
    )
}

export default PosBasket