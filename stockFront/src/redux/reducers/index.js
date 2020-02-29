import { combineReducers } from 'redux';
import ProductReducers from "./product.js";

export const Reducers = combineReducers({
    productState: ProductReducers
});