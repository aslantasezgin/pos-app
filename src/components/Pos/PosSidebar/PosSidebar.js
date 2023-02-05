import PosBottom from '../PosBottom/PosBottom'
import PosProducts from '../PosProducts/PosProducts'
import './PosSidebar.css'


const PosSidebar=() =>{



    return(
        <div className="pos-side">
        <PosProducts></PosProducts>
        <PosBottom></PosBottom>

        </div>
    )
}

export default PosSidebar