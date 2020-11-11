export const NAMES = {
    TOKEN: '__token',
    PERSIST: '__persist__',
};

/****************** TOKEN **************************/

export const getToken = ()=>{
    return JSON.parse(localStorage.getItem(NAMES.TOKEN))
}

export const removeToken = ()=>{
    return localStorage.removeItem(NAMES.TOKEN);
}

export const setToken = (token) => {
    let json = JSON.stringify(token);
    localStorage.setItem(NAMES.TOKEN, json);
}

/****************** PERSIST **************************/

export const getPersist = () => {
    return JSON.parse(localStorage.getItem(NAMES.PERSIST));
}

export const removePersist = () => {
    return localStorage.removeItem(NAMES.PERSIST);
}

export const setPersist = (data) => {
    let json = JSON.stringify(data);
    localStorage.setItem(NAMES.PERSIST, json);
}
