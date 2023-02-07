
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket } from '../../../store/actions/basketActions'
import './PosProducts.css'

const PosProducts = () => {

    const {productList} = useSelector(state => state.product)
    console.log(productList)
    const dispatch = useDispatch()

    const [productData,setProductData] = useState([])

    useEffect(() => {
    setProductData(productList)
    }, [productList])

    const {basketList} = useSelector(state => state.basket)
    console.log(basketList)

    return(
        <>
        {productData.map((item) => {
              return(
                <div onClick={() => {
                
                dispatch(addBasket({id:item.id,name:item.productName,price:item.productPrice,amount:1,action:<span className='pos-action' ><i class="fa-solid fa-trash"></i></span>}))

                }}  key={item.id} className='pos-product'>
                <span className='p-price'>$ {item.productPrice}</span>
                <img src={item.product.props.src} alt={item.productName}></img>
                <span className='p-name'>{item.productName} </span>
                
               </div> 
            )  
        })}
        
        </>
   )


}

export default PosProducts