import AsyncStorage from '@react-native-community/async-storage';

export const NAMES = {
    TOKEN: '__token',
    PERSIST: '__persist__',
};

/****************** TOKEN **************************/

export const getToken =  async ()=>{
    let token;
    token = await  AsyncStorage.getItem(NAMES.TOKEN);
    return token;
}

// export const removeToken = ()=>{
//     return AsyncStorage.removeItem(NAMES.TOKEN);
// }

export const setToken = async (token) => {
    let json = JSON.stringify(token);
    await AsyncStorage.setItem(NAMES.TOKEN, json);

}

// /****************** PERSIST **************************/

// export const getPersist = () => {
//     return JSON.parse(localStorage.getItem(NAMES.PERSIST));
// }

// export const removePersist = () => {
//     return localStorage.removeItem(NAMES.PERSIST);
// }

// export const setPersist = (data) => {
//     let json = JSON.stringify(data);
//     localStorage.setItem(NAMES.PERSIST, json);
// }
