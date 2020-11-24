import React, { useEffect } from 'react';
import ProductList from '../../../components/Products/ProductList/ProductList';
import { observer } from 'mobx-react';
import { alert } from '../../../utils/alert';
import { useStore } from '../../../stores/createStore';

function LatestProducts({ onPressItem }) {
    const latestProducts = useStore(
        (store) => store.products.latestProducts,
    );

    useEffect(() => {
        latestProducts.fetch.run().catch((err) => alert(err));
    }, []);

    return (
        <ProductList
            store={latestProducts}
            fetch={latestProducts.fetch}
            fetchMore={latestProducts.fetchMore}
            onPressItem={onPressItem}
        />
    );
}

export default observer(LatestProducts);
