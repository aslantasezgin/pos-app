import { useProSidebar } from 'react-pro-sidebar';
import Header from '../../components/Global/Header/Header';
import SideArea from '../../components/Global/SideArea/SideArea';

import './MainLayout.css'



const MainLayout = (props) => {

    const {collapseSidebar} = useProSidebar();

return(
   <div className="main-wrapper">
    

    <SideArea></SideArea>
 
    <div className="main-right-area">

    <div className="main-header">
    <Header></Header>
    </div>

    <div className="main-content">
    {props.children}
   
    </div>


    </div>




    </div>
)
}

export default MainLayout