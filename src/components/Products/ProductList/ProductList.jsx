import React from 'react';
import T from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import ProductView from '../ProductView/ProductView';
import ListFooter from '../ListFooter/ListFooter';
import { observer } from 'mobx-react';
import s from './style';

function ProductList({ store, ...props }) {
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
                store.fetchMore.run();
            }}
            data={items}
            ListFooterComponent={() => <ListFooter fetch={store.fetchMore}/>}
            ListEmptyComponent={() => <Text>Empty</Text>}
            refreshing={store.fetch.isLoading}
            initialNumToRender={8}
            onRefresh={() => {
                store.fetch.run();
            }}
        />
    );
}

ProductList.propTypes = {
    store: T.object,
    style: T.object,
};

export default observer(ProductList);
