import axios from 'axios';
import {API_URL} from '../../constants/url';
import { tokenStore } from '../localStorage';

const urls = {
  register: `/auth/register`,
  login: `/auth/login`,
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

  register(email, fullName, password) {
    return axios.post(urls.register, {
      email,
      fullName,
      password,
    });
  },

  login(email, password) {
    return axios.post(urls.login,
    {email, password})
  },

  logout() {
    this._token = '';
    removeToken();
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export default auth;
