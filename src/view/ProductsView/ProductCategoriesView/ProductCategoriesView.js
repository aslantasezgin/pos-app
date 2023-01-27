import MainBottomArea from "../../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../../components/Global/MainTopArea/MainTopArea"
import ProductCategories from "../../../components/ProductCategories/ProductCategories"

import MainLayout from "../../../layouts/MainLayout/MainLayout"


const ProductCategoriesView = () => {
    return(
       
        <MainLayout>
        <MainTopArea>
        <button className="main-button" style={{ padding:" 13px 17px", fontSize:"15px", color:"#FFF", border:"0px", 
        borderRadius:"8px", cursor:"pointer"
    }} >Create Product Category</button>
        </MainTopArea>

        <MainBottomArea>

        <ProductCategories></ProductCategories>
        
        </MainBottomArea>
      </MainLayout>
    )
}

export default ProductCategoriesView