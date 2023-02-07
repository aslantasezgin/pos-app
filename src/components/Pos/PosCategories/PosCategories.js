
import { useSelector } from 'react-redux'
import './PosCategories.css'


const PosCategories = ({changeProductItem}) => {

    const {categoryList} = useSelector(state => state.productCategory)
    console.log(categoryList)
    return(
        <div className='pos-categories'>
        <ul>

        {categoryList.map((item) => {
           return (<li> {item.productCategoryName} </li>) 
        })}

      
        </ul>
        </div>
    )
}

export default PosCategories