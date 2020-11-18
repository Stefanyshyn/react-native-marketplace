import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import ProductView from '../ProductView/ProductView';
import { observer } from 'mobx-react';
import s from './style';

function ProductList({ store, ...props }) {

    return (
    <FlatList
            style={s.container}
            columnWrapperStyle={s.columnWrapperStyle}
            renderItem={({ item }) => (
                <ProductView item={item} rootProps={props} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            onEndReached={() => {
                store.fetchMore.run();
            }}
            onEndReachedThreshold={0.3}
            data={store.items}
            ListEmptyComponent={() => <Text>Empty</Text>}
    />
);
}

export default observer(ProductList);
