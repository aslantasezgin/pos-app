import PosSidebar from "../../components/Pos/PosSidebar/PosSidebar"
import './PosLayout.css'


const PosLayout = (props) => {
    return(
    <div className="pos-wrapper">

  
    <PosSidebar></PosSidebar>    


    <div className="pos-content-wrapper">
    <div className="pos-header"></div>

    <div className="pos-content">
    {props.children} 
    </div>
      
    </div>



    </div>
)

}

export default PosLayout