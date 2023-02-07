import { NavLink } from 'react-router-dom'
import './PosHeader.css'

const PosHeader = () => {
return(
    <div className="pos-header">
    <ul>
    <li><NavLink to="/">  <i class="fa-solid fa-house"></i> </NavLink></li>
    </ul>
    </div>
)

}

export default PosHeader