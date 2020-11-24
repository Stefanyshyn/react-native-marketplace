import React from 'react';
import { FlatList, Text } from 'react-native';
import ProductView from '../ProductView/ProductView';
import { observer } from 'mobx-react';
import s from './style';

function ProductListWithoutFetchingMore({ store, fetch, ...props }) {
    const items = store.items.slice();
    return (
        <FlatList
            style={s.container}
            columnWrapperStyle={s.columnWrapperStyle}
            renderItem={({ item }) => (
                <ProductView item={item} rootProps={props} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={items}
            ListEmptyComponent={() => <Text>Empty</Text>}
            refreshing={fetch.isLoading}
            onRefresh={() => {
                fetch.run();
            }}
        />
    );
}

export default observer(ProductListWithoutFetchingMore);
