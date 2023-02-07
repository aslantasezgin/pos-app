import { posState } from "../state/posState";
import { ADD_BASKET,DELETE_BASKET} from "../actionTypes/basketActionTypes";



function basketReducer(state = posState,action){
    switch(action.type){
    
        case ADD_BASKET:
      return {...state,basketList:[...state.basketList,action.payload]}

        

     

    case DELETE_BASKET:
    return{...state,basketList:state.basketList.filter((item) => item.id !==action.payload)}

    
    default:
    return state
    }
}

export default basketReducer