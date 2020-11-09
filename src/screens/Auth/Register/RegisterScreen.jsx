import React from 'react';
import { Button, Text,View } from 'react-native';
import NavigationService from '../../../services/NavigationService';
import { screens } from '../../screens';
import s from "./style";

function HomeScreen() {
    return (
        <View style={s.container}>
               <Text>
               Register
           </Text> 
            <Button onPress={()=>{
                NavigationService.navigane(screens.Login)
            }} title="Go to Login"></Button>
        </View>
    )
}

export  default HomeScreen;