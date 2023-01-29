
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import './SideArea.css'

const SideArea = () => {

    const LOGO = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Logo_Blue_on_Transparent.png"

return(

 <Sidebar collapsedWidth="65px" className='side-bar' style={{ display: 'flex', flexDirection: 'column', height: '100vh'} } >

    <div className='logo-box'>
    <NavLink to="/home"> <img  src={LOGO}></img> </NavLink>
    </div>

  <Menu>
  <MenuItem className='menu-item' component={<NavLink to="/home"></NavLink>}> <span><i class="fa-solid fa-house-user"></i></span>Home </MenuItem>
    <SubMenu className='sub-menu menu-item' icon={<span><i class="fa-solid fa-box"></i> </span>} label="Products">
      <MenuItem className='menu-item' component={<NavLink to="/products"></NavLink>} ><span><i class="fa-solid fa-box"></i></span>All Products </MenuItem>
      <MenuItem className='menu-item' component={<NavLink to="/products/productCategories"></NavLink>}><span><i class="fa-solid fa-boxes-stacked"></i></span>Product Categories </MenuItem>
    </SubMenu>
    <MenuItem className='menu-item' component={<NavLink to="/orders"></NavLink>}><span><i class="fa-solid fa-basket-shopping"></i></span>Orders </MenuItem>
    <MenuItem className='menu-item' component={<NavLink to="/users"></NavLink>}><span><i class="fa-solid fa-users"></i></span>Users </MenuItem>

  
  </Menu>
</Sidebar>




)
}

export default SideArea