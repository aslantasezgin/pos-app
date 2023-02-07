import PosHeader from "../../components/Pos/PosHeader/PosHeader"
import PosSidebar from "../../components/Pos/PosSidebar/PosSidebar"
import './PosLayout.css'


const PosLayout = (props) => {
    return(
    <div className="pos-wrapper">

  
    <PosSidebar></PosSidebar>    


    <div className="pos-content-wrapper">
  
    <PosHeader></PosHeader>

    <div className="pos-content">
    {props.children} 
    </div>
      
    </div>



    </div>
)

}

export default PosLayout