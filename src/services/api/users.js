import axios from 'axios';
import { API_URL } from '../../constants/url';
import { tokenStore } from '../localStorage';

axios.defaults.baseURL = API_URL;
const urls = {
    getMe: '/account',
    fetchUser: (id) => `/users/${id}`,
};

const users = {
    async _setToken() {
        const token = await tokenStore.getToken();
        axios.defaults.headers.common.Authorization = `Bearer ${token.slice(
            1,
            -1,
        )}`;
    },

    async getMe() {
        await this._setToken();
        return await axios.get(urls.getMe);
    },
    async fetchUser(id) {
        await axios.get(fetchUser(id));
    },
};

export default users;
