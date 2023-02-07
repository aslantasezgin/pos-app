
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, deleteBasket } from '../../../store/actions/basketActions'
import './PosProducts.css'
import bip from "./barcode.mp3"

const PosProducts = ({productItem}) => {


    const {productList} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const [productData,setProductData] = useState([])

    useEffect(() => {
    setProductData(productList)
    }, [productList])

    const {basketList} = useSelector(state => state.basket)
    console.log(basketList)

    const [count,setCount] = useState(0)
    const audio = new Audio(bip)
    return(
        <>
        {productData.map((item) => {
            if(productItem == item.productCategory){
                return(
                    <div onClick={() => {
                    dispatch(addBasket({id:count,name:item.productName,price:item.productPrice,amount:1,action:<span onClick={() => {dispatch(deleteBasket(count))}} className='pos-action' ><i class="fa-solid fa-trash"></i></span>}))
                    audio.play()
                    setCount(count + 1)
                   }}  key={item.id} className='pos-product'>
                    <span className='p-price'>$ {item.productPrice}</span>
                    <img src={item.product.props.src} alt={item.productName}></img>
                    <span className='p-name'>{item.productName} </span>
                    
                   </div> 
                )   
            } else if(productItem == "all"){
                return(
                    <div onClick={() => {
                    dispatch(addBasket({id:count,name:item.productName,price:item.productPrice,amount:1,action:<span onClick={() => {dispatch(deleteBasket(count))}} className='pos-action' ><i class="fa-solid fa-trash"></i></span>}))
                    audio.play()
                    setCount(count + 1)
                   }}  key={item.id} className='pos-product'>
                    <span className='p-price'>$ {item.productPrice}</span>
                    <img src={item.product.props.src} alt={item.productName}></img>
                    <span className='p-name'>{item.productName} </span>
                    
                   </div> 
                )  
            }

              
        })}
        
        </>
   )


}

export default PosProducts