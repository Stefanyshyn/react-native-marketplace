import { types as t } from 'mobx-state-tree';
import LatestProductsStore from './LatestProductsStore';

const ProductStore = t.model('ProductStore', {
    latestProducts: t.optional(LatestProductsStore, {}),
});

export default ProductStore;
