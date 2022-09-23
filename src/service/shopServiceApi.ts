import axios from "axios";

const api = axios.create({
    withCredentials: true,
    baseURL: 'https://api.escuelajs.co/api/v1/',
})

export default api;

export const shopServiceApi = {
    getCategories():any {
        api.get('categories/')
        .then(response => response)
    }     
}