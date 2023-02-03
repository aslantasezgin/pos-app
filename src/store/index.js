import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";






const reducer = combineReducers({
    product:productReducer
})



export const store = createStore(reducer)