import axios from 'axios';
import { API_URL } from '../../constants/url';
import { tokenStore } from '../localStorage';

axios.defaults.baseURL = API_URL;
const urls = {
    getMe: '/api/account',
};

const users = {
    async _setToken() {
        const token = await tokenStore.getToken();

        if (!!token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            return true;
        } else return false;
    },

    async getMe() {
        let isToken = await this._setToken();
        if (!isToken) return;
        await axios.get(urls.getMe);
    },
};

export default users;
