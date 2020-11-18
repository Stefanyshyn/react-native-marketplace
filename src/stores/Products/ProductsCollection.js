import api from '../../services/api';
import { useStore } from '../createStore';
import { normalize } from 'normalizr';
import { ProductSchema } from '../schemas';

const { createCollection, asyncModel } = require('../utils');
const { ProductModel } = require('./ProductModel');

export function useProductsCollection() {
    const store = useStore();
    return store.entities.products;
}

export const ProductsCollection = createCollection(ProductModel, {
    fetchProduct: asyncModel(fetchProduct),
});

function fetchProduct(id) {
    return async function fetchProductFlow(flow, store, root) {
        const { data: product } = await api.products.getProduct(id);

        const { entities } = normalize(product, ProductSchema);
        root.entities.merge(entities);
    };
}
