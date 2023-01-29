
import { NavLink } from "react-router-dom"

import MainBottomArea from "../../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../../components/Global/MainTopArea/MainTopArea"
import CreateProduct from "../../../components/Products/CreateProduct/CreateProduct"
import MainLayout from "../../../layouts/MainLayout/MainLayout"



const CreateProductView = () => {
    return(
        <MainLayout>
            <MainTopArea>
            <NavLink to="/products">  <button  className="main-button" style={{ padding:" 13px 17px", fontSize:"15px", color:"#FFF", border:"0px", 
        borderRadius:"8px", cursor:"pointer"
    }} >Back</button> </NavLink>
            </MainTopArea>

            <MainBottomArea>

            <CreateProduct></CreateProduct>

            </MainBottomArea>
        </MainLayout>
    )
}

export default CreateProductView