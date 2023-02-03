import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actionTypes/productActionTypes"


export const addProduct = (product) => {
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}


export const deleteProduct = (id) => {
    return{
        type:DELETE_PRODUCT,
        payload:id
    }
}

export const updateProduct = (id,product) => {
    return{
        type:UPDATE_PRODUCT,
        payload:{id,product}
    }
}