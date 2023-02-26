
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './OrderDetail.css'


const OrderDetail = () => {

    const {id} = useParams()
    console.log(id)
    const {orderList} = useSelector(state => state.order)
    console.log(orderList)
    const data = orderList.filter(item => item.id === id)
    console.log(data)
    


    

return(
    <div className="order-detail">
        <ul>
            {data.map((item) => {
            return(
                <li key={item.id}> {item.personalName} </li>
            )  
            })}

    
        </ul>

        <p>Total Amount:{orderList.total} </p>
        <p>Total:</p>
    </div>
)
}


export default OrderDetail