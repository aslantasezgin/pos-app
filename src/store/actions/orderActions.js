import {ADD_ORDER} from "../actionTypes/orderActionTypes"


export const addOrder = (order) => {
    return{
        type:ADD_ORDER,
        payload:order
    }
}