import { LOAD_PRODUCTS, EDIT_PRODUCT, FILTER_PRODUCTS } from "./actionTypes";

export const loadProducts = productsRows => ({
    type: LOAD_PRODUCTS,
    payload: { productsRows }
});

export const filterProducts = filteredProducts => ({
    type: FILTER_PRODUCTS,
    payload: { filteredProducts }
}); 

export const editProduct = selectedProduct => ({
    type: EDIT_PRODUCT,
    payload: { selectedProduct }
});