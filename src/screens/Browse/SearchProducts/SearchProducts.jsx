import React, { useEffect } from 'react';
import ProductList from '../../../components/Products/ProductList/ProductList';
import { observer } from 'mobx-react';
import { alert } from '../../../utils/alert';
import { useStore } from '../../../stores/createStore';

function SearchProducts({ onPressItem }) {
    const searchProducts = useStore(
        (store) => store.products.searchProducts,
    );
    useEffect(() => {
        if (!searchProducts.search.isLoading)
            searchProducts.search.run().catch((err) => alert(err));
    }, []);
    return (
        <ProductList
            store={searchProducts}
            fetch={searchProducts.search}
            fetchMore={searchProducts.searchMore}
            onPressItem={onPressItem}
        />
    );
}

export default observer(SearchProducts);
