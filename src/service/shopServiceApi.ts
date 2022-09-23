import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const shopServiceApi = {
    getCategories():any {
        return api.get('categories/')
    }     
}