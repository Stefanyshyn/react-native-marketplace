import React from 'react';
import T from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import ProductView from '../ProductView/ProductView';
import ListFooter from '../ListFooter/ListFooter';
import { observer } from 'mobx-react';
import s from './style';

function ProductList({ store, fetchMore, fetch, ...props }) {
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
            onEndReachedThreshold={0.3}
            onEndReached={() => {
                fetchMore.run();
            }}
            data={items}
            ListFooterComponent={() => (
                <ListFooter fetch={fetchMore} />
            )}
            ListEmptyComponent={() => <Text>Empty</Text>}
            refreshing={fetch.isLoading}
            initialNumToRender={8}
            onRefresh={() => {
                fetch.run();
            }}
        />
    );
}

ProductList.propTypes = {
    store: T.object,
    style: T.object,
};

export default observer(ProductList);
