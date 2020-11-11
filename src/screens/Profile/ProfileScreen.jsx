import React from 'react';
import { Text,View } from 'react-native';
import { Button } from 'react-native-paper';
import s from "./style";

function ProfileScreen() {
    return (
        <View style={s.container}>
            <Text>
                Profile
            </Text>
            <Button onPress={} title="Logout"></Button>
        </View>    
    )
}

export  default ProfileScreen;