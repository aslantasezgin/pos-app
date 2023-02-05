import { posState } from "../state/posState";
import {ADD_CATEGORY, DELETE_CATEGORY, SET_CATEGORY} from "../actionTypes/productCategoryActionTypes"



function productCategoryReducer(state = posState,action){
switch(action.type){

    case ADD_CATEGORY:
    return {...state,categoryList:[...state.categoryList,action.payload]}

    case DELETE_CATEGORY:
    return {...state, categoryList:state.categoryList.filter((item) => item.id !== action.payload)}

    case SET_CATEGORY:
    const arr=[...state.categoryList]
    const findedIndex = arr.findedIndex((item) => item.id === action.payload.id)
    arr[findedIndex] = action.payload.category
    return {...state,categoryList:arr}

    default:
    return state


}



}

export default productCategoryReducer