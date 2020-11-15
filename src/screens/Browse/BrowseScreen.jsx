import React from 'react';
import { Button, Text,View } from 'react-native';
import NavigationService from '../../services/NavigationService';
import { screens } from '../screens';
import s from "./style";

function BrowseScreen() {
    return (
        <View style={s.container}>
            
            <Text>
                Browse
            </Text> 
            <Button onPress={()=>{
                NavigationService.navigate(screens.Login)
            }} title="Go to Login"></Button>
            <Button onPress={()=>{
                NavigationService.navigate(screens.CreatePost)
            }} title="Create post"></Button>
            
        </View>
    )
}

export  default BrowseScreen;