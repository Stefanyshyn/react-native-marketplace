import { types } from 'mobx-state-tree';
import AuthStore from './Aurh/AuthStore';
import ViewerStore from './ViewerStore';
import EntitiesStore from './EntitiesStore';
import ProductsStore from './Products/ProductsStore';

const RootStore = types.model('RootStore', {
    viewer: types.optional(ViewerStore, {}),
    auth: types.optional(AuthStore, {}),
    products: types.optional(ProductsStore, {}),
    entities: types.optional(EntitiesStore, {}),
});

export default RootStore;
