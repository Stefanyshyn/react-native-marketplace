import { types } from "mobx-state-tree";

const ViewerStore = types.model("ViewerStore", {
    user: types.optiopal(UserModel, {})
})
.actions(store=>({
    setViewer(user){
        store.user = user;
    }
}))
export default ViewerStore;