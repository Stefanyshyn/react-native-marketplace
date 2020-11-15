import {types} from 'mobx-state-tree';
import api from '../../services/api';
import { asyncModel } from '../utils';

const RegisterStore = types.model("RegisterStore", {
    email: "",
    fullname: "",
    password: "",

    registerFlow: asyncModel(register),
}).actions(store=>({
    setEmail(email){
        store.email=email;
    },
    setFullname(fullname){
        store.fullname=fullname;
    },
    setPassword(password){
        store.password=password;
    },
    reset(){
        store.email="";
        store.fullname="";
        store.password="";
    }
}));

function register(){
    return async function registerFlow(flow, store, root){
        let _email = 'testivan@q.hkjuiyuykehkj';
        let _fullname = 'lol';
        let _password = '12345678';
        
        const {data} = await api.auth.register(store.email, store.fullname, store.password);

        await api.auth.setToken(data.token);

        root.viewer.setViewer(data.user);
        root.auth.setIsLoggedIn(true);
        store.reset();
    }
}

export default RegisterStore;