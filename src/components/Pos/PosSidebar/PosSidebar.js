import PosBasket from '../PosBasket/PosBasket'
import PosBottom from '../PosBottom/PosBottom'
import PosProducts from '../PosProducts/PosProducts'
import './PosSidebar.css'


const PosSidebar=() =>{



    return(
        <div className="pos-side">
        <PosBasket></PosBasket>
        <PosBottom></PosBottom>

        </div>
    )
}

export default PosSidebar