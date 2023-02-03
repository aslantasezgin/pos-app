
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../../store/actions/productActions'
import './TableActions.css'
import { NavLink } from 'react-router-dom';


const TableActions = ({productId}) => {
    const dispatch = useDispatch()
    const notify = () => toast.success("Success");

    return(
    <div className="table-actions">
    <NavLink to={`setProduct/${productId}`}><span className='table-edit'><i class="fa-solid fa-pen-to-square"></i></span></NavLink> 
     <span onClick={() => {
        notify()
        dispatch(deleteProduct(productId))
     }} className='table-delete'><i class="fa-solid fa-trash"></i></span>   
    </div>
    )
}

export default TableActions