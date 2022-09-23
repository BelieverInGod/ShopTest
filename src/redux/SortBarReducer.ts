import {AnyAction, Dispatch} from "redux";
import {shopServiceApi} from "../service/shopServiceApi";

const SET_CATEGORY = 'SET_CATEGORY'

const initialState = {
    categories: [],
}

const SortBarReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, categories: action.categories}
        default:
            return state
    }
}

export const setCategory = (categories: any) => ({type: SET_CATEGORY, categories})

export const requestCategories = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        const res = await shopServiceApi.getCategories().then((response: any) => setCategory(response));
        // console.log(res.categories.data.map((item:any) => item.name))
    }
}


export default SortBarReducer