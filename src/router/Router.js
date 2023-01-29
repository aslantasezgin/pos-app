import { useRoutes } from "react-router-dom"
import HomeView from "../view/HomeView/HomeView"
import OrdersView from "../view/OrdersView/OrdersView"
import ProductCategoriesView from "../view/ProductsView/ProductCategoriesView/ProductCategoriesView"
import ProductsView from "../view/ProductsView/ProductsView"




const Router = () => {

const routes= useRoutes([
{
path:'/',
element:<HomeView></HomeView>
},

{
path:'/home',
element:<HomeView></HomeView>
},

{
    path:'/orders',
    element:<OrdersView></OrdersView>
    },
    {
    path:'/users',
    element:''
    },

{
path:'/products',
children:[
{
path:'/products',
element:<ProductsView></ProductsView>    
},
{
path:'createProduct',
element:''
},
{
path:'productCategories',
element:<ProductCategoriesView/>
},
{
path:'createProductCategories',
element:''
},
]

}


])

return routes

}

export default Router