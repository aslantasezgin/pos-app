
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import './PosCategories.css'


const PosCategories = ({changeProductItem}) => {

    const {categoryList} = useSelector(state => state.productCategory)
    const [active, setActive] = useState('all')

    useEffect(() => {
    changeProductItem(active)
    console.log(active)
    }, [active])

    return(
        <div className='pos-categories'>
        <ul>

        <li className={active === "all" && "active"} onClick={() => {setActive('all')}}>All</li>
        {categoryList.map((item) => {
           return (<li className={active === item.productCategoryName && "active"} onClick={() => setActive(item.productCategoryName)}  key={item.productCategoryName} > {item.productCategoryName} </li>) 
        })}

      
        </ul>
        </div>
    )
}

export default PosCategories