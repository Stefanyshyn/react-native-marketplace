import React from 'react';
import { Button, View } from 'react-native';
import NavigationService from '../../../services/NavigationService';
import { screens } from '../../screens';
import s from "./style";

function HomeScreen() {
    return (
        <View style={s.container}>
            register
            <Button onPress={()=>{
                NavigationService.navigane(screens.Login)
            }} title="Go to Login"></Button>
        </View>
    )
}

export  default HomeScreen;