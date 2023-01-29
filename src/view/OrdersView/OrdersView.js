import MainLayout from "../../layouts/MainLayout/MainLayout"
import MainBottomArea from "../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../components/Global/MainTopArea/MainTopArea"
import Orders from "../../components/Orders/Orders"


const OrdersView = () => {
    return(
  <MainLayout>
  
   <MainTopArea>
 <button  className="main-button" style={{ padding:" 13px 17px", fontSize:"15px", color:"#FFF", border:"0px", 
        borderRadius:"8px", cursor:"pointer"
    }} >Orders</button> 
   </MainTopArea>

   <MainBottomArea>
    <Orders></Orders>
   </MainBottomArea>

  </MainLayout>  
  )
}

export default OrdersView