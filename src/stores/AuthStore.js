import { types } from "mobx-state-tree";
import {asyncModel} from './utils';
import api from '../services/api';
import {tokenStore} from '../services/localStorage';

const AuthStore = types.model("AuthStore", {
    isLoggedIn: true,
    loginFlow: asyncModel(login),
    logoutFlow: asyncModel(logout)

}).actions(store=>({
    setIsLoggedIn(value){
        store.isLoggedIn = value;
    }
}))
function login(email, password){
    return async function loginFlow(flow, store, root){
        let _email = 'testivan@q.q';
        let _password = '12345678';
        const {data} = await api.auth.login(_email, _password);

        await api.auth.setToken(data.token);

        root.viewer.setViewer(data.user);
        store.setIsLoggedIn(true);
    }
}
function logout(){
    return async function logoutFlow(flow, store, root){

        await tokenStore.removeToken();
        store.setIsLoggedIn(false);
        root.viewer.setViewer(undefined);
    }
}
export default AuthStore;