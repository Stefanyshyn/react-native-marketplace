import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import s from './style';
import Touchable from '../../Touchable/Touchable';
import { observer } from 'mobx-react';

function ProductView({ item: product, rootProps }) {
    const { onPressItem } = rootProps;
    
    const handleSave = useCallback(() => {
        console.log('save', product.id);
    }, []);

    return (
        <Touchable
            style={s.container}
            onPress={() => onPressItem(product.id)}
        >
            <Image
                style={s.photo}
                source={{
                    uri: Array.isArray(product.photos) && product.photos.length ? product.photos[0]: 'assets:/no-photo.png',
                }}
            />
            <View style={s.infoWrapper}>
                <Text numberOfLines={1} style={s.title}>
                    {product.title}
                </Text>
                <View style={s.bottom}>
                    <Text numberOfLines={1} style={s.price}>
                        ${product.price}
                    </Text>
                    <Text style={s.save} onPress={handleSave}>
                        {' '}
                        save
                    </Text>
                </View>
            </View>
        </Touchable>
    );
}
export default observer(ProductView);
