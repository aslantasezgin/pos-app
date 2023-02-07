
import { useState } from 'react'
import PosCategories from '../PosCategories/PosCategories'
import PosProducts from '../PosProducts/PosProducts'
import './PosContent.css'



const PosContent = () => {

    const [productItem, setProductItem] =useState('All')
    const changeProductItem = (name) => {
        setProductItem(name)
    }

    return(
        <>
        <div className='pos-categories'>
            <PosCategories changeProductItem={changeProductItem}></PosCategories>
        </div>

        <div className='posproducts'>
        <PosProducts></PosProducts>
        </div>
        </>

    )
}

export default PosContent