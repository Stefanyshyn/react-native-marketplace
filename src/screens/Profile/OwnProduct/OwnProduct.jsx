import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import s from './style';
import { observer } from 'mobx-react';
import Touchable from '../../../components/Touchable/Touchable';
import { ScrollView } from 'react-native-gesture-handler';
import ProductListWithoutFetchingMore from '../../../components/Products/ProductList/ProductListWithoutFetchingMore';
import { getSnapshot } from 'mobx-state-tree';

function OwnProduct({ user }) {
    useEffect(() => {
        user.ownProducts.fetch.run();
    }, []);
    const [tab, setTab] = useState(1);

    const onPress = useCallback((tab) => {
        setTab(tab);
    }, []);
    if (!user) return <ActivityIndicator size="large" />;
    return (
        <React.Fragment>
            <View style={s.tabsWrapper}>
                <Touchable
                    style={[s.tab, tab === 1 && s.tabActive]}
                    onPress={() => onPress(1)}
                >
                    <Text
                        style={[
                            s.tabText,
                            tab === 1 && s.tabTextActive,
                        ]}
                    >
                        ACTIVE
                    </Text>
                </Touchable>
                <Touchable
                    style={[s.tab, tab === 2 && s.tabActive]}
                    onPress={() => onPress(2)}
                >
                    <Text
                        style={[
                            s.tabText,
                            tab === 2 && s.tabTextActive,
                        ]}
                    >
                        ARCHIVED
                    </Text>
                </Touchable>
            </View>
            <ScrollView style={s.productsWrapper}>
                <ProductListWithoutFetchingMore
                    store={user.ownProducts}
                    fetch={user.ownProducts.fetch}
                />
            </ScrollView>
        </React.Fragment>
    );
}
export default observer(OwnProduct);
