import {types} from 'mobx-state-tree';

const RegisterStore = types.model("RegisterStore", {
    email: "",
    fullname: "",
    password: "",
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

export default RegisterStore;