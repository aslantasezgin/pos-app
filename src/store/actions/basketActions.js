import {ADD_BASKET, DELETE_BASKET} from "../actionTypes/basketActionTypes"


export const addBasket = (basket) => {
    return{
        type:ADD_BASKET,
        payload:basket
    }
}

export const deleteBasket = (id) => {
    return{
        type:DELETE_BASKET,
        payload:id
    }
}