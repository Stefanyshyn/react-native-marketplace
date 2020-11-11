import axios from 'axios';

import {
  getToken,
  setToken as storeToken,
  removeToken,
} from '../localStorage';

const urls = {
  register: '/api/auth/register',
  login: '/api/auth/login',
};

const auth = {
  _token: null,

  get isLoogedIn() {
    return !!this._token;
  },

  init() {
    try {
      this._token = getToken();

      this._setTokenToAxios(this._token);
    } catch (err) {
      alert(err);
    }
  },
  setToken(token) {
    try {
      storeToken(token);

      this._token = token;
      this._setTokenToAxios(token);
    } catch (err) {
      alert(err);
    }
  },

  async register(email, fullName, password) {
    return axios.post(urls.register, {
      email,
      fullName,
      password,
    });
  },

  async login(email, password) {
    return axios.post(urls.login, { email, password });
  },

  logout() {
    this._token = '';
    try {
      removeToken();
    } catch (err) {
      alert(err);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export default auth;
