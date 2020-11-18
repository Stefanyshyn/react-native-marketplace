import { getSnapshot, types } from 'mobx-state-tree';
import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';
import api from '../../services/api';
import { LatestProductColllectionSchema } from '../schemas';
import { useStore } from '../createStore';
import { FETCH_SIZE } from '../../constants/products';

const LatestProductsStore = types
    .model('LatestProductsStore', {
        items: types.array(types.reference(ProductModel)),
        hasNextProducts: true,

        fetch: asyncModel(fetch),
        fetchMore: asyncModel(fetchMore, false),
    })
    .actions((store) => ({
        setItems(items) {
            store.items = items;
        },
        setHasNextProducts(value) {
            store.hasNextProduct = !!value;
        },
        append(items) {
            store.items.push(...items);
        },
    }));

function fetch() {
    return async function fetchFlow(flow, store, root) {
        const { data } = await api.products.fetchLatest();
        const result = flow.merge(
            data,
            LatestProductColllectionSchema,
        );

        store.setHasNextProducts(data.length === FETCH_SIZE);

        store.setItems(result);
    };
}

function fetchMore() {
    return async function fetchMoreFlow(flow, store, root) {
        if (
            store.fetch.isLoading ||
            flow.isLoading ||
            store.items.length === 0
        )
            return;
        try {
            const lastItem = store.items[store.items.length - 1];
            flow.start();
            const { data } = await api.products.fetchLatestMore({
                from: lastItem.id,
                limit: FETCH_SIZE,
            });

            const result = flow.merge(
                data,
                LatestProductColllectionSchema,
            );
            store.setHasNextProducts(data.length === FETCH_SIZE);

            //alert(Object.keys(getSnapshot(root.entities.products.collection)).length)

            store.append(result);
        } catch (err) {
            alert(err);
            flow.error(err);
        }
    };
}

export function useLatestProductsStore() {
    const store = useStore();
    return store.products.latestProducts;
}
export default LatestProductsStore;
