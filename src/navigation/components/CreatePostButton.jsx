import React from 'react';
import Icon from '../../atom/Icon';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, Animated } from 'react-native';
import color from '../../styles/color';
import Touchable from '../../components/Touchable/Touchable';
import { TouchableHighlight } from 'react-native-gesture-handler';

const s = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary,
        borderRadius: 36,
        top: -26,
        width: 72,
        height: 72,
    },
});

function CreatePostButton() {
    return (
        <Animated.View
            style={s.wrapper}
            onPress={() => console.log(1)}
        >
            <FontAwesome5 name="plus" size={24} color={color.white} />
        </Animated.View>
    );
}

export default CreatePostButton;
