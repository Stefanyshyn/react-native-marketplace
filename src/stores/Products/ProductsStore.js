import { types as t } from 'mobx-state-tree';
import api from '../../services/api';
import LatestProductsStore from './LatestProductsStore';
import SearchProductsStore from './SearchProductsStore';
import { ProductSchema } from '../schemas';
import { asyncModel } from '../utils';
const ProductStore = t.model('ProductStore', {
    latestProducts: t.optional(LatestProductsStore, {}),
    searchProducts: t.optional(SearchProductsStore, {}),

    createPostFlow: asyncModel(createPost),
});

function createPost(values_) {
    return async (flow) => {
        console.log(values);
        const values = {
            title: 'product',
            photos: [],
            price: 10,
            location: 'Ternopil',
        };
        const result = await api.products.createPost(values);
        flow.merge(result.data, ProductSchema);
    };
}

export default ProductStore;
