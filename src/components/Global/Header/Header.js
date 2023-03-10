import { useProSidebar } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const {collapseSidebar} = useProSidebar();

return(

<div className="header">
<div className="collapse-btn">
<span onClick={() => {
        collapseSidebar()
    }} ><i class="fa-solid fa-bars"></i></span>
</div>

<div className="user-info">
<ul>
<li><NavLink to="/pos"> <span><i class="fa-solid fa-cart-plus"></i></span> POS</NavLink></li>
<li><span><i class="fa-regular fa-user"></i></span> Sezgin Aslantaş</li>
</ul>
</div>
</div>


)
}

export default Header