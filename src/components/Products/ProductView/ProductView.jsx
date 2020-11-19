import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import s from './style';
import Touchable from '../../Touchable/Touchable';
import { observer } from 'mobx-react';
import noPhoto from '../../../../assets/no-photo.png';
const noPhotoUri = Image.resolveAssetSource(noPhoto).uri;

const ProductView = ({ item }) => {
    const onPressItem = () => {};

    const handleSave = useCallback(() => {
        console.log('save', item.id);
    }, []);

    return (
        <Touchable
            style={s.container}
            onPress={() => onPressItem(item.id)}
        >
            <Image
                style={s.photo}
                source={{
                    uri:
                        Array.isArray(item.photos) &&
                        item.photos.length
                            ? item.photos[0]
                            : noPhotoUri,
                }}
            />
            <View style={s.infoWrapper}>
                <Text numberOfLines={1} style={s.title}>
                    {item.title}
                </Text>
                <View style={s.bottom}>
                    <Text numberOfLines={1} style={s.price}>
                        ${item.price}
                    </Text>
                    <Text style={s.save} onPress={handleSave}>
                        {' '}
                        save
                    </Text>
                </View>
            </View>
        </Touchable>
    );
};
export default observer(ProductView);
