import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import s from './style';
import Touchable from '../../../../../components/Touchable/Touchable';
import { AntDesign } from '@expo/vector-icons';
import color from '../../../../../styles/color';

function ImageBox({ photo, remove }) {
    const onClose = () => {
        remove();
    };
    return (
        <Touchable style={s.container}>
            <Image style={s.image} source={{ uri: photo }} />
            <AntDesign
                style={s.close}
                name="closesquare"
                size={16}
                color={color.error}
                onPress={onClose}
            />
        </Touchable>
    );
}
export default ImageBox;
