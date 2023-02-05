import { useRoutes } from "react-router-dom"
import HomeView from "../view/HomeView/HomeView"
import OrdersView from "../view/OrdersView/OrdersView"
import CreateProductView from "../view/ProductsView/CreateProductView.js/CreateProductView"
import SetProductView from "../view/ProductsView/SetProductView/SetProductView"

import ProductCategoriesView from "../view/ProductsView/ProductCategoriesView/ProductCategoriesView"
import ProductsView from "../view/ProductsView/ProductsView"
import UsersView from "../view/UsersView/UsersView"
import PosView from "../view/PosView/PosView"




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
path:'setProduct/:id',
element:<SetProductView></SetProductView>
},
{
path:'productCategories',
element:<ProductCategoriesView/>
},

]
},
{
path:'pos',
element:<PosView></PosView>
}




])

return routes

}

export default Router