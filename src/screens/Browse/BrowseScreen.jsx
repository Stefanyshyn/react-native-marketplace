import React from 'react';
import { Button, View } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { screens } from '../screens';
import s from "./style";

function BrowseScreen() {
    return (
        <View style={s.container}>
            Browse
            <Button onPress={()=>{
                NavigationService.navigane(screens.Login)
            }} title="Go to Login"></Button>
            <Button onPress={()=>{
                NavigationService.navigane(screens.CreatePost)
            }} title="Create post"></Button>
            
        </View>
    )
}

export  default BrowseScreen;