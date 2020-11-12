import React from 'react';
import { Platform, Text, TouchableNativeFeedback, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../../screens/Auth/Login/style';

const isAndroid = Platform.OS === 'android'

const Touchable = (props) => {
    if(isAndroid)
        return (
            <TouchableNativeFeedback {...props}>
                <View style={props.style}>
                    {props.children}
                </View>
            </TouchableNativeFeedback>
        )
    return (
        <TouchableOpacity {...props}>
            {props.children}
        </TouchableOpacity>
    )
}

export default Touchable;