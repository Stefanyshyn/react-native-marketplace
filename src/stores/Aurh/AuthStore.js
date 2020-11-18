import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import api from '../../services/api';
import { tokenStore } from '../../services/localStorage';
import LoginStore from './LoginStore';
import RegisterStore from './RegisterStore';

const AuthStore = types
    .model('AuthStore', {
        login: types.optional(LoginStore, {}),
        register: types.optional(RegisterStore, {}),
        isLoggedIn: true,
        logoutFlow: asyncModel(logout),
    })
    .actions((store) => ({
        setIsLoggedIn(value) {
            store.isLoggedIn = value;
        },
    }));

function logout() {
    return async function logoutFlow(flow, store, root) {
        await tokenStore.removeToken();
        store.setIsLoggedIn(false);
        root.viewer.setViewer(undefined);
    };
}
export default AuthStore;
