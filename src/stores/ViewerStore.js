import { types } from "mobx-state-tree";
import {UserModel} from './Users/UserModel'
const ViewerModel = UserModel.named("ViewerModel");



const ViewerStore = types.model("ViewerStore", {
    user: types.maybe(ViewerModel),
})
.actions(store=>({
    setViewer(user){
        store.user = user;
    }
}))

export default ViewerStore;