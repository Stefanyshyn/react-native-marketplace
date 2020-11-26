import axios from 'axios';
import { API_URL } from '../../constants/url';
import { tokenStore } from '../localStorage';

const urls = {
    fetchUserProducts: (id) => `/users/${id}/products`,
    search: '/products/search',
    createPost: '/products',
    fetchLatest: '/products/latest',
    fetchLatestMore: ({ from, limit }) =>
        `/products/latest?limit=${limit}&from=${from}`,
};

axios.defaults.baseURL = API_URL;

const auth = {
    _token: null,

    get isLoogedIn() {
        return !!this._token;
    },

    async init() {
        this._token = await tokenStore.getToken();

        this._setTokenToAxios(this._token);
    },
    async setToken(token) {
        await tokenStore.setToken(token);
    },

    async fetchLatest() {
        await this.init();
        return axios.get(urls.fetchLatest);
    },
    async fetchLatestMore({ limit, from }) {
        await this.init();
        return axios.get(urls.fetchLatestMore({ limit, from }));
    },
    async createPost({ title, descrition, photos, price, location }) {
        await this.init();
        return axios.post(urls.createPost, {
            title,
            descrition,
            photos,
            price,
            location,
        });
    },
    fetchUserProducts(id) {
        return axios.get(urls.fetchUserProducts(id));
    },
    async searchProduct(values) {
        //        await this.init();
        const params = Object.entries(values).map(
            ([key, value]) => `&${key}=${value}`,
        );
        console.log(urls.search + '?' + params.join(''));
        return axios.get(urls.search + '?' + params.join(''));
    },
    _setTokenToAxios(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
};

export default auth;
