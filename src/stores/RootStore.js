import {types} from 'mobx-state-tree';
import AuthStore from './AuthStore'

const RootStore = types.model("RootStore", {
//    viewer:
    auth: types.optional(AuthStore, {}),
});

export default RootStore;