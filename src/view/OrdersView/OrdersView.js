import MainLayout from "../../layouts/MainLayout/MainLayout"
import MainBottomArea from "../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../components/Global/MainTopArea/MainTopArea"
import Orders from "../../components/Orders/Orders"


const OrdersView = () => {
    return(
  <MainLayout>
  


   <MainBottomArea>
    <Orders></Orders>
   </MainBottomArea>

  </MainLayout>  
  )
}

export default OrdersView