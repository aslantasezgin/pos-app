import {ADD_CATEGORY, DELETE_CATEGORY, SET_CATEGORY} from "../actionTypes/productCategoryActionTypes"



export const addCategory = (category) => {
    return{
        type:ADD_CATEGORY,
        payload:category
    }
}

export const setCategory = (id,category) => {
    return{
        type:SET_CATEGORY,
        payload:{id,category}
    }
}

export const deleteCategory = (id) => {
    return{
        type:DELETE_CATEGORY,
        payload:id
    }
}