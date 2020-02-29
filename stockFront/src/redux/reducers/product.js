import { LOAD_PRODUCTS, EDIT_PRODUCT, FILTER_PRODUCTS } from "../actions/actionTypes";

const initialState = {
    selectedProduct: {},
    productsRows: [],
    filteredProducts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER_PRODUCTS: {
            const { filteredProducts } = action.payload;
            return {
                ...state,
                filteredProducts:  filteredProducts || initialState.filteredProducts
            };
        }
        case LOAD_PRODUCTS: {
            const { productsRows } = action.payload;
            return {
                ...state,
                productsRows:  productsRows || initialState.productsRows
            };
        }
        case EDIT_PRODUCT: {
            const { selectedProduct } = action.payload;
            return {
                ...state,
                selectedProduct
            };
        }
        default:
            return state;
    }
}
