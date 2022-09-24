import {AnyAction} from "redux";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_MORE_PRODUCT = 'SET_MORE_PRODUCT';
const SET_LIKE = 'SET_LIKE';

const initialState = {
    products: [
        {like: true}
    ],
}

const ProductsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case SET_MORE_PRODUCT:
            return {...state, products: [...state.products, action.products]}
        case SET_LIKE:
            return {...state, like: action.like}
        default:
            return state
    }
}

export const setLike = (like: any) => ({type: SET_LIKE, like})
export const setProducts = (products: any) => ({type: SET_PRODUCTS, products})
export const setMoreProducts = (products: any) => ({type: SET_MORE_PRODUCT, products})

// export const requestCategories = () => {
//     return async (dispatch: Dispatch<AnyAction>) => {
//         const res = await shopServiceApi.getImages().then((response: any) => setProducts(response));
//         // console.log(res.categories.data.map((item:any) => item.name))
//     }
// }


export default ProductsReducer