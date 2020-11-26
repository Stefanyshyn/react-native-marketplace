import { getParent, types } from 'mobx-state-tree';
import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';
import api from '../../services/api';
import { OwnProductColllectionSchema } from '../schemas';

const OwnProductsStore = types
    .model('OwnProductsStore', {
        items: types.array(types.reference(ProductModel)),

        fetch: asyncModel(fetch),
    })
    .actions((store) => ({
        setItems(items) {
            store.items = items;
        },
    }));

function fetch() {
    return async function fetchFlow(flow, store) {
        const {
            data: { list },
        } = await api.products.fetchUserProducts(getParent(store).id);
        const result = flow.merge(list, OwnProductColllectionSchema);

        store.setItems(result);
    };
}

export default OwnProductsStore;
