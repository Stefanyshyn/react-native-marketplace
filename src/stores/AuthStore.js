import { types } from "mobx-state-tree";
import {asyncModel} from './utils';
import api from '../services/api';

const AuthStore = types.model("AuthStore", {
    isLoggedIn: false,
    loginFlow: asyncModel(login)
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

        store.setIsLoggedIn(true);
    }
}
export default AuthStore;