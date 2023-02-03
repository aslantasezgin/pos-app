

import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../store/actions/productActions'
import './TableActions.css'


const TableActions = ({productId}) => {
    const dispatch = useDispatch()

    return(
    <div className="table-actions">
     <span className='table-edit'><i class="fa-solid fa-pen-to-square"></i></span>
     <span onClick={() => {
        dispatch(deleteProduct(productId))
     }} className='table-delete'><i class="fa-solid fa-trash"></i></span>   
    </div>
    )
}

export default TableActions