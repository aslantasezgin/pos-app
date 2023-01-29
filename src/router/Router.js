import { useRoutes } from "react-router-dom"
import HomeView from "../view/HomeView/HomeView"
import OrdersView from "../view/OrdersView/OrdersView"
import CreateProductView from "../view/ProductsView/CreateProductView.js/CreateProductView"
import ProductCategoriesView from "../view/ProductsView/ProductCategoriesView/ProductCategoriesView"
import ProductsView from "../view/ProductsView/ProductsView"
import UsersView from "../view/UsersView/UsersView"




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
    element:<UsersView></UsersView>
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
element:<CreateProductView></CreateProductView>
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