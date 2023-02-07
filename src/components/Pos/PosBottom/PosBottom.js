import { useSelector } from 'react-redux'
import './PosBottom.css'

const PosBottom = () => {

    const {basketList} = useSelector(state => state.basket)
    let total = basketList.reduce(function(prev,current) {
        return prev + +current.price
    }, 0)
    let totalAmount = basketList.reduce(function(prev,current) {
        return prev + +current.amount
    }, 0)

    return(
        <div className="pos-bottom">
           <ul>
            <li>Total QTY:  <b> {totalAmount} </b></li>
            <li>Total: <b>$ {total}</b></li>
           </ul>

         <div className="pos-buttons">
        <button className="pos-reset">Reset <span><i class="fa-solid fa-rotate-left"></i></span></button>    
        <button className="pos-pay">Pay Now <span><i class="fa-solid fa-money-bill-wave"></i></span></button>
        </div>  
        </div>
    )
}

export default PosBottom