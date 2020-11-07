import React from 'react';
import { Button, View } from 'react-native';
import NavigationService from '../../../services/NavigationService';
import { screens } from '../../screens';
import s from "./style";

function HomeScreen() {
    return (
        <View style={s.container}>
            Home
            <Button onPress={()=>{
                NavigationService.navigane(screens.Register)
            }} title="Go to register"></Button>
            <Button onPress={()=>{
                NavigationService.navigane(screens.Home)
            }}  title="Go to Home"></Button>
        </View>
    )
}

export  default HomeScreen;