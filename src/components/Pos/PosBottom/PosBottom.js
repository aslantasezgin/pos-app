import './PosBottom.css'

const PosBottom = () => {
    return(
        <div className="pos-bottom">
           <ul>
            <li>Total QTY:  <b>3</b></li>
            <li>Total: <b>$ 332.00</b></li>
           </ul>

         <div className="pos-buttons">
        <button className="pos-reset">Reset <span><i class="fa-solid fa-rotate-left"></i></span></button>    
        <button className="pos-pay">Pay Now <span><i class="fa-solid fa-money-bill-wave"></i></span></button>
        </div>  
        </div>
    )
}

export default PosBottom