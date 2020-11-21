import React from 'react';
import { Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import s from './style';
import color from '../../styles/color';
import Touchable from '../../components/Touchable/Touchable';
import NavigationService from '../../services/NavigationService';

function CreatePostScreen() {
    return (
        <View style={s.container}>
            <Text>Create Post</Text>
        </View>
    );
}
CreatePostScreen.navigationOptions = {
    headerLeft:()=>(
        <Touchable onPress={()=> NavigationService.goBack()} >
            <Ionicons name='ios-close' size={32} color={color.primary}/>
        </Touchable>
    )
}

export default CreatePostScreen;
