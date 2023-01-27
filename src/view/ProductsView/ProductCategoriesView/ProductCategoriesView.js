import MainBottomArea from "../../../components/Global/MainBottomArea/MainBottomArea"
import MainTopArea from "../../../components/Global/MainTopArea/MainTopArea"
import AddCategories from "../../../components/ProductCategories/AddCategories/AddCategories"
import ProductCategories from "../../../components/ProductCategories/ProductCategories"

import MainLayout from "../../../layouts/MainLayout/MainLayout"


const ProductCategoriesView = () => {
    
    return(
       
        <MainLayout>
        <MainTopArea>
       

       <AddCategories></AddCategories>
        </MainTopArea>

        <MainBottomArea>

        <ProductCategories></ProductCategories>
        
        </MainBottomArea>
      </MainLayout>
    )
}

export default ProductCategoriesView