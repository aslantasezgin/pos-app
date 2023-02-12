import { ADD_ORDER } from "../actionTypes/orderActionTypes";
import { posState } from "../state/posState";


function orderReducer(state = posState,action){
    switch(action.type){
        case ADD_ORDER:
        return {...state,orderList:[...state.orderList,action.payload]}

    
    default:
    return state

    }
}

export default orderReducer
