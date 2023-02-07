import { combineReducers, createStore } from "redux";
import productCategoryReducer from "./reducers/productCategoryReducer";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";






const reducer = combineReducers({
    product:productReducer,
    productCategory:productCategoryReducer,
    basket:basketReducer
})



export const store = createStore(reducer)