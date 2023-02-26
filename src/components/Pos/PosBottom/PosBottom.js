import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetBasket } from '../../../store/actions/basketActions'
import { addOrder } from '../../../store/actions/orderActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PosBottom.css'
import { NavLink } from 'react-router-dom';

const PosBottom = () => {

    const notify = () => toast.success("Order Created");


    const dispatch = useDispatch()
    const {orderList} = useSelector(state => state.order)
    const {basketList} = useSelector(state => state.basket)
    const [orderId, setOrderId] = useState(0)
    let total = basketList.reduce(function(prev,current) {
        return prev + +current.price
    }, 0)
    let totalAmount = basketList.reduce(function(prev,current) {
        return prev + +current.amount
    }, 0)

    const[personalName,setPersonalName] = useState("Sezgin Aslantaş")

    return(
        <div className="pos-bottom">
           <ul>
            <li><input type="text" onChange={(e) => {
            setPersonalName(e.target.value)
            }} placeholder="Enter Personal Name" defaultValue={personalName}></input></li>
            <li>Total QTY:  <b> {totalAmount} </b></li>
            <li>Total: <b>$ {total}</b></li>
           </ul>

         <div className="pos-buttons">
        <button className="pos-pay" onClick={() => {
        const id = orderId + 1;
        setOrderId(id)
        dispatch(addOrder({id:id,createdOrder:basketList,totalAmount:totalAmount,personalName:personalName,total:total}))
        notify()
        dispatch(resetBasket())
        console.log(orderList)
        }}>Pay Now <span><i class="fa-solid fa-money-bill-wave"></i></span></button>
        <button className='pos-reset' onClick={() => {
            dispatch(resetBasket())
        }}>Reset</button>
        </div>  
        </div>
    )
}

export default PosBottom