import React, { useCallback, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import s from './style';
import { observer } from 'mobx-react';
import { useStore } from '../../../../stores/createStore';
import Header from '../../../../components/Header/Header';
import { Ionicons } from '@expo/vector-icons';
import style from '../../../../styles/style';
import Touchable from '../../../../components/Touchable/Touchable';
import { screens } from '../../../../screens/screens';
function HeaderCustome({ navigation }) {
    const searchProducts = useStore(
        (store) => store.products.searchProducts,
    );
    const [keywords, setKeywords] = useState('');
    const onChange = useCallback((value) => setKeywords(value));
    const onSearch = useCallback(async () => {
        searchProducts.setKeywords(keywords);
        await searchProducts.search.run();
        if (!searchProducts.search.isError)
            navigation.navigate(screens.Browse, { isKeywords: true });
    });
    return (
        <Header>
            <View style={[s.searchWrapper, style.inputBorder]}>
                <Ionicons
                    style={s.searchIcon}
                    name="md-search"
                    size={16}
                    color="black"
                />
                <TextInput
                    style={s.searchInput}
                    value={keywords}
                    onChangeText={onChange}
                    placeholder={'Search'}
                />
            </View>
            <Touchable style={s.searchButton} onPress={onSearch}>
                <Text style={s.textSearchButton}> Search</Text>
            </Touchable>
        </Header>
    );
}
export default observer(HeaderCustome);
