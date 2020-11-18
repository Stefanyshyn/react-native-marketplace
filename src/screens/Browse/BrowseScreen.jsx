import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { screens } from '../screens';
import s from './style';
import ProductList from '../../components/Products/ProductList/ProductList';
import { observer } from 'mobx-react';
import { alert } from '../../utils/alert';
import { useStore } from '../../stores/createStore';

function BrowseScreen() {
    const store = useStore();

    useEffect(() => {
        store.products.latestProducts.fetch
            .run()
            //.then(() => alert('success'))
            .catch((err) => alert(err));
    }, []);

    const onPressItem = useCallback((id) => {
        console.log(id);
    }, []);

    return (
        <View style={s.container}>
            <Text>{store.products.latestProducts.items.length}</Text>
            <ProductList
                store={store.products.latestProducts}
                onPressItem={onPressItem}
            />
        </View>
    );
}

export default observer(BrowseScreen);
