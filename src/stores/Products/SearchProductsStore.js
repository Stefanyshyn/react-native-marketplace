import { getSnapshot, types } from 'mobx-state-tree';
import { ProductModel } from './ProductModel';
import { asyncModel } from '../utils';
import api from '../../services/api';
import { LatestProductColllectionSchema } from '../schemas';
import { useStore } from '../createStore';
import { FETCH_SIZE } from '../../constants/products';

const SearchProductsStore = types
    .model('SearchProductsStore', {
        items: types.array(types.reference(ProductModel)),
        hasNextProducts: true,
        keywords: '',

        search: asyncModel(search),
        searchMore: asyncModel(searchMore, false),
    })
    .actions((store) => ({
        setItems(items) {
            store.items = items;
        },
        setKeywords(keywords) {
            store.keywords = keywords;
        },
        setHasNextProducts(value) {
            store.hasNextProduct = !!value;
        },
        append(items) {
            store.items.push(...items);
        },
    }));

function search() {
    return async function fetchFlow(flow, store, root) {
        const { data } = await api.products.searchProduct({
            keywords: store.keywords,
        });
        const result = flow.merge(
            data,
            LatestProductColllectionSchema,
        );

        store.setHasNextProducts(data.length === FETCH_SIZE);

        store.setItems(result);
    };
}

function searchMore() {
    return async function fetchMoreFlow(flow, store, root) {
        if (
            store.search.isLoading ||
            flow.isLoading ||
            store.items.length === 0
        )
            return;
        try {
            flow.start();
            const { data } = await api.products.searchProduct({
                keywords: store.keywords,
                offset: store.items.length,
                limit: FETCH_SIZE,
            });
            const result = flow.merge(
                data,
                LatestProductColllectionSchema,
            );

            store.setHasNextProducts(data.length === FETCH_SIZE);

            store.append(result);
            flow.success();
        } catch (err) {
            flow.error(err);
        }
    };
}

export function useLatestProductsStore() {
    const store = useStore();
    return store.products.latestProducts;
}
export default SearchProductsStore;
