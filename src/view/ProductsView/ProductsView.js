

import { NavLink } from "react-router-dom"
import MainBottomArea from "../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../components/Global/MainTopArea/MainTopArea"
import Products from "../../components/Products/Products"
import MainLayout from "../../layouts/MainLayout/MainLayout"



const ProductsView = () => {
    return(
        <MainLayout>
            <MainTopArea>
          <NavLink to="/products/productCategories">  <button  className="main-button" style={{ padding:" 13px 17px", fontSize:"15px", color:"#FFF", border:"0px", 
        borderRadius:"8px", cursor:"pointer"
    }} >Create Product</button> </NavLink>

            </MainTopArea>

            <MainBottomArea>
                <Products></Products>
            </MainBottomArea>
        </MainLayout>
    )
}

export default ProductsView