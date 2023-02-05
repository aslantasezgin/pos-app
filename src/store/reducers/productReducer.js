
import { ADD_PRODUCT,DELETE_PRODUCT, UPDATE_PRODUCT } from "../actionTypes/productActionTypes";
import { posState } from "../state/posState";


function productReducer(state = posState,action){
    switch(action.type){

     case ADD_PRODUCT:
     return {...state,productList:[...state.productList,action.payload]}   

     case DELETE_PRODUCT:
     return {...state,productList:state.productList.filter((item) => item.id !==action.payload)}

     case UPDATE_PRODUCT:
     const arr=[...state.productList]
     const findedIndex = arr.findIndex((item) => item.id === action.payload.id)
     arr[findedIndex] = action.payload.product
     return {...state,productList:arr}   

     default:
     return state


    }
}

export default productReducer