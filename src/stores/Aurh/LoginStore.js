import {types} from 'mobx-state-tree';
import api from '../../services/api';
import { asyncModel } from '../utils';

const LoginStore = types.model("LoginStore", {
    email: "",
    password: "",
    
    loginFlow: asyncModel(login),
}).actions(store=>({
    setEmail(email){
        store.email=email;
    },
    setPassword(password){
        store.password=password;
    },
    reset(){
        store.email="";
        store.password="";
    }
}));

function login(email, password){
    return async function loginFlow(flow, store, root){
        let _email = 'testivan@q.q';
        let _password = '12345678';
        const {data} = await api.auth.login(_email, _password);

        await api.auth.setToken(data.token);

        root.viewer.setViewer(data.user);
        root.auth.setIsLoggedIn(true);
    }
}
export default LoginStore;