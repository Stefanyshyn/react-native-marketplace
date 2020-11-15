import {types} from 'mobx-state-tree';
import AuthStore from './Aurh/AuthStore'
import ViewerStore from './ViewerStore'

const RootStore = types.model("RootStore", {
    viewer: types.optional(ViewerStore, {}),
    auth: types.optional(AuthStore, {}),
});

export default RootStore;