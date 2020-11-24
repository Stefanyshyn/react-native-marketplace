import React, { useCallback } from 'react';
import { View } from 'react-native';
import s from './style';
import { observer } from 'mobx-react';
import Header from './components/Header/Header';
import LatestProducts from './LatestProducts/LatestProducts';
import SearchProducts from './SearchProducts/SearchProducts';

function BrowseScreen({ navigation }) {
    const isKeywords = !!navigation.getParam('isKeywords');
    const onPressItem = useCallback((id) => {
        console.log(id);
    }, []);

    return (
        <React.Fragment>
            <Header navigation={navigation} />
            <View style={s.container}>
                {isKeywords ? (
                    <SearchProducts onPressItem={onPressItem} />
                ) : (
                    <LatestProducts onPressItem={onPressItem} />
                )}
            </View>
        </React.Fragment>
    );
}
BrowseScreen.navigationOptions = {
    headerShown: false,
};
export default observer(BrowseScreen);
