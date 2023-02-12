import CategoryTableActions from "../../components/Global/TableActions/CategoryTableActions";
import TableActions from "../../components/Global/TableActions/TableActions";





export const posState = {
        productList:[],
        categoryList:[
        {
          id:1,
          productCategoryName:"Drinks",
          action:<CategoryTableActions categoryId="1"></CategoryTableActions>     
        },
        {
          id:2,
          productCategoryName:"Foods",
          action:<CategoryTableActions categoryId="2"></CategoryTableActions>     
   
        },
        ],
        orderList:[],
        Users:[],
        basketList:[]
}