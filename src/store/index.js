import { combineReducers, createStore } from "redux";
import productCategoryReducer from "./reducers/productCategoryReducer";
import productReducer from "./reducers/productReducer";






const reducer = combineReducers({
    product:productReducer,
    productCategory:productCategoryReducer
})



export const store = createStore(reducer)