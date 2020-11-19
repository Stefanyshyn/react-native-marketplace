import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { observer } from 'mobx-react';
import s from './style';
import color from '../../../styles/color';

function ListFooter({ fetch }) {
    if (fetch.isLoading)
        return (
            <View style={s.container}>
                <ActivityIndicator
                    size="large"
                    color={color.primary}
                />
            </View>
        );
    return null;
}

export default observer(ListFooter);
