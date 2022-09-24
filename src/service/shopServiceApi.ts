import axios from "axios";
import {Params} from "react-router-dom";

const api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const shopServiceApi = {
    getCategories():any {
        return api.get('categories/')
    },
    getProduct(id: string | undefined, page: number | undefined):any {
        return api.get(`categories/${id}/products?offset=0&limit=${page}`)
    },
    getOneProduct(id: number | undefined, num: number | undefined) {
        return api.get(`categories/${id}/products/${num}`)
    }
}