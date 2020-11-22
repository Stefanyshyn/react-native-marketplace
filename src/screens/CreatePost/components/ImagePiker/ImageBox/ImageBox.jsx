import React from 'react';
import { Image, View } from 'react-native';
import s from './style';
import Touchable from '../../../../../components/Touchable/Touchable';
import { AntDesign } from '@expo/vector-icons';
import color from '../../../../../styles/color';

function ImageBox({ photo }) {
    return <Image source={{ uri: photo }} />;

    return (
        <View style={s.container}>
            <Touchable>
                <AntDesign
                    style={s.close}
                    name="closesquare"
                    size={24}
                    color={color.error}
                />
                <Image source={{ uri: photo }} />
            </Touchable>
        </View>
    );
}
export default ImageBox;
