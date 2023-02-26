import { posState } from "../state/posState";
import { ADD_BASKET,DELETE_BASKET, RESET_BASKET} from "../actionTypes/basketActionTypes";



function basketReducer(state = posState,action){
    switch(action.type){
    
        case ADD_BASKET:
      return {...state,basketList:[...state.basketList,action.payload]}

    case DELETE_BASKET:
    return{...state,basketList:state.basketList.filter((item) => item.id !==action.payload)}

    case RESET_BASKET:
    return{
      ...state,basketList: []
    }
    
    default:
    return state
    }
}

export default basketReducer