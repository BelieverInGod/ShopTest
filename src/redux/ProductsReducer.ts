import {AnyAction, Dispatch} from "redux";
import {shopServiceApi} from "../service/shopServiceApi";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_MORE_PRODUCT = 'SET_MORE_PRODUCT';

const initialState = {
    products: [],
}

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products}
        default:
            return state
    }
    switch (action.type) {
        case SET_MORE_PRODUCT:
            return {...state, products: [...state.products, action.products]}
        default:
            return state
    }
}

export const setProducts = (products: any) => ({type: SET_PRODUCTS, products})
export const setMoreProducts = (products: any) => ({type: SET_MORE_PRODUCT, products})

// export const requestCategories = () => {
//     return async (dispatch: Dispatch<AnyAction>) => {
//         const res = await shopServiceApi.getImages().then((response: any) => setProducts(response));
//         // console.log(res.categories.data.map((item:any) => item.name))
//     }
// }


export default ProductsReducer