import { deleteCategory } from "../../../store/actions/productCategoryActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'


const CategoryTableActions = (props) => {

    const dispatch = useDispatch()
    const notify = () => toast.success("Success");

    return(
        <div className="table-actions">
         <span onClick={() => {
            notify()
            dispatch(deleteCategory(props.categoryId))
         }} className='table-delete'><i class="fa-solid fa-trash"></i></span>   
        </div>
        )
    
}

export default CategoryTableActions