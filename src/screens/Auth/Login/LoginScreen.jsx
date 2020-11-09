import React from 'react';
import { Button, Text, View } from 'react-native';
import NavigationService from '../../../services/NavigationService';
import { screens } from '../../screens';
import s from "./style";

function LoginScreen() {
    return (
        <View style={s.container}>
           <Text>
            Login
           </Text>
            <Button onPress={()=>{
                NavigationService.navigane(screens.Register)
            }} title="Go to register"></Button>
             <Button onPress={()=>{
                NavigationService.navigane(screens.MainApp)
            }} title="Go to Browse"></Button>
        </View>
    )
}

export  default LoginScreen;