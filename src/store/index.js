import { combineReducers, createStore } from "redux";
import productCategoryReducer from "./reducers/productCategoryReducer";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import orderReducer from "./reducers/orderReducer";






const reducer = combineReducers({
    product:productReducer,
    productCategory:productCategoryReducer,
    basket:basketReducer,
    order:orderReducer
})



export const store = createStore(reducer)