import { useRoutes } from "react-router-dom"
import HomeView from "../view/HomeView/HomeView"




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
path:'/products',
element:'',

children:[
{
path:'createProduct',
element:''
},
{
path:'productCategories',
element:''
},
{
path:'createProductCategories',
element:''
},
]

},


{
path:'/orders',
element:''
},
{
path:'/users',
element:''
}

])

return routes

}

export default Router